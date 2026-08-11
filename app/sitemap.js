export default function sitemap() {
  const siteUrl = 'https://www.moudrohrani.cz'

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
