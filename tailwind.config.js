module.exports = {
  content: [
    "./pages/**/*.{html,js,tsx}",
    "./pages/*.{html,js,tsx}",
    "./components/**/*.{html,js,tsx}",
    "./components/**/**/*.{html,js,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      textColor: ["dark"],
    },
  },
};
