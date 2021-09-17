const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "eastern-blue": {
          50: "#f5fafb",
          100: "#eaf4f7",
          200: "#cbe4ea",
          300: "#abd3dd",
          400: "#6db2c4",
          500: "#2e91aa",
          600: "#298399",
          700: "#236d80",
          800: "#1c5766",
          900: "#174753",
        },
        orange: colors.orange,
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
