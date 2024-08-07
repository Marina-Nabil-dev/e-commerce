/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textDark : "#17355A",
        primary: "#2D69B4",
        primaryLight : "#5082C0",
        primaryDarker : "#1E4678",
        primaryDarkest: "rgb(30, 70, 120)",
        primaryLightest: "#E6F0FE",
        grayDarkest: "#1D2939",
        grayLighter: "#D0D5DD",
        grayLightest: "#FCFCFD",
        secondary: "#E19200",
        light: "#E6F0FE",
        white: "#FFFFFF",
        gray: {
          500: "#667085",
          300: "#98A2B3",
        },
        border: {
          line: "#e6f0fe",
        },
      },
    },
  },
  plugins: [],
};
