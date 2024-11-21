/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a-n-s-k.github.io/porfolio',
        port: '',
        pathname: '/',
      }
    ],
  },
};

export default nextConfig;
