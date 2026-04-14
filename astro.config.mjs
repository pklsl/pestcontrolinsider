import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pestcontrolinsider.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/blog': '/articles',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
