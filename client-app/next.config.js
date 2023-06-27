/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    // experimental: {
    //     serverActions: true,
    // },
    // assetPrefix: isProd ? undefined : undefined,
    // assetPrefix: '.',
    output: 'export',
    // distDir: '../server-app/wwwroot'
    
}

module.exports = nextConfig
