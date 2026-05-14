import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://savewatersaveplanet.org'
  const now = new Date()
  const routes = [
    '',
    '/about',
    '/contact',
    '/how-to-make-your-own',
    '/watering-your-tree',
    '/privacy-policy',
    '/terms-of-service',
  ]
  return routes.map((route, idx) => ({
    url: `${baseUrl}${route || '/'}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: idx === 0 ? 1 : 0.7,
  }))
}
