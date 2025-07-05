import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  // Always export in production for GitHub Pages
  output: isProd ? 'export' : undefined,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // GitHub Pages specific configuration
  ...(isProd && {
    basePath: '/portfolio_example',
    assetPrefix: '/portfolio_example/',
    distDir: 'out',
  }),
  
  // Configurações de performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  
  // Headers de segurança (apenas para modo não-export)
  ...(!isProd && {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
          ],
        },
      ]
    },
  }),

  // Configuração de imagens para export estático
  images: {
    unoptimized: isProd,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compressão
  compress: true,

  // Bundle Analyzer (opcional)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')()
      config.plugins.push(new BundleAnalyzerPlugin())
      return config
    },
  }),
}

export default nextConfig
