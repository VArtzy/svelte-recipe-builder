import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
      extend: {
          fontFamily: {
            sans: ['Parkinsans', 'Roboto']
          },
          colors: {
              'white': '#fffeee',
              'black': '#1a1a1a'
          }
      }
  },

  plugins: [typography]
} satisfies Config;
