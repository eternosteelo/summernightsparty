/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        squada: ['"Squada One"'],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
