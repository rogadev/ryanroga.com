import type { APIRoute, GetStaticPaths } from 'astro';
import { type OgPageConfig, OG_PAGES } from '../../lib/og-pages';
import { generateOgImage } from '../../lib/og';

export const getStaticPaths: GetStaticPaths = () =>
	Object.entries(OG_PAGES).map(([page, config]) => ({
		params: { page },
		props: { config },
	}));

interface Props {
	config: OgPageConfig;
}

export const GET: APIRoute<Props> = async ({ props }) => {
	const png = await generateOgImage(props.config);
	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
		},
	});
};
