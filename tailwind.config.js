/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#0A1931',
        'secondary': '#E8CBC0',
        'bg': '#EFFFFD',
        'creamwhite': '#F9F5EB'
      }
    },
  },
  plugins: [],
}