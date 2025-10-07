/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FDFDFD',
        'seasalt': '#F8F7F8',
        'verdigris': {
          DEFAULT: '#3AAAA6',
          100: '#0c2221',
          200: '#174443',
          300: '#236764',
          400: '#2f8986',
          500: '#3aaaa6',
          600: '#58c6c2',
          700: '#82d4d1',
          800: '#abe2e1',
          900: '#d5f1f0'
        },
        'dim_gray': {
          DEFAULT: '#717272',
          100: '#171717',
          200: '#2e2e2e',
          300: '#454545',
          400: '#5c5c5c',
          500: '#717272',
          600: '#8f8f8f',
          700: '#ababab',
          800: '#c7c7c7',
          900: '#e3e3e3'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

