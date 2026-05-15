import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://astro-page-eight.vercel.app',
  integrations: [tailwind()],
  output: 'static'
});