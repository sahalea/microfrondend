import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
import path from "path";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      shared: path.resolve(__dirname, "../shared"),
    },
  },
  plugins: [
    react(),
    federation({
      name: "articles",
      filename: "articles.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Input": "./src/components/Input",
      },
      remotes: {
        app: "http://localhost:5001/assets/app.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
