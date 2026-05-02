import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const insights = defineCollection({
	loader: glob({ base: './src/content/insights', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
			readingTime: z.string().optional(),
			draft: z.boolean().default(false),
		}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			client: z.string(),
			industry: z.string(),
			headline: z.string(),
			outcome: z.string(),
			tags: z.array(z.string()),
			period: z.string(),
			role: z.string(),
			status: z.enum(['live', 'in-development', 'archived', 'draft']),
			featured: z.boolean().default(false),
			order: z.number().default(99),
			heroImage: z.optional(image()),
			liveUrl: z.string().url().optional(),
			repoUrl: z.string().url().optional(),
		}),
});

export const collections = { insights, work };
