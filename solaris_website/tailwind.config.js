
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2A3E77",
        secondary: "#F57A00",
        bgGray: "#F7F7F6",
        hoverPrimary: "#405FB5",
        hoverSecondary: "#FF9933"
      },
      backgroundImage:{
        'footer-formTree':"url('./src/assets/formTreeV2.jpg')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xxs:"355px",
      xs:"458px",
      sm: "768px",
      test: "806px",
      md: "820px",
      lg: "1270px",
      xl: "1700px",
    },
  },
  plugins: [],
};