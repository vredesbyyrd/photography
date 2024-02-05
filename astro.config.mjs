import { defineConfig } from 'astro/config';

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  site: 'https://vredesbyyrd.github.io',
  integrations: [relativeLinks()]
});