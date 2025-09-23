import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    outDir: '../fern/dist',
    rollupOptions: {
      output: {
        entryFileNames: `output.js`,
        assetFileNames: `output.[ext]`,
        inlineDynamicImports: true,
      },
    },
  },
})
