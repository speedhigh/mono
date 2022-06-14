const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      primary: '#4799FF'
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}