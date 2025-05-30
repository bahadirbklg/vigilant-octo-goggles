/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  basePath: "",
}

module.exports = nextConfig
