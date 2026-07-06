import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Sections not yet public are excluded from the sitemap until launched.
const HELD = ['/talks'];

export default defineConfig({
  site: 'https://www.blueleaflabs.org',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !HELD.some((p) => new URL(page).pathname.startsWith(p)),
    }),
  ],
});
