// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dletelier.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // avif first, webp fallback, png last
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
