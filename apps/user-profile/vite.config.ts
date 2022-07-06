import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
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
      name: "user-profile",
      filename: "remoteEntry.js",
      exposes: {
        "./UserProfile": "./src/components/UserProfile.vue",
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
