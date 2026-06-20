// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` and `base` when deploying to GitHub Pages.
// Example: username.github.io/omar-portfolio → base: '/omar-portfolio'
export default defineConfig({
  site: 'https://omarapdelgwad44.github.io',
  base: '/omar-portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
