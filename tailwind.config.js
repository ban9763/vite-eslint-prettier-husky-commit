/** @type {import('tailwindcss').Config} */

export default {
  content: ['index.html', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // // 自定义主题扩展（如颜色、间距）
      // colors: {
      //   'primary': '#3b82f6',
      // }
    },
  },
  plugins: [],
};
