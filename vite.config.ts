import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    cors: true,
    host: '0.0.0.0', // 指定服务器主机名
    port: 8080, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    strictPort: false, // 若8080端口被占用,直接结束项目
    // proxy: {
    //   '^/api': {
    //     target: 'http://152.136.185.210:5000',
    //     changeOrigin: true,
    //     ws: true
    //   }
    // }
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  optimizeDeps: {
    include: ['axios']
  },
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";'
      }
    }
  }
})
