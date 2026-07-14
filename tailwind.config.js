import comicPreset from "comixa-ui/preset";

/** @type {import('tailwindcss').Config} */
export default {
  // Theme only via data-theme — never OS prefers-color-scheme
  darkMode: ["selector", '[data-theme="dark"]'],
  presets: [comicPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/comixa-ui/dist/**/*.{js,cjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
