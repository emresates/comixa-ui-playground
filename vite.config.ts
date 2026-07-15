import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "comixa-ui/preset": path.resolve(root, "../src/preset.ts"),
      "comixa-ui": path.resolve(root, "../src/index.ts"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
