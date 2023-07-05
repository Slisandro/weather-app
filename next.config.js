/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        domains: ["cdn.weatherapi.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherapi.com',
                port: '',
                pathname: '/**',
            },
        ],
        unoptimized: true
    },
    experimental: {
        appDir: true
    }
}
