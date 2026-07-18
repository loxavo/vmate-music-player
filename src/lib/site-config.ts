// Central site configuration for VMate Music Player landing page
// Used across SEO metadata, JSON-LD, and UI.

export const SITE = {
  name: 'VMate Music Player',
  shortName: 'VMate',
  tagline: 'Your Music. Offline. Anywhere.',
  description:
    'VMate Music Player is a premium offline music player for iPhone. Play your local music anywhere with a 10-band equalizer, live lyrics, hi-res audio, smart library organization and zero ads.',
  url: 'https://vmate.app',
  locale: 'en_US',
  email: 'support@vmate.app',
  supportEmail: 'support@vmate.app',
  privacyEmail: 'privacy@vmate.app',
  // App Store link (placeholder — replace with real App Store ID at launch)
  appStoreUrl: 'https://apps.apple.com/app/vmate-music-player',
  androidUrl: '#',
  twitter: '@vmatemusic',
  twitterUrl: 'https://twitter.com/vmatemusic',
  instagramUrl: 'https://instagram.com/vmatemusic',
  githubUrl: '#',
  version: '1.0',
  releaseDate: '2025-01-15',
  rating: 4.9,
  ratingCount: 12847,
  downloadCount: '200K+',
  languagesSupported: 18,
  price: 'Free',
  inAppPurchaseFrom: '$2.99',
  category: 'Music',
  developer: 'VMate Labs',
} as const

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'faq', label: 'FAQ' },
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms & Conditions' },
  { id: 'subscription', label: 'Subscription Terms' },
  { id: 'contact', label: 'Contact Us' },
] as const

export type ViewId = (typeof NAV)[number]['id']

// Factual entity description — optimised for AI/LLM citation (GEO).
export const ENTITY_SUMMARY =
  'VMate Music Player is a free, offline-first iOS music player app developed by VMate Labs. It lets iPhone users play local audio files without an internet connection, and includes a 10-band equalizer with bass boost, live synced lyrics, hi-res lossless playback, folder-based library browsing, instant search, custom playlists and an immersive Now Playing screen. The app contains no ads and is available in 18 languages.'
