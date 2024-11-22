/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a-n-s-k.github.io',
        port: '',
        pathname: '/porfolio',
      }
    ],
  },
};

export default nextConfig;
