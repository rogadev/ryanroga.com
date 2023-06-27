import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import image from '@astrojs/image';
import { SITE_URL } from './src/consts';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  site: SITE_URL,
  integrations: [mdx(), sitemap(), tailwind(), partytown(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), svelte()]
});