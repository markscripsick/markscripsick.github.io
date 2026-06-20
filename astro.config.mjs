// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Your live site URL. Because the repo is named
  // "markscripsick.github.io" (a GitHub "user site"), the site is served
  // from the root, so no `base` path is needed.
  //
  // If you later buy a custom domain, change `site` to that domain
  // (e.g. 'https://markscripsick.com') and add a public/CNAME file.
  // See README.md → "Using a custom domain later".
  site: 'https://markscripsick.github.io',
  integrations: [sitemap()],
});
