import { SUPPORT_PRODUCTS } from '../../src/consts';

export interface SupportSubmission {
	name: string;
	email: string;
	product: string;
	message: string;
	/** Honeypot field — must be empty for real users. */
	website: string;
	/** Turnstile response token. */
	token: string;
}

export type ValidationResult = { ok: true; data: SupportSubmission } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PRODUCT_SLUGS = new Set<string>(SUPPORT_PRODUCTS.map((p) => p.slug));

function asTrimmedString(value: unknown): string | null {
	return typeof value === 'string' ? value.trim() : null;
}

export function validateSubmission(body: unknown): ValidationResult {
	if (typeof body !== 'object' || body === null) {
		return { ok: false, error: 'Invalid request body.' };
	}
	const record = body as Record<string, unknown>;

	const name = asTrimmedString(record.name);
	if (!name || name.length > 200) return { ok: false, error: 'Please provide your name.' };

	const email = asTrimmedString(record.email);
	if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
		return { ok: false, error: 'Please provide a valid email address.' };
	}

	const product = asTrimmedString(record.product);
	if (!product || !PRODUCT_SLUGS.has(product)) {
		return { ok: false, error: 'Please choose a product.' };
	}

	const message = asTrimmedString(record.message);
	if (!message || message.length > 5000) {
		return { ok: false, error: 'Please include a message (up to 5000 characters).' };
	}

	const token = asTrimmedString(record.token);
	if (!token) return { ok: false, error: 'Verification incomplete — please try again.' };

	const website = typeof record.website === 'string' ? record.website : '';

	return { ok: true, data: { name, email, product, message, website, token } };
}

export function buildEmail(
	data: SupportSubmission,
	submittedAt: string,
): { subject: string; text: string } {
	const label = SUPPORT_PRODUCTS.find((p) => p.slug === data.product)?.label ?? data.product;
	return {
		subject: `[Support] ${label}: ${data.name}`,
		text: [
			`New support request via roga.dev/support`,
			``,
			`Name: ${data.name}`,
			`Email: ${data.email}`,
			`Product: ${label} (${data.product})`,
			`Submitted: ${submittedAt}`,
			``,
			`Message:`,
			data.message,
		].join('\n'),
	};
}
