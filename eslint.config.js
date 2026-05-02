import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import astroParser from 'astro-eslint-parser';

export default [
	{
		ignores: [
			'dist/',
			'.astro/',
			'.vercel/',
			'.output/',
			'node_modules/',
			'_references/',
			'.beads/',
			'.fallow/',
			'.claude/',
			'.cursor/',
			'tmp/',
		],
	},
	...tseslint.configs.recommended,
	...astro.configs.recommended,
	...svelte.configs.recommended,
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.svelte'],
			},
		},
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.astro'],
			},
		},
	},
];
