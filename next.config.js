const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    devIndicators: {
        buildActivityPosition: 'bottom-right',
        buildActivity: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig
