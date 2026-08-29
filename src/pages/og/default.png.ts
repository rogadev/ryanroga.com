import type { APIRoute } from 'astro';
import { DEFAULT_OG } from '../../lib/og-pages';
import { generateOgImage } from '../../lib/og';

export const GET: APIRoute = async () => {
	const png = await generateOgImage(DEFAULT_OG);

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
		},
	});
};
