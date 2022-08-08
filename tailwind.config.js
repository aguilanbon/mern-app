/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#1C3879',
        'secondary': '#495C83',
        'bg': '#EAE3D2',
        'creamwhite': '#F9F5EB'
      }
    },
  },
  plugins: [],
}