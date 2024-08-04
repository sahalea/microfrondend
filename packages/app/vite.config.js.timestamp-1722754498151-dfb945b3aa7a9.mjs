// vite.config.js
import { defineConfig } from "file:///Users/sahelali/Documents/workspace/react-vite-federation/node_modules/.pnpm/vite@5.3.5/node_modules/vite/dist/node/index.js";
import federation from "file:///Users/sahelali/Documents/workspace/react-vite-federation/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
import dns from "dns";
import react from "file:///Users/sahelali/Documents/workspace/react-vite-federation/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/sahelali/Documents/workspace/react-vite-federation/packages/app";
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
      name: "app",
      remotes: {
        articles: "http://localhost:5000/assets/articles.js"
      },
      shared: ["react"]
    })
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2FoZWxhbGkvRG9jdW1lbnRzL3dvcmtzcGFjZS9yZWFjdC12aXRlLWZlZGVyYXRpb24vcGFja2FnZXMvYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2FoZWxhbGkvRG9jdW1lbnRzL3dvcmtzcGFjZS9yZWFjdC12aXRlLWZlZGVyYXRpb24vcGFja2FnZXMvYXBwL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zYWhlbGFsaS9Eb2N1bWVudHMvd29ya3NwYWNlL3JlYWN0LXZpdGUtZmVkZXJhdGlvbi9wYWNrYWdlcy9hcHAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5pbXBvcnQgZG5zIGZyb20gXCJkbnNcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmRucy5zZXREZWZhdWx0UmVzdWx0T3JkZXIoXCJ2ZXJiYXRpbVwiKTtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgc2hhcmVkOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4uL3NoYXJlZFwiKSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6IFwiYXBwXCIsXG4gICAgICByZW1vdGVzOiB7XG4gICAgICAgIGFydGljbGVzOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hc3NldHMvYXJ0aWNsZXMuanNcIixcbiAgICAgIH0sXG4gICAgICBzaGFyZWQ6IFtcInJlYWN0XCJdLFxuICAgIH0pLFxuICBdLFxuICBwcmV2aWV3OiB7XG4gICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICBwb3J0OiA1MDAxLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvWSxTQUFTLG9CQUFvQjtBQUNqYSxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUpqQixJQUFNLG1DQUFtQztBQU16QyxJQUFJLHNCQUFzQixVQUFVO0FBR3BDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFFBQVEsS0FBSyxRQUFRLGtDQUFXLFdBQVc7QUFBQSxJQUM3QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRLENBQUMsT0FBTztBQUFBLElBQ2xCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
