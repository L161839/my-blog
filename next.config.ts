/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← 最关键：静态导出
  images: {
    unoptimized: true,  // ← 禁用图片优化（静态导出必须）
  },
}

module.exports = nextConfig