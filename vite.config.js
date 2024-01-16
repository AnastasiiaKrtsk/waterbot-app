import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@mui/x-date-pickers': path.resolve(new URL('node_modules/@mui/x-date-pickers', import.meta.url).pathname),
    },
  },
  plugins: [react()],
});
