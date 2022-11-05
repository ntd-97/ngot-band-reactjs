/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#fff",
        contrast: "#F3632F",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
