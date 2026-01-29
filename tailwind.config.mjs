/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Bree Serif', 'Georgia', 'serif']
      },
      colors: {
        primary: {
          50: '#e7f3f4',
          100: '#cfe7e9',
          200: '#a2d2d5',
          300: '#75bcbf',
          400: '#317E87',
          500: '#2B7078',
          600: '#245b61',
          700: '#1d4750',
          800: '#15353a',
          900: '#0e2427',
          950: '#071518'
        },
        accent: {
          50: '#fff1f6',
          100: '#ffd9e7',
          200: '#ffb0d0',
          300: '#ff7fb4',
          400: '#E5006D',
          500: '#B80059',
          600: '#930047',
          700: '#760039',
          800: '#59002b',
          900: '#3d001e',
          950: '#240012'
        },
        link: {
          DEFAULT: '#2B7078',
          hover: '#317E87'
        },
        body: '#12000B',
        heading: '#281721'
      }
    }
  },
  plugins: []
}
