/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: ['Syne', 'sans-serif']
    },
    colors: {
      'black': '#1A1A1A',
      'white': "#ffffff",
      'red': '#CD3C3D',
      'darkRed': '#A52425'
    }
  },
  plugins: [],
}

