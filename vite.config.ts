import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const packageSource = path.resolve(root, "../src/index.ts");
const presetSource = path.resolve(root, "../src/preset.ts");
const sourceAliases =
  fs.existsSync(packageSource) && fs.existsSync(presetSource)
    ? {
        "comixa-ui/preset": presetSource,
        "comixa-ui": packageSource,
      }
    : {};

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: sourceAliases,
  },
  server: {
    port: 5173,
    open: true,
  },
});