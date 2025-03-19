import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  assetsInclude: ['**/*.PNG', '**/*.png'], // Thêm các định dạng file PNG (bao gồm cả .PNG và .png)
})
