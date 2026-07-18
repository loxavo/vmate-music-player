'use client'

import { useState, useEffect, useCallback, type FormEvent } from 'react'
import { SITE, NAV, type ViewId, ENTITY_SUMMARY } from '@/lib/site-config'
import { FEATURES, STATS, SCREENSHOTS } from '@/lib/features'
import {
  PRIVACY_POLICY,
  TERMS_CONDITIONS,
  SUBSCRIPTION_TERMS,
  FAQS,
  LEGAL_DOCS,
  type LegalDoc,
} from '@/lib/legal-content'
import { Icon } from '@/components/landing/icon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const ROSE = '#D85B73'
const GREEN = '#7BE495'
const WHITE = '#FFFFFF'

function VmateMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="vmrg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={ROSE} />
          <stop offset="1" stopColor={GREEN} />
        </linearGradient>
        <linearGradient id="vmpg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={GREEN} />
          <stop offset="1" stopColor="#9ff0b6" />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="190" height="190" rx="47" fill="#08080a" stroke="url(#vmrg)" strokeWidth="3" />
      <path d="M72 62 L72 138 L128 100 Z" fill="url(#vmpg)" />
      <rect x="140" y="80" width="9" height="40" rx="4.5" fill={ROSE} />
      <rect x="156" y="68" width="9" height="64" rx="4.5" fill={ROSE} opacity="0.82" />
      <rect x="172" y="88" width="9" height="24" rx="4.5" fill={ROSE} opacity="0.66" />
    </svg>
  )
}

function AppStoreBadge() {
  return (
    <a
      href={SITE.appStoreUrl}
      className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-black transition-transform hover:scale-[1.03] sm:px-6 sm:py-3.5"
      aria-label="Download VMate Music Player on the App Store"
    >
      <Icon name="apple" size={30} color="#000" />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">
          Download on the
        </span>
        <span className="text-lg font-bold tracking-tight">App Store</span>
      </span>
    </a>
  )
}

// -----------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------
function NavBar({ view, onNavigate }: { view: ViewId; onNavigate: (v: ViewId) => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (v: ViewId) => {
    onNavigate(v)
    setOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-white/10 bg-black/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6" aria-label="Primary">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5"
          aria-label="VMate Music Player home"
        >
          <VmateMark size={40} />
          <span className="hidden text-base font-extrabold tracking-tight sm:block">
            {SITE.name}
          </span>
        </button>

        <div className="ml-auto hidden items-center gap-0.5 lg:flex">
          {NAV.slice(0, 7).map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                view === item.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
              style={view === item.id ? { color: GREEN } : undefined}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className={`ml-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
              view === 'contact' ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
            style={view === 'contact' ? { color: GREEN } : undefined}
          >
            Contact
          </button>
        </div>

        <a href={SITE.appStoreUrl} className="ml-auto hidden lg:inline-flex">
          <Button
            size="sm"
            className="rounded-full bg-white text-black hover:bg-white/90"
          >
            <Icon name="download" size={16} className="mr-1.5" />
            Download
          </Button>
        </a>

        <button
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? 'x' : 'menu'} size={22} />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-semibold ${
                  view === item.id ? 'bg-white/5' : ''
                }`}
                style={view === item.id ? { color: GREEN } : undefined}
              >
                {item.label}
              </button>
            ))}
            <a href={SITE.appStoreUrl} className="mt-2">
              <Button className="w-full rounded-full bg-white text-black">
                <Icon name="apple" size={18} className="mr-2" />
                Download on the App Store
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// -----------------------------------------------------------------
// Hero
// -----------------------------------------------------------------
function Hero({ onNavigate }: { onNavigate: (v: ViewId) => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${ROSE}33, transparent 65%)` }}
        />
        <div
          className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${GREEN}26, transparent 65%)` }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: GREEN }} />
            <span style={{ color: GREEN }}>{SITE.tagline}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Your Music.
            <br />
            <span style={{ color: ROSE }}>Offline.</span>{' '}
            <span style={{ color: GREEN }}>Anywhere.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg lg:mx-0">
            {SITE.description}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
            <AppStoreBadge />
            <button
              onClick={() => onNavigate('features')}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              <Icon name="play" size={18} color={GREEN} />
              Explore features
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5 lg:justify-start">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={18} color={GREEN} />
                ))}
              </div>
              <span className="text-sm font-bold">{SITE.rating}</span>
              <span className="text-sm text-white/40">({SITE.ratingCount.toLocaleString()})</span>
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div className="text-sm text-white/60">
              <span className="font-bold text-white">{SITE.downloadCount}</span> downloads
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          <PhoneMockup image="/appstore-shots/assets/app-ui/nowplaying.jpeg" />
          <FloatingChips />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup({ image, alt = 'VMate Music Player app screen' }: { image: string; alt?: string }) {
  return (
    <div
      className="relative mx-auto aspect-[9/19.5] w-full max-w-[300px] overflow-hidden rounded-[2.6rem] bg-black p-2 shadow-2xl"
      style={{
        boxShadow: `0 40px 90px -30px rgba(0,0,0,.9), 0 0 0 2px #1c1c20, 0 0 0 12px #0a0a0c, 0 0 0 13px rgba(255,255,255,.08), 0 0 80px ${ROSE}22`,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black">
        <img src={image} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute left-1/2 top-2.5 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  )
}

function FloatingChips() {
  const chips = [
    { icon: 'airplane', label: 'Offline', color: GREEN, pos: '-left-4 top-16' },
    { icon: 'sliders', label: '10-Band EQ', color: ROSE, pos: '-right-4 top-40' },
    { icon: 'quote', label: 'Lyrics', color: ROSE, pos: '-left-6 bottom-28' },
    { icon: 'shield', label: 'No Ads', color: GREEN, pos: '-right-2 bottom-12' },
  ]
  return (
    <>
      {chips.map((c) => (
        <div
          key={c.label}
          className={`absolute ${c.pos} hidden items-center gap-2 rounded-2xl border border-white/15 bg-black/70 px-3 py-2 backdrop-blur-md sm:flex`}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: `${c.color}22` }}
          >
            <Icon name={c.icon} size={16} color={c.color} />
          </span>
          <span className="text-xs font-bold">{c.label}</span>
        </div>
      ))}
    </>
  )
}

// -----------------------------------------------------------------
// Features
// -----------------------------------------------------------------
function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
          Features
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Everything a true music lover needs
        </h2>
        <p className="mt-4 text-base text-white/60 sm:text-lg">
          A premium, offline-first player engineered for crystal-clear sound and total control
          over your library — with zero ads, zero tracking, zero compromises.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const color = f.color === 'rose' ? ROSE : GREEN
          return (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                style={{ background: `${color}33` }}
              />
              <div className="relative">
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: `${color}1a`, boxShadow: `inset 0 0 24px ${color}22` }}
                >
                  <Icon name={f.icon} size={24} color={color} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center">
            <div
              className="text-3xl font-extrabold tracking-tight sm:text-4xl"
              style={{ color: s.label.includes('rating') ? GREEN : s.label.includes('Ads') ? ROSE : WHITE }}
            >
              {s.value}
            </div>
            <div className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// -----------------------------------------------------------------
// Screenshots showcase
// -----------------------------------------------------------------
function Screenshots() {
  return (
    <section id="screenshots" className="relative border-y border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ROSE }}>
            Screenshots
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            See VMate in action
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            A premium dark interface designed for immersive listening. Available in 18 languages.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SCREENSHOTS.map((s) => (
            <div key={s.title} className="group">
              <div
                className="relative aspect-[9/19.5] overflow-hidden rounded-2xl bg-black p-1.5 transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  boxShadow: `0 20px 50px -20px rgba(0,0,0,.85), 0 0 0 1px #1c1c20, 0 0 0 5px #0a0a0c, 0 0 0 6px rgba(255,255,255,.06)`,
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-black">
                  <img
                    src={s.image}
                    alt={`VMate Music Player — ${s.title} screen`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-1/2 top-1.5 h-1 w-6 -translate-x-1/2 rounded-full bg-black/80" />
                </div>
              </div>
              <div className="mt-3 px-1">
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: GREEN }}>
                  {s.tag}
                </div>
                <div className="mt-0.5 text-xs font-semibold leading-tight text-white/80">
                  {s.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------
function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
          FAQ
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently asked questions</h2>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold">{f.q}</span>
                <Icon
                  name="chevronDown"
                  size={20}
                  color={isOpen ? GREEN : '#9a9aa3'}
                  className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-white/70">{f.a}</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

// -----------------------------------------------------------------
// Final CTA
// -----------------------------------------------------------------
function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 text-center sm:p-14"
        style={{ background: `linear-gradient(135deg, ${ROSE}1a, ${GREEN}14)` }}
      >
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${ROSE}33` }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${GREEN}26` }}
        />
        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to reclaim your music?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">
            Download VMate Music Player free today. Offline playback, premium sound, no ads —
            forever.
          </p>
          <div className="mt-8 flex justify-center">
            <AppStoreBadge />
          </div>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------------------------
// Footer
// -----------------------------------------------------------------
function Footer({ onNavigate }: { onNavigate: (v: ViewId) => void }) {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <VmateMark size={40} />
              <span className="text-base font-extrabold tracking-tight">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {ENTITY_SUMMARY}
            </p>
            <div className="mt-5 flex gap-3">
              <a href={SITE.twitterUrl} aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors hover:text-white">
                <Icon name="twitter" size={18} />
              </a>
              <a href={SITE.instagramUrl} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors hover:text-white">
                <Icon name="instagram" size={18} />
              </a>
              <a href={SITE.githubUrl} aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors hover:text-white">
                <Icon name="github" size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/40">Product</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><button onClick={() => onNavigate('features')} className="text-white/70 hover:text-white">Features</button></li>
              <li><button onClick={() => onNavigate('screenshots')} className="text-white/70 hover:text-white">Screenshots</button></li>
              <li><button onClick={() => onNavigate('faq')} className="text-white/70 hover:text-white">FAQ</button></li>
              <li><a href={SITE.appStoreUrl} className="text-white/70 hover:text-white">Download</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/40">Legal</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><button onClick={() => onNavigate('privacy')} className="text-white/70 hover:text-white">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="text-white/70 hover:text-white">Terms &amp; Conditions</button></li>
              <li><button onClick={() => onNavigate('subscription')} className="text-white/70 hover:text-white">Subscription Terms</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-white/70 hover:text-white">Contact Us</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.developer}. All rights reserved. VMate Music Player v{SITE.version}.
          </p>
          <p className="text-xs text-white/40">
            Made for true music lovers · {SITE.languagesSupported} languages
          </p>
        </div>
      </div>
    </footer>
  )
}

// -----------------------------------------------------------------
// Legal page renderer
// -----------------------------------------------------------------
function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-white/10 pb-8">
        <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GREEN }}>
          Legal
        </div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {doc.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/50">
          <span>Last updated: <span className="text-white/80">{doc.lastUpdated}</span></span>
          <span>·</span>
          <span>Effective: <span className="text-white/80">{doc.effective}</span></span>
        </div>
      </header>

      <p className="mt-8 text-base leading-relaxed text-white/70">{doc.intro}</p>

      <div className="mt-10 space-y-10">
        {doc.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-24">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{sec.heading}</h2>
            {sec.body && <p className="mt-3 text-[15px] leading-relaxed text-white/70">{sec.body}</p>}
            {sec.list && (
              <ul className="mt-4 space-y-2">
                {sec.list.map((li, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                    <Icon name="check" size={18} color={GREEN} className="mt-1 shrink-0" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
            {sec.subsections && (
              <div className="mt-5 space-y-5">
                {sec.subsections.map((sub, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <h3 className="text-base font-bold">{sub.heading}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/70">{sub.body}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}

// -----------------------------------------------------------------
// Contact Us
// -----------------------------------------------------------------
function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverMsg, setServerMsg] = useState('')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setStatus('loading')
    setServerMsg('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setStatus('error')
        setServerMsg(json.error || 'Something went wrong.')
        if (json.fields) setErrors(json.fields)
      } else {
        setStatus('success')
        setServerMsg(json.message || 'Message sent!')
        form.reset()
      }
    } catch {
      setStatus('error')
      setServerMsg('Network error. Please try again or email support@vmate.app.')
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ROSE }}>
          Contact Us
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          We&apos;d love to hear from you
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
          Questions, feedback, billing issues or partnership ideas — reach out and our team will
          respond within 1–2 business days.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <ContactCard icon="mail" title="Email" value={SITE.supportEmail} href={`mailto:${SITE.supportEmail}`} color={GREEN} />
            <ContactCard icon="shield" title="Privacy" value={SITE.privacyEmail} href={`mailto:${SITE.privacyEmail}`} color={ROSE} />
            <ContactCard icon="clock" title="Response time" value="1–2 business days" color={GREEN} />
            <ContactCard icon="users" title="Community" value={`${SITE.downloadCount} listeners worldwide`} color={ROSE} />
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8" noValidate>
            {/* honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" error={errors.name}>
                <Input name="name" placeholder="Jane Doe" className="h-12 bg-white/5 border-white/10" />
              </Field>
              <Field label="Email" error={errors.email}>
                <Input name="email" type="email" placeholder="jane@example.com" className="h-12 bg-white/5 border-white/10" />
              </Field>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Subject" error={errors.subject}>
                <Input name="subject" placeholder="How can we help?" className="h-12 bg-white/5 border-white/10" />
              </Field>
              <Field label="Category">
                <Select name="category" defaultValue="general">
                  <SelectTrigger className="h-12 bg-white/5 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="privacy">Privacy</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" error={errors.message}>
                <Textarea name="message" placeholder="Tell us more…" rows={5} className="bg-white/5 border-white/10 resize-none" />
              </Field>
            </div>

            {status === 'success' && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border p-4" style={{ borderColor: `${GREEN}44`, background: `${GREEN}11` }}>
                <Icon name="check" size={20} color={GREEN} className="mt-0.5 shrink-0" />
                <p className="text-sm text-white/80">{serverMsg}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                <Icon name="x" size={20} color="#f87171" className="mt-0.5 shrink-0" />
                <p className="text-sm text-white/80">{serverMsg}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 h-12 w-full rounded-2xl text-base font-bold text-black"
              style={{ background: `linear-gradient(95deg, ${ROSE}, ${GREEN})` }}
            >
              {status === 'loading' ? (
                'Sending…'
              ) : (
                <>
                  <Icon name="send" size={18} className="mr-2" />
                  Send message
                </>
              )}
            </Button>
            <p className="mt-3 text-center text-xs text-white/40">
              By submitting, you agree to our{' '}
              <button type="button" onClick={() => {}} className="underline">Privacy Policy</button>.
              We never share your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactCard({
  icon, title, value, href, color,
}: { icon: string; title: string; value: string; href?: string; color: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${color}1a` }}>
        <Icon name={icon} size={20} color={color} />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-white/40">{title}</div>
        <div className="text-sm font-bold">{value}</div>
      </div>
    </div>
  )
  return href ? <a href={href}>{inner}</a> : inner
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-2 block text-sm font-semibold text-white/80">{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  )
}

// -----------------------------------------------------------------
// Page
// -----------------------------------------------------------------
export default function Home() {
  const [view, setView] = useState<ViewId>(() => {
    if (typeof window === 'undefined') return 'home'
    const h = window.location.hash.replace('#', '') as ViewId
    return NAV.some((n) => n.id === h) ? h : 'home'
  })

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '') as ViewId
      if (NAV.some((n) => n.id === h)) setView(h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Keep document.title in sync with the active view (SEO + UX),
  // including on initial deep-link load via URL hash.
  useEffect(() => {
    const titles: Record<ViewId, string> = {
      home: `${SITE.name} — ${SITE.tagline} | Offline Music Player for iPhone`,
      features: `Features — ${SITE.name}`,
      screenshots: `Screenshots — ${SITE.name}`,
      faq: `FAQ — ${SITE.name}`,
      privacy: `Privacy Policy — ${SITE.name}`,
      terms: `Terms & Conditions — ${SITE.name}`,
      subscription: `Purchase & Subscription Terms — ${SITE.name}`,
      contact: `Contact Us — ${SITE.name}`,
    }
    document.title = titles[view]
    // accessibility: announce the view change
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [view])

  const navigate = useCallback((v: ViewId) => {
    setView(v)
    if (typeof window !== 'undefined') {
      window.location.hash = v === 'home' ? '' : v
      // scroll to top for "page" changes; keep scroll for in-page anchors
      if (v !== 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      // update document title for SEO/UX
      const titles: Record<ViewId, string> = {
        home: `${SITE.name} — ${SITE.tagline}`,
        features: `Features — ${SITE.name}`,
        screenshots: `Screenshots — ${SITE.name}`,
        faq: `FAQ — ${SITE.name}`,
        privacy: `Privacy Policy — ${SITE.name}`,
        terms: `Terms & Conditions — ${SITE.name}`,
        subscription: `Purchase & Subscription Terms — ${SITE.name}`,
        contact: `Contact Us — ${SITE.name}`,
      }
      document.title = titles[v]
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <NavBar view={view} onNavigate={navigate} />

      <main className="flex-1">
        {/* Home view — contains all in-page sections, always in DOM for SEO */}
        <div className={view === 'home' ? 'block' : 'hidden'}>
          <Hero onNavigate={navigate} />
          <Features />
          <Screenshots />
          <FAQ />
          <FinalCTA />
        </div>

        {/* Legal & contact views — also kept in DOM for SEO/AI crawlers */}
        <div className={view === 'privacy' ? 'block' : 'hidden'}>
          <LegalPage doc={PRIVACY_POLICY} />
        </div>
        <div className={view === 'terms' ? 'block' : 'hidden'}>
          <LegalPage doc={TERMS_CONDITIONS} />
        </div>
        <div className={view === 'subscription' ? 'block' : 'hidden'}>
          <LegalPage doc={SUBSCRIPTION_TERMS} />
        </div>
        <div className={view === 'contact' ? 'block' : 'hidden'}>
          <Contact />
        </div>
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}
