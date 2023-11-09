/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgb(243,244,246)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
