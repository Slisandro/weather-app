/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        domains: ["https://www.cdn.weatherapi.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.cdn.weatherapi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}
