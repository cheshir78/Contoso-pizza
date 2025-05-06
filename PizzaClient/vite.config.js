import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Client Port
    host: true,
    proxy: {
      '/pizzas': {
        target: 'http://localhost:5100' // Server port
      }
    }
  }
})
