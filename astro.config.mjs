import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site — no server, no database, no secrets.
// Deploy the `dist/` folder to Vercel, Netlify, or any static host.
// The site URL lives in exactly ONE place: here.
export default defineConfig({
  site: 'https://learnnest.vercel.app',
  integrations: [sitemap()],
});
