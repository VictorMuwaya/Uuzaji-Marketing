import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  // Priority: 1. Cloudflare Environment Variable (process.env), 2. Local .env file (env)
  const apiKey = process.env.API_KEY || env.API_KEY;

  return {
    plugins: [react()],
    // Set base to root for proper Cloudflare Pages routing
    base: '/',
    define: {
      // Manually map the server-side API_KEY to the modern Vite client-side variable
      'import.meta.env.VITE_API_KEY': JSON.stringify(apiKey)
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    }
  }
})
