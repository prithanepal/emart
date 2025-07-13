/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        10: "repeat(10, minmax(0, 1fr))", // Creates 10 rows
        20: "repeat(20, minmax(0, 1fr))", // Creates 20 rows
      },
    },
  },
  plugins: [],
};
