/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        domains: ["https://cdn.weatherapi.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.weatherapi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
