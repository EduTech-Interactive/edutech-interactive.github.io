import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Globals from './src/globals'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: Globals.BASE_PATH
})
