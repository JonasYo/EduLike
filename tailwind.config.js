/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F9EAF2',
          100: '#F1C6DF',
          200: '#E193C1',
          300: '#D15F9E',
          400: '#BB4A8D',
          500: '#9B308A',
          600: '#852572',
          700: '#6B1D5B',
          800: '#511644',
          900: '#390F2E',
        },
        secondary: {
          50: '#fffbf2',
          100: '#fff3d9',
          200: '#ffebaf',
          300: '#ffe285',
          400: '#ffda5c',
          500: '#f2bb13',
          600: '#e5a40c',
          700: '#cc8e0a',
          800: '#b37a09',
          900: '#8a5f06',
        },
      },
      fontFamily: {
        body: [
          'Inter',
          'Barlow',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
        sans: [
          'Inter',
          'Barlow',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(270deg, rgba(155,48,138,1) 25%, rgba(229,115,207,1) 100%)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
