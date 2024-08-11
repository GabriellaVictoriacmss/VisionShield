/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        montserrat2: ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        'main-purple': '#8f00ff',
        'black': '#0b0b0b',
        'white-50': 'rgba(255, 255, 255, 0.55)',
        'secondary-purple': '#D3A7FF',
        'custom-dark': '#101010',
        'custom-light': '#3D3D3D',
        'equip-bg': '#9456FB',
        'hover-text-color': '#A32FFF'
      },
    },
  },
  plugins: [],
}
