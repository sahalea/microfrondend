// vite.config.js
import { defineConfig } from "file:///Users/sahelali/Documents/workspace/react-vite-federation/node_modules/.pnpm/vite@5.3.5/node_modules/vite/dist/node/index.js";
import react from "file:///Users/sahelali/Documents/workspace/react-vite-federation/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///Users/sahelali/Documents/workspace/react-vite-federation/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import dns from "dns";
import path from "path";
var __vite_injected_original_dirname = "/Users/sahelali/Documents/workspace/react-vite-federation/packages/articles";
dns.setDefaultResultOrder("verbatim");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      shared: path.resolve(__vite_injected_original_dirname, "../shared")
    }
  },
  plugins: [
    react(),
    federation({
      name: "articles",
      filename: "articles.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./Input": "./src/components/Input"
      },
      shared: ["react"]
    })
  ],
  preview: {
    host: "localhost",
    port: 5e3,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2FoZWxhbGkvRG9jdW1lbnRzL3dvcmtzcGFjZS9yZWFjdC12aXRlLWZlZGVyYXRpb24vcGFja2FnZXMvYXJ0aWNsZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zYWhlbGFsaS9Eb2N1bWVudHMvd29ya3NwYWNlL3JlYWN0LXZpdGUtZmVkZXJhdGlvbi9wYWNrYWdlcy9hcnRpY2xlcy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2FoZWxhbGkvRG9jdW1lbnRzL3dvcmtzcGFjZS9yZWFjdC12aXRlLWZlZGVyYXRpb24vcGFja2FnZXMvYXJ0aWNsZXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5pbXBvcnQgZG5zIGZyb20gXCJkbnNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmRucy5zZXREZWZhdWx0UmVzdWx0T3JkZXIoXCJ2ZXJiYXRpbVwiKTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgc2hhcmVkOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3NoYXJlZFwiKSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6IFwiYXJ0aWNsZXNcIixcbiAgICAgIGZpbGVuYW1lOiBcImFydGljbGVzLmpzXCIsXG4gICAgICBleHBvc2VzOiB7XG4gICAgICAgIFwiLi9CdXR0b25cIjogXCIuL3NyYy9jb21wb25lbnRzL0J1dHRvblwiLFxuICAgICAgICBcIi4vSW5wdXRcIjogXCIuL3NyYy9jb21wb25lbnRzL0lucHV0XCIsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiBbXCJyZWFjdFwiXSxcbiAgICB9KSxcbiAgXSxcbiAgcHJldmlldzoge1xuICAgIGhvc3Q6IFwibG9jYWxob3N0XCIsXG4gICAgcG9ydDogNTAwMCxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWixTQUFTLG9CQUFvQjtBQUNoYixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFJLHNCQUFzQixVQUFVO0FBR3BDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLFlBQVk7QUFBQSxRQUNaLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxRQUFRLENBQUMsT0FBTztBQUFBLElBQ2xCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUCwrQkFBK0I7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
