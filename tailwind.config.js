/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#3E497A',
        'secondary': '#ACB6E5',
        'bg': '#EAE3D2',
        'creamwhite': '#F9F5EB'
      }
    },
  },
  plugins: [],
}