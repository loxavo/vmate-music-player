import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { SITE, ENTITY_SUMMARY } from '@/lib/site-config'
import { FAQS } from '@/lib/legal-content'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

// ---------------------------------------------------------------
// SEO metadata — comprehensive, optimised for search engines + AI
// ---------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline} | Offline Music Player for iPhone`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'VMate Music Player',
    'offline music player',
    'iPhone music player',
    'offline music app',
    'music player no ads',
    'equalizer music app',
    'lossless audio player',
    'local music player iOS',
    'lyrics music app',
    'play music offline',
    'free music player iPhone',
    'VMate',
  ],
  authors: [{ name: SITE.developer, url: SITE.url }],
  creator: SITE.developer,
  publisher: SITE.developer,
  category: SITE.category,
  formatDetection: { telephone: false, address: false, email: false },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: '/appstore-shots/assets/app-ui/nowplaying.jpeg',
        width: 1080,
        height: 2335,
        alt: `${SITE.name} — Now Playing screen`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ['/appstore-shots/assets/app-ui/nowplaying.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
}

// ---------------------------------------------------------------
// JSON-LD structured data — for rich results & AI citation (GEO)
// ---------------------------------------------------------------
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE.url}/#software`,
      name: SITE.name,
      alternateName: SITE.shortName,
      description: ENTITY_SUMMARY,
      url: SITE.url,
      applicationCategory: 'MusicApplication',
      operatingSystem: 'iOS',
      softwareVersion: SITE.version,
      datePublished: SITE.releaseDate,
      dateModified: SITE.releaseDate,
      downloadUrl: SITE.appStoreUrl,
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Free download with optional in-app purchases',
        },
        {
          '@type': 'Offer',
          price: '2.99',
          priceCurrency: 'USD',
          description: 'VMate Pro subscription (per month)',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE.rating,
        ratingCount: SITE.ratingCount,
        bestRating: '5',
        worstRating: '1',
      },
      featureList: [
        'Offline music playback',
        '10-band equalizer with bass boost',
        'Live synced lyrics',
        'Hi-res lossless audio',
        'Folder and library browsing',
        'Instant search',
        'Custom playlists',
        'No advertisements',
        '18 languages',
      ],
      inLanguage: ['en', 'ar', 'de', 'fr', 'es', 'it', 'pt-BR', 'nl', 'tr', 'ru', 'ja', 'ko', 'zh-CN', 'sv', 'da', 'no', 'fi', 'pl'],
      author: { '@id': `${SITE.url}/#org` },
      publisher: { '@id': `${SITE.url}/#org` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#org`,
      name: SITE.developer,
      url: SITE.url,
      email: SITE.supportEmail,
      sameAs: [SITE.twitterUrl, SITE.instagramUrl],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { '@id': `${SITE.url}/#org` },
      inLanguage: 'en',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Features', item: `${SITE.url}/#features` },
        { '@type': 'ListItem', position: 3, name: 'Privacy Policy', item: `${SITE.url}/#privacy` },
        { '@type': 'ListItem', position: 4, name: 'Contact Us', item: `${SITE.url}/#contact` },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
