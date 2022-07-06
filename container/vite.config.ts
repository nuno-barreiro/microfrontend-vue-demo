import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: "node_modules/.cacheDir",
  build: {
    target: "esnext",
    minify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: "es",
        minifyInternalExports: false,
      },
    },
  },
  plugins: [
    vue(),
    federation({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        "user-profile": {
          external: `Promise.resolve('http://localhost:5001/assets/remoteEntry.js')`,
          externalType: "promise",
        },
        "login-form": {
          external: `Promise.resolve('http://localhost:5002/assets/remoteEntry.js')`,
          externalType: "promise",
        },
      },
      shared: ["vue"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
