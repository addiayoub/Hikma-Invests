import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["jwt-decode"],
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
