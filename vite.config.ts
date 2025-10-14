import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer"; // Ajout visualizer

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    visualizer({ // Ajouté : plugin rollup visualizer
      filename: "stats.html", // Nom du rapport généré à la racine
      open: true,             // Ouvre automatiquement le rapport à la fin du build
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));


