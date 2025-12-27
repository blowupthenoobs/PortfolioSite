import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./src/config/");

  const proxyURL = env.VITE_PROXY_URL || "http://localhost:3000";

  console.log(`\nBackend Development Proxy URL: ${proxyURL}/api\n`);

  return {
    plugins: [
      react(),
      visualizer(),
    ],
    build: {
      outDir: "dist-frontend",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    envDir: "./src/config/",
    server: {
      proxy:
         {
            "/api": {
              target: proxyURL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
            }
          },
      host: "0.0.0.0", // makes it accessible from anywhere
      allowedHosts: ["drivingthetestdrive.blowupthenoobs.dev"],
    },
  };
});
