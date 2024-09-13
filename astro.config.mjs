// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
    nesting: true,
  })],
  site: 'https://dbhub.github.io',
  base: '/DBHub_library/'
});