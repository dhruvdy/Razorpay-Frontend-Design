/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        deepblue:"#02042a",
        dot:"hsla(229, 9.6%, 54.9%, 1)",
        inputfoot:"hsla(229, 9.6%, 54.9%, 1)",
        footlinkh:"hsla(227, 18%, 39.2%, 1)",
      },
      keyframes:{
        rundown:{
          "0%":{'object-position':'0% 0%'},
          "100%":{'object-position':'0% 100%'},
        }
      },
    },
  },
  plugins: [],
}
