/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 指定要搜索的JavaScript和TypeScript文件
    "./public/index.html", // 指定要搜索的HTML文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};

