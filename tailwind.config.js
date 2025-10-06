/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFB3BA',
        'pastel-blue': '#BAE1FF',
        'pastel-green': '#BAFFC9',
        'pastel-yellow': '#FFFFBA',
        'pastel-purple': '#D4BFFF',
        'pastel-orange': '#FFDFBA',
      }
    },
  },
  plugins: [],
}
