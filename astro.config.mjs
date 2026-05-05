// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.gabrielastoloffbaez.com',
  integrations: [sitemap()],
});
