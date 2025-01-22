import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 0px 2px 8px 0px #00000026',
      },
      fontFamily: {
        Matter: ['matter', 'sans-serif'], // Replace "MyFont" with your font's name
      },
    },
  },
  plugins: [],
} satisfies Config;
