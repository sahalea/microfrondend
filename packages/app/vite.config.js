import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
import react from "@vitejs/plugin-react";
import path from "path";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  resolve: {
    alias: {
      shared: path.resolve(__dirname, "../shared"),
    },
  },
  plugins: [
    react(),
    federation({
      name: "app",
      filename: "app.js",
      exposes: {
        "./Login": "./src/pages/login",
      },
      remotes: {
        articles: "http://localhost:5000/assets/articles.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
