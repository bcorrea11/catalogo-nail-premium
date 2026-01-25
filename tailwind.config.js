/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: '#f3e9e3',
        brown: '#5d4037',
        champagne: '#C5A083',
        'gold-metallic': '#C5A083',
      },
    },
  },
  plugins: [],
}
