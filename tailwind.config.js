/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D69B4",
        primaryDarkest : "rgb(30, 70, 120)",
        primaryLightest: "#E6F0FE",
        grayDarkest :"#1D2939",
        grayLighter : "#D0D5DD",
        grayLightest :"#FCFCFD",
        secondary : "#E19200",
        light : "#E6F0FE",
        white: "#FCFCFD",
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
