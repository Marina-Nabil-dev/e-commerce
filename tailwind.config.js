/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5082C0",
        primaryDarkest : "#17355A",
        grayDarkest :"#1D2939",
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
