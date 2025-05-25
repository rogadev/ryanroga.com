import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter({
			// Configure ISR for better caching
			isr: {
				// Enable ISR globally with a 1 hour cache
				expiration: 3600, // 1 hour in seconds
				// Optional: Add bypass token for on-demand revalidation
				bypassToken: process.env.VERCEL_REVALIDATE_TOKEN
			}
		}),
		alias: {
			'@/*': './path/to/lib/*'
		}
	}
};

export default config;
