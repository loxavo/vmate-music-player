// Feature data for the VMate landing page

export interface Feature {
  icon: string
  title: string
  desc: string
  color: 'rose' | 'green'
}

export const FEATURES: Feature[] = [
  {
    icon: 'airplane',
    title: 'Offline Playback',
    desc: 'Play your entire library anywhere — on a plane, underground, or off-grid. No signal, no limits.',
    color: 'rose',
  },
  {
    icon: 'sliders',
    title: '10-Band Equalizer',
    desc: 'Tune every frequency with a pro-grade equalizer, custom presets, bass boost and 3D surround.',
    color: 'green',
  },
  {
    icon: 'quote',
    title: 'Live Lyrics',
    desc: 'Synced, line-by-line lyrics on an immersive Now Playing screen. Sing along to every track.',
    color: 'rose',
  },
  {
    icon: 'wave',
    title: 'Hi-Res Audio',
    desc: 'Lossless, crystal-clear playback that preserves every detail of your favorite recordings.',
    color: 'green',
  },
  {
    icon: 'folder',
    title: 'Folder & Library',
    desc: 'Browse by albums, artists, folders or playlists. Organize thousands of songs effortlessly.',
    color: 'rose',
  },
  {
    icon: 'search',
    title: 'Instant Search',
    desc: 'Find any song, artist or album in a flash with smart filters and genre browsing.',
    color: 'green',
  },
  {
    icon: 'queue',
    title: 'Custom Playlists',
    desc: 'Drag, drop and curate your own collections. Build the perfect playlist for every mood.',
    color: 'rose',
  },
  {
    icon: 'shield',
    title: 'Zero Ads',
    desc: 'Pure music. No interruptions, no tracking, no ads — in the free and Pro versions alike.',
    color: 'green',
  },
  {
    icon: 'globe',
    title: '18 Languages',
    desc: 'A fully localized experience in English, Arabic, Japanese, Korean, Chinese and 13 more.',
    color: 'rose',
  },
]

export interface Stat {
  value: string
  label: string
}

export const STATS: Stat[] = [
  { value: '4.9★', label: 'App Store rating' },
  { value: '200K+', label: 'Downloads' },
  { value: '18', label: 'Languages' },
  { value: '0', label: 'Ads, ever' },
]

export interface ScreenshotShowcase {
  image: string
  title: string
  tag: string
}

export const SCREENSHOTS: ScreenshotShowcase[] = [
  { image: '/appstore-shots/assets/app-ui/nowplaying.jpeg', title: 'Immersive Now Playing', tag: 'Player' },
  { image: '/appstore-shots/assets/app-ui/equalizer.jpeg', title: '10-Band Equalizer', tag: 'Sound' },
  { image: '/appstore-shots/assets/app-ui/library.jpeg', title: 'Your Library, Organized', tag: 'Library' },
  { image: '/appstore-shots/assets/app-ui/search.jpeg', title: 'Instant Search', tag: 'Search' },
  { image: '/appstore-shots/assets/app-ui/home.jpeg', title: 'Home & Continue Listening', tag: 'Home' },
  { image: '/appstore-shots/assets/app-ui/settings1.jpeg', title: 'Deep Settings', tag: 'Settings' },
]
