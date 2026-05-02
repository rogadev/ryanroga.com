import type { APIRoute, GetStaticPaths } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';
import { generateOgImage } from '../../../lib/og';

export const getStaticPaths: GetStaticPaths = async () => {
	const entries = await getCollection('insights', ({ data }) => !data.draft);
	return entries.map((entry) => ({
		params: { slug: entry.id },
		props: { entry },
	}));
};

interface Props {
	entry: CollectionEntry<'insights'>;
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
});

export const GET: APIRoute<Props> = async ({ props }) => {
	const { data } = props.entry;
	const tagPart = data.tags.length > 0 ? data.tags.slice(0, 3).map((t) => `#${t}`).join(' · ') : '';
	const datePart = dateFormatter.format(data.pubDate);
	const footnote = tagPart ? `${datePart} · ${tagPart}` : datePart;

	const png = await generateOgImage({
		eyebrow: 'Insights',
		title: data.title,
		footnote,
	});

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
