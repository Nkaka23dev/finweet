/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#1D2130',
        customGreen:'#4397A4',
        ColorPink: 'rgba(215, 152, 225, 0.15)',
        lightColor: '#F4F7FF',
        greenLight:'#C6DBFF',
        secondary:'#1D2130',
        hero: '#E1EBFA',
        btFormColor:'#E1EBFA'
      }
    },
  },
  plugins: [],
}
