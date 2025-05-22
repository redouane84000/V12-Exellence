import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HomeIcon } from '@heroicons/react/24/outline'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
