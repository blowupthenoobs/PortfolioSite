import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./src/config/");

  const proxyURL = env.VITE_PROXY_URL || "http://localhost:3000";

  console.log(`\nBackend Development Proxy URL: ${proxyURL}/api\n`);

  return {
    plugins: [
      react(),
      visualizer(),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          navigateFallbackDenylist: [
            /^\/file-service\/download\//,
            /^\/file-service\/public\/download\/[^\/]+\/[^\/]+/,
            /^\/folder-service\/download-zip/,
            /^\/file-service\/stream-video\/[^\/]+/,
            /^\/file-service\/download\/[^\/]+/,
          ],
          runtimeCaching: [
            {
              urlPattern: /\/file-service\/thumbnail\/[a-zA-Z0-9_-]+$/,
              handler: "CacheFirst",
              options: {
                cacheName: "dynamic-thumbnails",
                expiration: {
                  maxEntries: 1000,
                  maxAgeSeconds: 60 * 60 * 24 * 7,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    build: {
      outDir: "dist-frontend",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    envDir: "./src/config/",
    server: {
      proxy: proxyURL
        ? {
            "/api": {
              target: proxyURL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
            },
          }
        : undefined,
      host: "0.0.0.0", // makes it accessible from anywhere
      allowedHosts: ["drivingthetestdrive.blowupthenoobs.dev"], // ✅ allow your tunnel domain
    },
  };
});
