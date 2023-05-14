/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['upload.wikimedia.org'],
  }
};