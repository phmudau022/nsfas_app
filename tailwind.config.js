/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,tsx}",
    "./screens/**/*.{js,jsx,tsx}",
    "./pages/**/*.{js,jsx,tsx}",
    "./components/**/*.{js,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#292929",

        primary: "#e9a41c",
        primaryShade: "#cd9118",
        primaryTint: "#ebae32",

        secondary: "#d36f27",
        secondaryShade: "#b96122",
        secondaryTint: "#d77d3c",

        green: "#349523",
        greenShade: "#285c1f",
        greenTint: "#02d95f",

        danger: "#d72828",
        dangerShade: "#91131b",
        dangerTint: "#ee7e7e",

        gray: "#a3a3a3",
        grayShade: "#3d3d3d",
        grayTint: "#ededed",

        
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

