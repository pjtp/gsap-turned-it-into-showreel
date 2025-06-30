import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Root directory
  root: "./",

  // Base public path
  base: "/",

  // Build options
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // Add multiple entry points if needed
      },
    },
  },

  // Dev server options
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
  },

  // Path aliases
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "node_modules"),
    },
  },

  // CSS options
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },

  // Define global constants
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
