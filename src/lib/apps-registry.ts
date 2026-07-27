// App registry — the single source of truth for the multi-app showcase.
// Add new apps here; the site (nav, showcase, SEO) updates automatically.

export interface AppFeature {
  icon: string
  title: string
  desc: string
  color: 'rose' | 'green'
}

export interface AppScreenshot {
  image: string
  title: string
  tag: string
}

export interface AppFaq {
  q: string
  a: string
}

export interface AppShowcase {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  longDescription: string
  category: string
  appStoreUrl: string
  androidUrl?: string
  version: string
  releaseDate: string
  rating: number
  ratingCount: number
  downloadCount: string
  price: string
  inAppPurchaseFrom?: string
  developer: string
  icon: string // path to icon image
  accent: 'rose' | 'green'
  languagesSupported: number
  // marketing
  features: AppFeature[]
  screenshots: AppScreenshot[]
  faqs: AppFaq[]
  // for showcase grid
  available: boolean
  comingSoon?: boolean
}

// Brand colors
export const ROSE = '#D85B73'
export const GREEN = '#7BE495'

export const APPS: AppShowcase[] = [
  // -----------------------------------------------------------------
  // APP 1 — VMate Music Player
  // -----------------------------------------------------------------
  {
    slug: 'vmate',
    name: 'VMate Music Player',
    shortName: 'VMate',
    tagline: 'Your Music. Offline. Anywhere.',
    description:
      'VMate Music Player is a premium offline music player for iPhone. Play your local music anywhere with a 10-band equalizer, live lyrics, hi-res audio, smart library organization and zero ads.',
    longDescription:
      'VMate Music Player is a free, offline-first iOS music player app developed by Loxavo Studios. It lets iPhone users play local audio files without an internet connection, and includes a 10-band equalizer with bass boost, live synced lyrics, hi-res lossless playback, folder-based library browsing, instant search, custom playlists and an immersive Now Playing screen. The app contains no ads and is available in 18 languages.',
    category: 'Music',
    appStoreUrl: 'https://apps.apple.com/app/vmate-music-player',
    version: '1.0',
    releaseDate: '2025-01-15',
    rating: 4.9,
    ratingCount: 12847,
    downloadCount: '200K+',
    price: 'Free',
    inAppPurchaseFrom: '$2.99',
    developer: 'Loxavo Studios',
    icon: '/icon.svg',
    accent: 'green',
    languagesSupported: 18,
    available: true,
    features: [
      { icon: 'airplane', title: 'Offline Playback', desc: 'Play your entire library anywhere — on a plane, underground, or off-grid. No signal, no limits.', color: 'rose' },
      { icon: 'sliders', title: '10-Band Equalizer', desc: 'Tune every frequency with a pro-grade equalizer, custom presets, bass boost and 3D surround.', color: 'green' },
      { icon: 'quote', title: 'Live Lyrics', desc: 'Synced, line-by-line lyrics on an immersive Now Playing screen. Sing along to every track.', color: 'rose' },
      { icon: 'wave', title: 'Hi-Res Audio', desc: 'Lossless, crystal-clear playback that preserves every detail of your favorite recordings.', color: 'green' },
      { icon: 'folder', title: 'Folder & Library', desc: 'Browse by albums, artists, folders or playlists. Organize thousands of songs effortlessly.', color: 'rose' },
      { icon: 'search', title: 'Instant Search', desc: 'Find any song, artist or album in a flash with smart filters and genre browsing.', color: 'green' },
      { icon: 'queue', title: 'Custom Playlists', desc: 'Drag, drop and curate your own collections. Build the perfect playlist for every mood.', color: 'rose' },
      { icon: 'shield', title: 'Zero Ads', desc: 'Pure music. No interruptions, no tracking, no ads — in the free and Pro versions alike.', color: 'green' },
    ],
    screenshots: [
      { image: '/appstore-shots/assets/app-ui/nowplaying.jpeg', title: 'Immersive Now Playing', tag: 'Player' },
      { image: '/appstore-shots/assets/app-ui/equalizer.jpeg', title: '10-Band Equalizer', tag: 'Sound' },
      { image: '/appstore-shots/assets/app-ui/library.jpeg', title: 'Your Library, Organized', tag: 'Library' },
      { image: '/appstore-shots/assets/app-ui/search.jpeg', title: 'Instant Search', tag: 'Search' },
      { image: '/appstore-shots/assets/app-ui/home.jpeg', title: 'Home & Continue Listening', tag: 'Home' },
      { image: '/appstore-shots/assets/app-ui/settings1.jpeg', title: 'Deep Settings', tag: 'Settings' },
    ],
    faqs: [
      { q: 'What is VMate Music Player?', a: 'VMate Music Player is a free, offline-first music player app for iPhone. It lets you play your local audio files without an internet connection and includes a 10-band equalizer, live lyrics, hi-res audio, folder browsing, instant search, custom playlists and an immersive Now Playing screen — all with no ads.' },
      { q: 'Is VMate Music Player free?', a: 'Yes. VMate Music Player is free to download and use. Optional in-app purchases and subscriptions (VMate Pro) unlock premium features such as the full equalizer, bass boost, hi-res audio output and live lyrics. The free version remains fully usable for offline playback.' },
      { q: 'Can I play music offline with VMate?', a: 'Yes. VMate is built to be offline-first. Once your audio files are on your iPhone, you can play them anywhere — on a plane, underground, or anywhere without a signal. No streaming, no Wi-Fi required.' },
      { q: 'Does VMate collect my personal data?', a: 'No. VMate does not require an account and does not collect personal data, listening history or browsing habits. The App reads your local audio files only to display and play them. Your music never leaves your device.' },
      { q: 'Does VMate have ads?', a: 'No. VMate Music Player contains no advertisements in the free or paid versions, so your listening experience is never interrupted.' },
      { q: 'What audio features does VMate include?', a: 'VMate includes a 10-band equalizer with presets, bass boost, 3D surround, a real-time audio visualizer, hi-res lossless playback output, and live synced lyrics on the Now Playing screen.' },
      { q: 'How do I cancel my VMate Pro subscription?', a: 'Subscriptions are managed by Apple. To cancel, go to iPhone Settings → your Apple ID → Subscriptions → VMate Pro, and turn off auto-renew at least 24 hours before the end of the current period. You keep Pro access until that period ends.' },
      { q: 'How many languages does VMate support?', a: 'VMate Music Player is available in 18 languages, including English, Arabic, German, French, Spanish, Italian, Portuguese (Brazil), Dutch, Turkish, Russian, Japanese, Korean, Simplified Chinese, Swedish, Danish, Norwegian, Finnish and Polish.' },
    ],
  },

  // -----------------------------------------------------------------
  // APP 2 — AI Note Writer: VoiceScribe
  // -----------------------------------------------------------------
  {
    slug: 'voicescribe',
    name: 'AI Note Writer: VoiceScribe',
    shortName: 'VoiceScribe',
    tagline: 'Meeting Minutes & Study Helper',
    description:
      'VoiceScribe is a 100% offline, privacy-first AI note taker for iPhone. Transcribe and summarize meetings or lectures with on-device AI (WhisperKit) — no cloud, no uploads, no leaks. Export to PDF, Notion, DOCX and more.',
    longDescription:
      'AI Note Writer: VoiceScribe is a productivity app for iPhone that turns spoken audio into structured, searchable notes using on-device AI language models powered by WhisperKit. It runs completely offline — your audio never leaves your device, making it ideal for doctors, lawyers, executives and students handling confidential information. Core capabilities include live transcription with bookmarks, YouTube and document import, an OCR document scanner, smart AI templates with interactive chat, a voice-typing keyboard, calendar integration, and multi-format export (TXT, Markdown, PDF, DOCX, SRT, VTT).',
    category: 'Productivity',
    appStoreUrl: 'https://apps.apple.com/us/app/ai-note-writer-voicescribe/id6774349229',
    version: '1.0',
    releaseDate: '2025-01-10',
    rating: 4.3,
    ratingCount: 6,
    downloadCount: 'New',
    price: 'Free',
    inAppPurchaseFrom: '$4.99',
    developer: 'Taoufik Bourehouat',
    icon: '/apps/voicescribe/icon/icon.jpg',
    accent: 'rose',
    languagesSupported: 16,
    available: true,
    features: [
      { icon: 'shield', title: '100% Private & Offline', desc: 'Your data never leaves your device. On-device AI means perfect for confidential meetings, lectures and calls — even on a plane with zero Wi-Fi.', color: 'rose' },
      { icon: 'wave', title: 'Live Transcription', desc: 'Capture lectures and meetings in real time with automatic language detection. Bookmark key moments to jump straight to them later.', color: 'green' },
      { icon: 'sliders', title: 'Smart AI Templates', desc: 'Convert transcripts into structured summaries, emails, action items, blogs, flashcards or quizzes with one tap using AI templates.', color: 'rose' },
      { icon: 'quote', title: 'Interactive AI Chat', desc: 'Chat directly with your transcripts. Ask "What were the actionable deadlines?" and get instant, accurate answers.', color: 'green' },
      { icon: 'folder', title: 'YouTube & Doc Importer', desc: 'Import videos, audio files or text documents to instantly extract text, build study notes and generate summaries.', color: 'rose' },
      { icon: 'search', title: 'OCR Document Scanner', desc: 'Snap a picture of handouts, whiteboards or printed agendas and convert them into fully editable, interactive text.', color: 'green' },
      { icon: 'mic', title: 'Voice Typing Keyboard', desc: 'Dictate completely hands-free across all your favorite apps with a dedicated offline speech-to-text keyboard.', color: 'rose' },
      { icon: 'download', title: 'Multi-Format Export', desc: 'Export notes and summaries as TXT, Markdown, PDF, DOCX, SRT or VTT. Share exactly how you want, with reading time and word counts.', color: 'green' },
    ],
    screenshots: [
      { image: '/apps/voicescribe/screens/screen_1.jpg', title: 'Live Recording & Transcript', tag: 'Recording' },
      { image: '/apps/voicescribe/screens/screen_2.jpg', title: 'AI-Powered Summaries', tag: 'Summary' },
      { image: '/apps/voicescribe/screens/screen_3.jpg', title: 'Your Notes Dashboard', tag: 'Notes' },
      { image: '/apps/voicescribe/screens/screen_4.jpg', title: 'Interactive Transcript', tag: 'Transcript' },
      { image: '/apps/voicescribe/screens/screen_5.jpg', title: 'Voice Typing Keyboard', tag: 'Keyboard' },
      { image: '/apps/voicescribe/screens/screen_6.jpg', title: 'Smart AI Templates', tag: 'Templates' },
    ],
    faqs: [
      { q: 'What is VoiceScribe?', a: 'AI Note Writer: VoiceScribe is a 100% offline, privacy-first AI note-taking app for iPhone. It transcribes and summarizes meetings, lectures and calls using on-device AI (powered by WhisperKit) — no cloud, no uploads, no data leaks.' },
      { q: 'Does VoiceScribe work without internet?', a: 'Yes. VoiceScribe runs advanced AI language models entirely on your device. You can transcribe and summarize anywhere — on an airplane, in a basement, or anywhere with zero Wi-Fi. No server costs, no hidden uploads.' },
      { q: 'Is my data private?', a: 'Completely. Your audio never leaves your device. VoiceScribe is designed for doctors, lawyers, executives and students who handle confidential information. There is no cloud processing and no account required.' },
      { q: 'What can I import into VoiceScribe?', a: 'You can record live audio, import audio and video files, import YouTube videos, and scan physical documents with the OCR scanner. VoiceScribe extracts text from all of them and builds smart study notes and summaries.' },
      { q: 'Can I chat with my transcripts?', a: 'Yes. VoiceScribe includes an interactive AI chat that lets you ask questions about your transcript — for example, "What were the actionable deadlines?" — and get instant answers. Smart AI templates also convert output into summaries, emails, blogs, flashcards and quizzes.' },
      { q: 'What export formats are supported?', a: 'VoiceScribe exports to TXT, Markdown, PDF, DOCX, SRT and VTT, with reading-time tracking, word counts and direct calendar links. Export to Notion is also supported for instant sharing.' },
      { q: 'Is there a voice-typing keyboard?', a: 'Yes. VoiceScribe includes a dedicated offline speech-to-text keyboard that lets you dictate hands-free across all your favorite apps on your entire phone.' },
      { q: 'Does it integrate with my calendar?', a: 'Yes. VoiceScribe syncs seamlessly with Google Calendar and Microsoft Outlook, automatically linking your recorded notes to the relevant meetings to keep your workflow organized.' },
    ],
  },

  // -----------------------------------------------------------------
  // APP 3 — placeholder for future apps
  // -----------------------------------------------------------------
  // {
  //   slug: 'next-app',
  //   name: 'Next App',
  //   ...
  //   available: false,
  //   comingSoon: true,
  // },
]

export function getApp(slug: string): AppShowcase | undefined {
  return APPS.find((a) => a.slug === slug)
}

export const AVAILABLE_APPS = APPS.filter((a) => a.available)

// Developer / studio identity (shared across all apps)
export const STUDIO = {
  name: 'Loxavo Studios',
  tagline: 'Building premium, privacy-first apps for iPhone',
  description:
    'Loxavo Studios crafts beautifully designed, offline-first iOS apps with a focus on privacy, performance and a premium user experience. Our portfolio spans music and productivity.',
  email: 'support@loxavo.site',
  privacyEmail: 'privacy@loxavo.site',
  url: 'https://loxavo.site',
  twitter: '@loxavostudios',
  twitterUrl: 'https://twitter.com/loxavostudios',
  instagramUrl: 'https://instagram.com/loxavostudios',
  githubUrl: '#',
  locale: 'en_US',
} as const
