import react from '@vitejs/plugin-react-swc';
import path from 'path'; //引入path用到了上面安装的@types/node
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 复制到
    viteStaticCopy({
      targets: [
        {
          src: 'nginx/Dockerfile',
          dest: '.',
        },
        {
          src: 'nginx/docker.nginx.conf',
          dest: '.',
        },
      ],
    }),
  ],
  //路径别名配置如下
  resolve: {
    alias: {
      '@': path.resolve('./src'), // 用@代替src
    },
  },
});
