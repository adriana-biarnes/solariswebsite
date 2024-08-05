/* eslint-disable no-undef */
const plugin = require("tailwindcss/plugin");

const MyPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".rotate-y-180": { transform: "rotateY(180deg)" },
    ".preserve-3d": { transformStyle: "preserve-3d" },
    ".perspective": { perspective: "1000px" },
    ".backface-hidden": { backfaceVisibility: "hidden" },
    ".backface-visible": { backfaceVisibility: "visible" },
  });
});


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
        bento: 'linear-gradient(90deg, rgba(245, 122, 0, 0.09) 0%, rgba(245, 122, 0, 0.3) 100%)',
        mobileBento: 'linear-gradient(108deg, rgba(245, 122, 0, 0.08) 7.84%, rgba(249, 171, 93, 0.10) 53.77%, rgba(255, 255, 255, 0.80) 97.89%)',
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xxs:"355px",
      xs:"458px",
      sm: "768px",
      shouldDisplayWhiteNavBar: "806px",
      md: "1040px",
      lg: "1270px",
      xl: "1700px",
    },
  },
  plugins: [MyPlugin],
};