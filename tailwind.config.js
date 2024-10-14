/** @type {import('tailwindcss').Config} */

const textShadow = require('tailwindcss-textshadow');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      textShadow: {
        "text-border":
          "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff", // Adjust the color
      },
    },
  },
  plugins: [textShadow],
};
