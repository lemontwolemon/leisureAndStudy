import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 指定服务器主机名
    port: 8080, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    strictPort: true, // 若3333端口被占用,直接结束项目
    proxy: {
      '^/api': {
        target: 'http://192.168.29.26:7001/',
        changeOrigin: true,
        ws: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
})
