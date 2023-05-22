/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.mobit.ir', 'res.cloudinary.com'],
  },
};
