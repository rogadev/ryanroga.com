import type { APIRoute } from 'astro';
import { SITE_TAGLINE } from '../../consts';
import { generateOgImage } from '../../lib/og';

export const GET: APIRoute = async () => {
	const png = await generateOgImage({
		title: SITE_TAGLINE,
		footnote: 'Software studio · BC, Canada',
	});

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
