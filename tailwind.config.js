module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./helpers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        press: '"Press Start 2P"',
      },
      backgroundImage: {
        metaverse: "url('../public/cyberpunk.gif')",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50%) translateX(-50%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(-60%) translateX(-50%)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
