import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // DO NOT REMOVE THIS LINE: Used to help debug preview builds
    sourcemap: !!process.env.ENABLE_VITE_SOURCEMAP,
  },
});
