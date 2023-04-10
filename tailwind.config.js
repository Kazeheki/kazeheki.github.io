/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E4C6F7',
          200: '#C690EF',
          300: '#9554D1',
          400: '#6429A3',
          500: '#2D0166',
          600: '#220057',
          700: '#190049',
          800: '#12003B',
          900: '#0C0030'
        },
        beryl_green: '#e2e3b9'
      }
    }
  },
  plugins: []
};
