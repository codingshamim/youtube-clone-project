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
    },
  },
  plugins: [require("preline/plugin")],
};
