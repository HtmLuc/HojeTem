/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'palette-mosaic': ['Palette Mosaic'],
      'antic-didone': ['Antic Didone'],
      'alegreya-sans': ['Alegreya Sans'],
      'poppins': ['Poppins'],
      'modak': ['Modak'],
    },
    extend: {
      colors: {
        'primary': '#F5E6CC',
        'secondary': '#D16B48',
        'tertiary': '#343232',        
      },
    },
  },
  plugins: [],
}

