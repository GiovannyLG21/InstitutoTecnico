// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  env: {
    schema: {
      WEB_URL: envField.string({ access: 'public', context: 'client' })
    }
  },

  adapter: vercel()
});