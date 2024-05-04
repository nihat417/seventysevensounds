/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/mainpage/homepage',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
