import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Expects this app to live at <comixa-ui>/playground (nested clone).
const comixaRoot = path.resolve(__dirname, "..");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "comixa-ui": path.join(comixaRoot, "src"),
      "comixa-ui/preset": path.join(comixaRoot, "src", "preset.ts"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
