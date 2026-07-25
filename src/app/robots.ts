import type { MetadataRoute } from 'next'
import { STUDIO, APPS } from '@/lib/apps-registry'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${STUDIO.url}/sitemap.xml`,
    host: STUDIO.url,
  }
}
