import comicPreset from "comixa-ui/preset";

/** @type {import('tailwindcss').Config} */
export default {
  // Theme only via data-theme — never OS prefers-color-scheme
  darkMode: ["selector", '[data-theme="dark"]'],
  presets: [comicPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/comixa-ui/dist/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Bangers", "cursive"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-12px) rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};
