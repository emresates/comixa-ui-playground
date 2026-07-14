import comicPreset from "../src/preset.ts";

/** @type {import('tailwindcss').Config} */
export default {
  // Theme only via data-theme — never OS prefers-color-scheme
  darkMode: ["selector", '[data-theme="dark"]'],
  presets: [comicPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
