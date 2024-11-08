import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    sourcemap: true, // Ensure source maps are generated
  },
  server: {
    sourcemap: true, // Optional: Useful for dev server
  },
})
