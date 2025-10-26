/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-green': '#2d5016',
        'warm-yellow': '#f4e4c1',
        'wood-brown': '#8b6f47',
        'soft-cream': '#faf8f3',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
        'display': ['Caveat', 'Playfair Display', 'cursive'],
      },
    },
  },
  plugins: [],
}
