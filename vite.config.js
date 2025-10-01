import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // NOTE: no .scss extension; Sass will resolve _variables.scss
        additionalData: '@use "@/styles/variables" as *;\n'
      }
    }
  }
});
