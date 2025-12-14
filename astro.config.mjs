import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
    output: 'static',
    build: {
        assets: 'assets',
        inlineStylesheets: 'auto'
    },
    vite: {
        build: {
            cssMinify: true,
            minify: true
        }
    }
});
