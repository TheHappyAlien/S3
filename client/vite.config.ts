import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 81,
    strictPort: true,
    host:'0.0.0.0',
    cors: true,
    proxy: {
      '/api': {
        target: 'http://server:8080/api',
        changeOrigin: true,
        secure: false
      }
    }
  }
})