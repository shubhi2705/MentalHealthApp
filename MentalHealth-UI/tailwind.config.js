/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': {
          300: '#A2DFF7',
          500: '#3BA0E2',
        },
      },
    },
  },
  plugins: [],
}
