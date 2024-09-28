/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        bgBlack: "#000",
        primary: "#07beb8",
        disabledPrimary: "#68d8d6",
        hoverPrimary: "#3dccc7",
        secondaryBgWhite: "#e5e5e5",
        secondaryBg: "#262626",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
