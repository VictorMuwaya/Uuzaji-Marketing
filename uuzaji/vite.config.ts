import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Fix: Cast process to any to resolve TS error about missing cwd() in Process type
  const env = loadEnv(mode, (process as any).cwd(), '');

  // Check all common naming patterns for the key
  // Priority: Cloudflare/System (process.env) -> Local .env (env)
  const apiKey = process.env.API_KEY || process.env.VITE_API_KEY || env.API_KEY || env.VITE_API_KEY || '';

  // EmailJS Keys
  const emailJsServiceId = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID || env.EMAILJS_SERVICE_ID || env.VITE_EMAILJS_SERVICE_ID || '';
  const emailJsTemplateId = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID || env.EMAILJS_TEMPLATE_ID || env.VITE_EMAILJS_TEMPLATE_ID || '';
  const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY || env.EMAILJS_PUBLIC_KEY || env.VITE_EMAILJS_PUBLIC_KEY || '';

  return {
    plugins: [react()],
    // Set base to root for proper Cloudflare Pages routing
    base: '/',
    define: {
      // Manually map the keys to the client-side variables
      // usage: import.meta.env.VITE_API_KEY
      'import.meta.env.VITE_API_KEY': JSON.stringify(apiKey),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(emailJsServiceId),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(emailJsTemplateId),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(emailJsPublicKey),
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    }
  }
})
