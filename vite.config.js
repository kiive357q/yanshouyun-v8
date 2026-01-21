import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // 禁用压缩以避免 Windows 环境下的堆栈溢出崩溃
    target: 'esnext',
    sourcemap: false
  }
})
