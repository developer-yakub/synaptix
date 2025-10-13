/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  distDir: '.next',
  serverExternalPackages: ['firebase-admin']
};

export default nextConfig;
