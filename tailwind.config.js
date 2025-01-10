/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/vue-tailwind-datepicker/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage : {
      "app" : "url('/img/undraw_barber_utly.svg')",
      }, 
      colors: {
        "vtd-primary" : colors.green
      },
  },
  },
  plugins: [],
}

