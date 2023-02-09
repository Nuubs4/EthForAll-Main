/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        typo: "#fffeff",
        background: "#10061e",
        gold: "#ffc979",
        heroGradient: {
          100: "#d641cd",
          200: "#f582a2",
          300: "#2449e3",
          400: "#24a0e5",
        },
      },
    },
  },
  plugins: [],
}
