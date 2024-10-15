/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "backgroundColor": "#FFFFFF",
      "headingColor":"#0B1F27",
      "blueText":"#62CFF8",
      "inputColor":"#C2EEFF",
      "blackText":"#404648"
      },
      fontFamily:{
        Nunito:["Nunito"]
      }
    },
  },
  plugins: [],
}

