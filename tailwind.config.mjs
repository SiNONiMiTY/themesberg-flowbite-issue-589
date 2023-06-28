import FlowbitePlugin from 'flowbite/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [FlowbitePlugin],
  darkMode: 'class',
};

export default config;
