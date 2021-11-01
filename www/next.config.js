const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['github.com', 'ca.slack-edge.com', 'res.cloudinary.com'],
  },
})
