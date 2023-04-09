/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg:'1280px',
        xl:'1280px',
        '2xl':'1280px',
      }
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'gemunu': ['Gemunu Libre', 'sans-serif'],
      },
      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      }
    },
  },
  plugins: [],
}

