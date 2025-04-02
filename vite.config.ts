import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'; //引入path用到了上面安装的@types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //路径别名配置如下
  resolve: {
    alias: {
      '@': path.resolve('./src') // 用@代替src
    }
  }
})
