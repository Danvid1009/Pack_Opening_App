import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pack_Opening_App/',
  build: {
    outDir: 'dist'
  }
})
