const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      primary: colors.blue,
      error: colors.rose,
      pink: colors.fuchsia,
      white: colors.white
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
