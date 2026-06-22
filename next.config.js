
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Important for Netlify deployment
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'freelanceflow-frontend-uh18.onrender.com'],
  },
}

module.exports = nextConfig