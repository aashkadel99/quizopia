/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,jsx,tsx,svg}"
  ],
  theme: {
    extend: {
      fontFamily: ['Syne', 'sans-serif']
    },
    colors: {
      'black': '#1A1A1A',
      'white': "#ffffff",
      'red': '#CD3C3D',
      'darkRed': '#A52425',
      'green': '#1D8F66',
      'blue': '#C9DEFA',
    }
  },
  plugins: [],
}

