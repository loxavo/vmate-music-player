import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = SITE.url
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/#features`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/#screenshots`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/#faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/#terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/#subscription`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/#contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
