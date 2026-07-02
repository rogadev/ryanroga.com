export function isTurnstileConfigured(): boolean {
	return Boolean(process.env.TURNSTILE_SECRET_KEY);
}

export async function verifyTurnstile(token: string, remoteip?: string): Promise<boolean> {
	const secret = process.env.TURNSTILE_SECRET_KEY;
	if (!secret) return false;
	const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ secret, response: token, ...(remoteip ? { remoteip } : {}) }),
	});
	const verdict = (await res.json()) as { success?: boolean };
	return verdict.success === true;
}
