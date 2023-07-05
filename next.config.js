/** @type {import('next').NextConfig} */
module.exports = {
    images: {
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
