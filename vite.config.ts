import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Kritika_portfolio/', // 👈 EXACT repo name (case-sensitive)
})
