import { buildEmail, validateSubmission } from './_lib/validation';

// The ONLY place the destination address exists. Never move this to src/.
const TO_ADDRESS = 'ryan@roga.dev';
const FROM_ADDRESS = 'Roga Digital Support <support@roga.dev>';

function json(status: number, body: Record<string, unknown>): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export async function POST(request: Request): Promise<Response> {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return json(400, { error: 'Invalid request body.' });
	}

	const result = validateSubmission(body);
	if (!result.ok) return json(400, { error: result.error });
	const data = result.data;

	// Honeypot tripped: pretend success, send nothing, don't tip off the bot.
	if (data.website !== '') return json(200, { ok: true });

	const secret = process.env.TURNSTILE_SECRET_KEY;
	const resendKey = process.env.RESEND_API_KEY;
	if (!secret || !resendKey) {
		return json(500, { error: 'The support form is temporarily unavailable.' });
	}

	const remoteip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
	const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret,
			response: data.token,
			...(remoteip ? { remoteip } : {}),
		}),
	});
	const verdict = (await verifyRes.json()) as { success?: boolean };
	if (!verdict.success) {
		return json(400, { error: 'Verification failed — please try again.' });
	}

	const { subject, text } = buildEmail(data, new Date().toISOString());
	const sendRes = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${resendKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from: FROM_ADDRESS,
			to: [TO_ADDRESS],
			reply_to: data.email,
			subject,
			text,
		}),
	});
	if (!sendRes.ok) {
		console.error('Resend send failed', sendRes.status, await sendRes.text());
		return json(502, {
			error: "Couldn't send your message — please try again in a minute.",
		});
	}

	return json(200, { ok: true });
}
