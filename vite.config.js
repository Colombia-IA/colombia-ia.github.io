import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync, copyFileSync } from 'fs'

// Plugin para generar 404.html para GitHub Pages SPA
const spa404Plugin = () => ({
  name: 'spa-404',
  closeBundle() {
    const distPath = resolve(__dirname, 'dist')
    copyFileSync(
      resolve(distPath, 'index.html'),
      resolve(distPath, '404.html')
    )
    console.log('✅ 404.html generado para GitHub Pages')
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spa404Plugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
