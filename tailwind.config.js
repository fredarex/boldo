/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background.png')",
      },
      fontFamily: {
        'Manrope': ['"Manrope"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif']
    }
    },
  },
  plugins: [],
}