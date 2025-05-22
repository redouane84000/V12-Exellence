/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'porsche': {
          black: '#000000',
          white: '#FFFFFF',
          gray: {
            light: '#F5F5F5',
            DEFAULT: '#666666',
            dark: '#333333'
          }
        }
      },
      maxWidth: {
        'mobile': '380px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 