export default function robots() {
  const siteUrl = 'https://www.moudrohrani.cz'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
