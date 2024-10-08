// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ingsystemcix.github.io/dbhub_library',
  base: '/DBHub_library/'
});
