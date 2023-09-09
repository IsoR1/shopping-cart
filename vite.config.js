import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./tests/setup.js"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  };
});
