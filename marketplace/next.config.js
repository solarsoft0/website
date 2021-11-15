const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['github.com'],
  },
  experimental: {
    urlImports: ['https://github.com/fonoster/marketplace'],
  },
})
