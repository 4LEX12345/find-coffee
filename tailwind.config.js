/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#c9a373',
          DEFAULT: '#8b5e3c',
          dark: '#4b2e1e',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Pacifico', 'cursive'], // for taglines or logo text
      },
    },
  },
  plugins: [],
}

