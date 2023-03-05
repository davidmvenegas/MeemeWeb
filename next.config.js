/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  scssOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
