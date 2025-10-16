import adapterVercel from '@sveltejs/adapter-vercel';
import adapterAuto from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Use adapter-auto on Windows for local builds (to avoid symlink issues),
// but adapter-vercel will be used in Vercel's CI/CD environment
const adapter = process.env.VERCEL ? adapterVercel : adapterAuto;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*'
		}
	}
};

export default config;
