import type { MetadataRoute } from 'next'
import { STUDIO, APPS } from '@/lib/apps-registry'
import { LEGAL_DOCS } from '@/lib/legal-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = STUDIO.url
  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ]
  for (const a of APPS.filter((x) => x.available)) {
    urls.push({ url: `${base}/#${a.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 })
  }
  // Legal Center — every legal document + contact.
  for (const doc of LEGAL_DOCS) {
    urls.push({ url: doc.seo.canonical, lastModified: now, changeFrequency: 'yearly', priority: 0.5 })
  }
  urls.push({ url: `${base}/#contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 })
  return urls
}
