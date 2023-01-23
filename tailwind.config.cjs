/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paleblue: "hsl(223, 87%, 63%)",
        hoverpaleblue: "hsla(223, 87%, 63%, 0.75)",
        lightred: "hsl(354, 100%, 66%)",
        customgray: "hsl(0, 0%, 59%)",
        verydarkblue: "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        librefranklin: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
