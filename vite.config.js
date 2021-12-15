import viteCompression from "vite-plugin-compression";
import analyze from "rollup-plugin-analyzer";

export default {
  publicDir: "slides",
  plugins: [viteCompression()],
  build: {
    rollupOptions: {
      plugins: [analyze()],
      output: {
        manualChunks: {
          revealjs: ["reveal.js"],
          highlight: ["reveal.js/plugin/highlight/highlight.esm.js"],
        },
      },
    },
  },
};
