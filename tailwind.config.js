/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
colors.slate[500];
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.rose[500],
        secondary: colors.zinc[500],
        dark: colors.zinc[900],
        secondDark: colors.zinc[800],
        baseColor: colors.white,
        secondBaseColor: colors.zinc[100],
        thirdBaseColor: colors.zinc[300],
        forthBaseColor: colors.zinc[200],
      },
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
