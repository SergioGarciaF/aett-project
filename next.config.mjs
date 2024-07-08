/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        NEXT_PUBLIC_DB_PASSWORD: process.env.DB_PASSWORD,
    },
};

export default nextConfig;
