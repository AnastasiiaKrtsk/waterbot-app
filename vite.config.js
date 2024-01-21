import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@mui/x-date-pickers"],
  },
  plugins: [react()],
});
