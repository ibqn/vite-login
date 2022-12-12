/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blau: '#002D74',
      },
      spacing: {
        6.5: '1.5625rem', // 25px
      },
    },
  },
  plugins: [],
}
