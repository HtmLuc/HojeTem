/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#F5E6CC',
      'secondary': '#D16B48',
    },
    fontFamily: {
        'palette-mosaic': ['Palette Mosaic'],
        'antic-didone': ['Antic Didone'],
        'alegreya Sans': ['Alegreya Sans'],
        'poppins': ['Poppins'],
    },
    extend: {},
  },
  plugins: [],
}

