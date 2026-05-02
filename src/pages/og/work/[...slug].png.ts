import type { APIRoute, GetStaticPaths } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';
import { generateOgImage } from '../../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
	const entries = await getCollection('work');
	return entries.map((entry) => ({
		params: { slug: entry.id },
		props: { entry },
	}));
};

interface Props {
	entry: CollectionEntry<'work'>;
}

export const GET: APIRoute<Props> = async ({ props }) => {
	const { data } = props.entry;
	const png = await generateOgImage({
		eyebrow: `${data.id} · Case study`,
		title: data.headline,
		footnote: `${data.client} · ${data.industry}`,
	});

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
