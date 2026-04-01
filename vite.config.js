import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Claude-code/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
