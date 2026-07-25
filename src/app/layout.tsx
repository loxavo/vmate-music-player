import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { APPS, STUDIO } from '@/lib/apps-registry'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' })

const allFaqs = APPS.flatMap((a) => a.faqs.map((f) => ({ q: f.q, a: f.a, app: a.shortName })))

export const metadata: Metadata = {
  metadataBase: new URL(STUDIO.url),
  title: {
    default: `${STUDIO.name} — ${STUDIO.tagline} | Premium iOS Apps`,
    template: `%s | ${STUDIO.name}`,
  },
  description: STUDIO.description,
  applicationName: STUDIO.name,
  referrer: 'origin-when-cross-origin',
  keywords: [
    STUDIO.name,
    'iOS apps',
    'iPhone apps',
    'offline apps',
    'privacy first apps',
    'no ads apps',
    'VMate Music Player',
    'offline music player',
    'VoiceScribe',
    'AI note writer',
    'voice to text',
    'transcription app',
    'meeting notes',
    'WhisperKit',
    'offline transcription',
  ],
  authors: [{ name: STUDIO.name, url: STUDIO.url }],
  creator: STUDIO.name,
  publisher: STUDIO.name,
  alternates: { canonical: STUDIO.url },
  openGraph: {
    type: 'website',
    locale: STUDIO.locale,
    url: STUDIO.url,
    siteName: STUDIO.name,
    title: `${STUDIO.name} — ${STUDIO.tagline}`,
    description: STUDIO.description,
    images: [{ url: '/icon.svg', width: 512, height: 512, alt: `${STUDIO.name} logo` }],
  },
  twitter: {
    card: 'summary_large_image',
    site: STUDIO.twitter,
    creator: STUDIO.twitter,
    title: `${STUDIO.name} — ${STUDIO.tagline}`,
    description: STUDIO.description,
    images: ['/icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  manifest: '/manifest.json',
}

// JSON-LD: Organization + WebSite + ItemList of apps + FAQPage (combined) + BreadcrumbList
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${STUDIO.url}/#org`,
      name: STUDIO.name,
      url: STUDIO.url,
      description: STUDIO.description,
      email: STUDIO.email,
      sameAs: [STUDIO.twitterUrl, STUDIO.instagramUrl],
    },
    {
      '@type': 'WebSite',
      '@id': `${STUDIO.url}/#website`,
      url: STUDIO.url,
      name: STUDIO.name,
      description: STUDIO.description,
      publisher: { '@id': `${STUDIO.url}/#org` },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': `${STUDIO.url}/#apps`,
      name: `${STUDIO.name} apps`,
      itemListElement: APPS.filter((a) => a.available).map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: a.name,
          alternateName: a.shortName,
          description: a.longDescription,
          url: `${STUDIO.url}/#${a.slug}`,
          applicationCategory: a.category === 'Music' ? 'MusicApplication' : 'ProductivityApplication',
          operatingSystem: 'iOS',
          softwareVersion: a.version,
          datePublished: a.releaseDate,
          downloadUrl: a.appStoreUrl,
          offers: [{ '@type': 'Offer', price: '0', priceCurrency: 'USD', description: `${a.price} download with optional in-app purchases` }],
          aggregateRating: { '@type': 'AggregateRating', ratingValue: a.rating, ratingCount: a.ratingCount, bestRating: '5', worstRating: '1' },
          featureList: a.features.map((f) => f.title),
          inLanguage: 'en',
          author: { '@id': `${STUDIO.url}/#org` },
          publisher: { '@id': `${STUDIO.url}/#org` },
        },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${STUDIO.url}/#faq`,
      mainEntity: allFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${STUDIO.url}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: STUDIO.url },
        { '@type': 'ListItem', position: 2, name: 'Apps', item: `${STUDIO.url}/#home` },
        ...APPS.filter((a) => a.available).map((a, i) => ({ '@type': 'ListItem', position: i + 3, name: a.name, item: `${STUDIO.url}/#${a.slug}` })),
      ],
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
