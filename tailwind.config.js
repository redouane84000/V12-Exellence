/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'porsche-black': '#1A1A1A',
        'porsche-white': '#FFFFFF',
        'porsche-gray': '#666666',
        'porsche-gray-light': '#E5E5E5',
        'porsche-gray-dark': '#333333',
        'porsche-red': '#D40000'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'mobile': '640px',
      },
    },
  },
  plugins: [],
} 