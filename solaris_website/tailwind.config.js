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
        hoverSecondary: "#FF9933",
        orangeWin: "#F57A00",
      },
      backgroundImage:{
        'footer-formTree':"url('./src/assets/formTreeV2.jpg')",
        bento: 'linear-gradient(180deg, rgba(245, 122, 0, 0.09) 0%, rgba(245, 122, 0, 0.3) 100%)',
        mobileBento: 'linear-gradient(180deg, rgba(245, 122, 0, 0.08) 8%, rgba(249, 171, 93, 0.096) 9.6%, rgba(255, 255, 255, 0.8) 80%)',
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
      shouldDisplayWhiteNavBar: "806px",
      md: "820px",
      lg: "1270px",
      xl: "1700px",
    },
  },
  plugins: [],
};