import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  // Check all common naming patterns for the key
  // Priority: Cloudflare/System (process.env) -> Local .env (env)
  const apiKey = process.env.API_KEY || process.env.VITE_API_KEY || env.API_KEY || env.VITE_API_KEY || '';

  return {
    plugins: [react()],
    // Set base to root for proper Cloudflare Pages routing
    base: '/',
    define: {
      // Manually map the key to the client-side variable
      // usage: import.meta.env.VITE_API_KEY
      'import.meta.env.VITE_API_KEY': JSON.stringify(apiKey)
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    }
  }
})
