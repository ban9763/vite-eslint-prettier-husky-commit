export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // overrideBrowserslist: ['>1%', 'last 2 versions'], // 自定义浏览器兼容范围
    },
    // 生产环境优化（可选）
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
