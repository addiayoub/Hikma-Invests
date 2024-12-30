import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  server: {
    host: '0.0.0.0', // Permet l'accès sur le réseau local
    port: 5172,      // Personnalisez si nécessaire
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
