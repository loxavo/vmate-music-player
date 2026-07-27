'use client'

import { useState, useEffect, useCallback, type FormEvent } from 'react'
import { APPS, STUDIO, ROSE, GREEN, type AppShowcase } from '@/lib/apps-registry'
import { LEGAL_DOCS, LEGAL_NAV, getLegalDoc, type LegalDoc, type LegalLink } from '@/lib/legal-content'
import { Icon } from '@/components/landing/icon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

const WHITE = '#FFFFFF'

// View routing: home | <app-slug> | <legal-view> | contact
type View = 'home' | string

const isAppSlug = (v: string) => APPS.some((a) => a.slug === v)
const getApp = (v: string) => APPS.find((a) => a.slug === v)
const isLegalView = (v: string) => !!getLegalDoc(v)

// -----------------------------------------------------------------
// Brand mark — Loxavo Studios logo (L monogram + creative spark)
// -----------------------------------------------------------------
function StudioMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="loxRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={ROSE} /><stop offset="1" stopColor={GREEN} />
        </linearGradient>
        <linearGradient id="loxL" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor={ROSE} /><stop offset="0.55" stopColor="#b8708a" /><stop offset="1" stopColor={GREEN} />
        </linearGradient>
        <linearGradient id="loxSpark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={GREEN} /><stop offset="1" stopColor="#9ff0b6" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="46" fill="#08080a" />
      <rect x="5" y="5" width="190" height="190" rx="46" fill="none" stroke="url(#loxRing)" strokeWidth="3" />
      <rect x="74" y="50" width="36" height="100" rx="18" fill="url(#loxL)" />
      <rect x="74" y="122" width="74" height="30" rx="15" fill="url(#loxL)" />
      <path d="M152 44 L157 58 L171 63 L157 68 L152 82 L147 68 L133 63 L147 58 Z" fill="url(#loxSpark)" />
      <circle cx="158" cy="120" r="6" fill={GREEN} opacity="0.85" />
    </svg>
  )
}

function AppIcon({ app, size = 56 }: { app: AppShowcase; size?: number }) {
  return (
    <img
      src={app.icon}
      alt={`${app.name} app icon`}
      width={size}
      height={size}
      className="rounded-[22%] object-cover"
      style={{ boxShadow: '0 8px 24px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.08)' }}
    />
  )
}

function AppStoreBadge({ url, small = false }: { url: string; small?: boolean }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-2.5 text-black transition-transform hover:scale-[1.03] sm:px-5 sm:py-3"
      aria-label="Download on the App Store"
    >
      <Icon name="apple" size={small ? 24 : 30} color="#000" />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium uppercase tracking-wide opacity-70">Download on the</span>
        <span className={`font-bold tracking-tight ${small ? 'text-base' : 'text-lg'}`}>App Store</span>
      </span>
    </a>
  )
}

// -----------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------
function NavBar({ view, onNavigate }: { view: View; onNavigate: (v: View) => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems: { id: View; label: string }[] = [
    { id: 'home', label: 'Apps' },
    ...APPS.filter((a) => a.available).map((a) => ({ id: a.slug, label: a.shortName })),
    { id: 'privacy', label: 'Privacy' },
    { id: 'terms', label: 'Terms' },
    { id: 'contact', label: 'Contact' },
  ]

  const go = (v: View) => { onNavigate(v); setOpen(false) }

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'border-b border-white/10 bg-black/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6" aria-label="Primary">
        <button onClick={() => go('home')} className="flex items-center gap-2.5" aria-label={`${STUDIO.name} home`}>
          <StudioMark size={40} />
          <span className="hidden text-base font-extrabold tracking-tight sm:block">{STUDIO.name}</span>
        </button>
        <div className="ml-auto hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                view === item.id ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
              style={view === item.id ? { color: GREEN } : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-semibold ${view === item.id ? 'bg-white/5' : ''}`}
                style={view === item.id ? { color: GREEN } : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

// -----------------------------------------------------------------
// Showcase Home — grid of all apps
// -----------------------------------------------------------------
function ShowcaseHome({ onNavigate }: { onNavigate: (v: View) => void }) {
  const totalDownloads = APPS.filter((a) => a.available).length
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${ROSE}33, transparent 65%)` }} />
          <div className="absolute top-1/4 -right-32 h-[520px] w-[520px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${GREEN}26, transparent 65%)` }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: GREEN }} />
            <span style={{ color: GREEN }}>{STUDIO.tagline}</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Premium iOS apps,
            <br />
            <span style={{ color: ROSE }}>crafted</span> with{' '}
            <span style={{ color: GREEN }}>privacy</span> first.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/60 sm:text-lg">
            {STUDIO.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center">
              <div className="text-2xl font-extrabold" style={{ color: GREEN }}>{totalDownloads}</div>
              <div className="text-xs text-white/50">Apps live</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center">
              <div className="text-2xl font-extrabold" style={{ color: ROSE }}>100%</div>
              <div className="text-xs text-white/50">Offline & private</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center">
              <div className="text-2xl font-extrabold" style={{ color: GREEN }}>0</div>
              <div className="text-xs text-white/50">Ads, ever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-center gap-3">
          <Icon name="grid" size={24} color={GREEN} />
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Our apps</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {APPS.map((app) => (
            <AppCard key={app.slug} app={app} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* Studio values */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: 'shield', title: 'Privacy by default', desc: 'No accounts, no tracking, no cloud. Your data stays on your device.', color: ROSE },
              { icon: 'airplane', title: 'Offline-first', desc: 'Every app works without internet — on a plane, underground, anywhere.', color: GREEN },
              { icon: 'sparkles', title: 'Premium craft', desc: 'Beautiful dark interfaces, smooth animations, thoughtful details.', color: ROSE },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: `${v.color}1a` }}>
                  <Icon name={v.icon} size={24} color={v.color} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function AppCard({ app, onNavigate }: { app: AppShowcase; onNavigate: (v: View) => void }) {
  const accent = app.accent === 'rose' ? ROSE : GREEN
  return (
    <button
      onClick={() => app.available && onNavigate(app.slug)}
      disabled={!app.available}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] disabled:cursor-default disabled:hover:translate-y-0 disabled:hover:border-white/10 disabled:hover:bg-white/[0.03]"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100" style={{ background: `${accent}33` }} />
      <div className="relative flex items-start gap-4">
        <AppIcon app={app} size={72} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="border-white/10 bg-white/5 text-[10px] text-white/60">{app.category}</Badge>
            {app.comingSoon && <Badge className="text-[10px]" style={{ background: `${accent}22`, color: accent }}>Coming soon</Badge>}
          </div>
          <h3 className="mt-2 truncate text-xl font-extrabold tracking-tight">{app.name}</h3>
          <p className="mt-0.5 text-sm" style={{ color: accent }}>{app.tagline}</p>
        </div>
      </div>
      <p className="relative mt-4 text-sm leading-relaxed text-white/60 line-clamp-2">{app.description}</p>
      <div className="relative mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-white/50">
          <span className="flex items-center gap-1"><Icon name="star" size={14} color={GREEN} />{app.rating}</span>
          <span>·</span>
          <span>{app.price}</span>
          {app.available && (<><span>·</span><span>{app.downloadCount} downloads</span></>)}
        </div>
        {app.available ? (
          <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: accent }}>
            View <Icon name="chevronRight" size={16} color={accent} />
          </span>
        ) : (
          <span className="text-xs font-semibold text-white/40">In development</span>
        )}
      </div>
    </button>
  )
}

// -----------------------------------------------------------------
// App Detail Page
// -----------------------------------------------------------------
function AppDetail({ app, onNavigate }: { app: AppShowcase; onNavigate: (v: View) => void }) {
  const accent = app.accent === 'rose' ? ROSE : GREEN
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const heroImg = app.screenshots[0]?.image

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${accent}28, transparent 65%)` }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
          <button onClick={() => onNavigate('home')} className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white/60 hover:text-white">
            <Icon name="chevronRight" size={16} className="rotate-180" /> All apps
          </button>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <AppIcon app={app} size={88} />
                <div className="text-left">
                  <Badge variant="secondary" className="border-white/10 bg-white/5 text-[10px] text-white/60">{app.category}</Badge>
                  <h1 className="mt-1.5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{app.name}</h1>
                  <p className="mt-1 text-base" style={{ color: accent }}>{app.tagline}</p>
                </div>
              </div>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/60 sm:text-lg lg:mx-0">{app.description}</p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                <AppStoreBadge url={app.appStoreUrl} />
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-1"><Icon name="star" size={16} color={GREEN} /><b className="text-white">{app.rating}</b> ({app.ratingCount})</span>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                {app.features.slice(0, 4).map((f) => (
                  <span key={f.title} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                    <Icon name={f.icon} size={13} color={f.color === 'rose' ? ROSE : GREEN} /> {f.title}
                  </span>
                ))}
              </div>
            </div>
            {heroImg && (
              <div className="relative mx-auto w-full max-w-xs">
                <PhoneFrame image={heroImg} alt={`${app.name} — ${app.screenshots[0].title}`} accent={accent} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>Features</div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Everything you need, nothing you don&apos;t</h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {app.features.map((f) => {
            const c = f.color === 'rose' ? ROSE : GREEN
            return (
              <div key={f.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100" style={{ background: `${c}33` }} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: `${c}1a` }}>
                    <Icon name={f.icon} size={22} color={c} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Screenshots */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>Screenshots</div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">See {app.shortName} in action</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {app.screenshots.map((s) => (
              <div key={s.title} className="group">
                <PhoneFrame image={s.image} alt={`${app.name} — ${s.title}`} accent={accent} small />
                <div className="mt-3 px-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent }}>{s.tag}</div>
                  <div className="mt-0.5 text-xs font-semibold leading-tight text-white/80">{s.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>FAQ</div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          {app.faqs.map((f, i) => {
            const isOpen = activeFaq === i
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <button onClick={() => setActiveFaq(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={isOpen}>
                  <span className="text-base font-semibold">{f.q}</span>
                  <Icon name="chevronDown" size={20} color={isOpen ? accent : '#9a9aa3'} className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <div className="px-5 pb-5 text-sm leading-relaxed text-white/70">{f.a}</div>}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 p-8 text-center sm:p-14" style={{ background: `linear-gradient(135deg, ${accent}1a, ${accent === ROSE ? GREEN : ROSE}14)` }}>
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl" style={{ background: `${accent}33` }} />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Get {app.shortName} today</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 sm:text-lg">{app.price} · {app.languagesSupported} languages · no ads, ever.</p>
            <div className="mt-8 flex justify-center"><AppStoreBadge url={app.appStoreUrl} /></div>
          </div>
        </div>
      </section>
    </>
  )
}

function PhoneFrame({ image, alt, accent, small = false }: { image: string; alt: string; accent: string; small?: boolean }) {
  return (
    <div
      className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.4rem] bg-black p-1.5"
      style={{ boxShadow: small
        ? `0 20px 50px -20px rgba(0,0,0,.85), 0 0 0 1px #1c1c20, 0 0 0 5px #0a0a0c, 0 0 0 6px rgba(255,255,255,.06)`
        : `0 40px 90px -30px rgba(0,0,0,.9), 0 0 0 2px #1c1c20, 0 0 0 12px #0a0a0c, 0 0 0 13px rgba(255,255,255,.08), 0 0 80px ${accent}22` }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">
        <img src={image} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute left-1/2 top-2.5 h-1.5 w-20 -translate-x-1/2 rounded-full bg-black/80" />
      </div>
    </div>
  )
}

// -----------------------------------------------------------------
// Legal page renderer — header, table of contents, sections,
// internal cross-references and a "Questions?" CTA.
// -----------------------------------------------------------------
function LegalPage({ doc, onNavigate }: { doc: LegalDoc; onNavigate: (v: View) => void }) {
  const toc = doc.sections.filter((s) => s.heading)
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-white/10 pb-8">
        <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: GREEN }}>Legal Center</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{doc.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/50">
          <span>Last updated: <span className="text-white/80">{doc.lastUpdated}</span></span>
          <span>·</span>
          <span>Effective: <span className="text-white/80">{doc.effective}</span></span>
        </div>
      </header>

      <p className="mt-8 text-base leading-relaxed text-white/70">{doc.intro}</p>

      {/* Table of contents */}
      {toc.length > 0 && (
        <nav aria-label="Table of contents" className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50">
            <Icon name="layers" size={16} color={GREEN} /> Table of contents
          </div>
          <ol className="grid gap-1.5 sm:grid-cols-2">
            {toc.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    const el = document.getElementById(s.id)
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    if (typeof window !== 'undefined') window.history.replaceState(null, '', `#${s.id}`)
                  }}
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="mt-10 space-y-10">
        {doc.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-24">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">{sec.heading}</h2>
            {sec.body && <p className="mt-3 text-[15px] leading-relaxed text-white/70">{sec.body}</p>}
            {sec.list && (
              <ul className="mt-4 space-y-2">
                {sec.list.map((li, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-white/70">
                    <Icon name="check" size={18} color={GREEN} className="mt-1 shrink-0" /><span>{li}</span>
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
            {sec.related && sec.related.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40">Related:</span>
                {sec.related.map((l) => (
                  <LegalChip key={l.view} link={l} onNavigate={onNavigate} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* End-of-document related links */}
      {doc.related && doc.related.length > 0 && (
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-base font-bold">Related documents</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {doc.related.map((l) => (
              <LegalChip key={l.view} link={l} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      )}

      {/* "Questions?" CTA */}
      <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 p-7 sm:p-9" style={{ background: `linear-gradient(135deg, ${GREEN}14, ${ROSE}10)` }}>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">Questions?</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
              If anything in this document is unclear, or you would like to exercise a right described here, our team is happy to help. We aim to respond within 1–2 business days.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.03]"
          >
            <Icon name="mail" size={18} color="#000" /> Contact us
          </button>
        </div>
      </div>
    </article>
  )
}

// Internal cross-reference chip used inside legal documents.
function LegalChip({ link, onNavigate }: { link: LegalLink; onNavigate: (v: View) => void }) {
  const target = getLegalDoc(link.view)
  const color = target?.view === 'contact' ? ROSE : GREEN
  return (
    <button
      onClick={() => onNavigate(link.view)}
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold text-white/80 transition-colors hover:text-white"
      style={{ borderColor: `${color}40`, background: `${color}12` }}
    >
      <Icon name="chevronRight" size={12} color={color} />
      {link.label}
    </button>
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
    setErrors({}); setStatus('loading'); setServerMsg('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (!res.ok) {
        setStatus('error'); setServerMsg(json.error || 'Something went wrong.')
        if (json.fields) setErrors(json.fields)
      } else {
        setStatus('success'); setServerMsg(json.message || 'Message sent!'); form.reset()
      }
    } catch {
      setStatus('error'); setServerMsg('Network error. Please try again or email support@loxavo.site.')
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="text-center">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: ROSE }}>Contact Us</div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">We&apos;d love to hear from you</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
          Questions, feedback, billing issues or partnership ideas — reach out and our team will respond within 1–2 business days.
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            <ContactCard icon="mail" title="Email" value={STUDIO.email} href={`mailto:${STUDIO.email}`} color={GREEN} />
            <ContactCard icon="shield" title="Privacy" value={STUDIO.privacyEmail} href={`mailto:${STUDIO.privacyEmail}`} color={ROSE} />
            <ContactCard icon="clock" title="Response time" value="1–2 business days" color={GREEN} />
            <ContactCard icon="grid" title="Our apps" value={`${APPS.filter(a => a.available).length} live apps`} color={ROSE} />
          </div>
        </div>
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8" noValidate>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" error={errors.name}><Input name="name" placeholder="Jane Doe" className="h-12 border-white/10 bg-white/5" /></Field>
              <Field label="Email" error={errors.email}><Input name="email" type="email" placeholder="jane@example.com" className="h-12 border-white/10 bg-white/5" /></Field>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Subject" error={errors.subject}><Input name="subject" placeholder="How can we help?" className="h-12 border-white/10 bg-white/5" /></Field>
              <Field label="Which app?">
                <Select name="app" defaultValue="general">
                  <SelectTrigger className="h-12 border-white/10 bg-white/5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General / Studio</SelectItem>
                    {APPS.filter(a => a.available).map(a => <SelectItem key={a.slug} value={a.slug}>{a.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Category">
                <Select name="category" defaultValue="general">
                  <SelectTrigger className="h-12 border-white/10 bg-white/5"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {['general','support','billing','privacy','feedback','partnership'].map(c => <SelectItem key={c} value={c} className="capitalize">{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Message" error={errors.message}><Textarea name="message" placeholder="Tell us more…" rows={5} className="resize-none border-white/10 bg-white/5" /></Field>
            </div>
            {status === 'success' && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border p-4" style={{ borderColor: `${GREEN}44`, background: `${GREEN}11` }}>
                <Icon name="check" size={20} color={GREEN} className="mt-0.5 shrink-0" /><p className="text-sm text-white/80">{serverMsg}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                <Icon name="x" size={20} color="#f87171" className="mt-0.5 shrink-0" /><p className="text-sm text-white/80">{serverMsg}</p>
              </div>
            )}
            <Button type="submit" disabled={status === 'loading'} className="mt-6 h-12 w-full rounded-2xl text-base font-bold text-black" style={{ background: `linear-gradient(95deg, ${ROSE}, ${GREEN})` }}>
              {status === 'loading' ? 'Sending…' : (<><Icon name="send" size={18} className="mr-2" />Send message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, value, href, color }: { icon: string; title: string; value: string; href?: string; color: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${color}1a` }}><Icon name={icon} size={20} color={color} /></span>
      <div><div className="text-xs font-semibold uppercase tracking-wider text-white/40">{title}</div><div className="text-sm font-bold">{value}</div></div>
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
// Footer
// -----------------------------------------------------------------
function Footer({ onNavigate }: { onNavigate: (v: View) => void }) {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <StudioMark size={40} /><span className="text-base font-extrabold tracking-tight">{STUDIO.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">{STUDIO.description}</p>
            <div className="mt-5 flex gap-3">
              <a href={STUDIO.twitterUrl} aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors hover:text-white"><Icon name="twitter" size={18} /></a>
              <a href={STUDIO.instagramUrl} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors hover:text-white"><Icon name="instagram" size={18} /></a>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/40">Apps</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {APPS.map(a => <li key={a.slug}><button onClick={() => onNavigate(a.slug)} className="text-white/70 hover:text-white">{a.name}</button></li>)}
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-wider text-white/40">Legal</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LEGAL_NAV.map((item) => (
                <li key={item.view}>
                  <button onClick={() => onNavigate(item.view)} className="text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {STUDIO.name}. All rights reserved.</p>
          <p className="text-xs text-white/40">Building premium, privacy-first apps for iPhone</p>
        </div>
      </div>
    </footer>
  )
}

// -----------------------------------------------------------------
// Page
// -----------------------------------------------------------------
export default function Home() {
  const [view, setView] = useState<View>(() => {
    if (typeof window === 'undefined') return 'home'
    const h = window.location.hash.replace('#', '')
    return h || 'home'
  })

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '')
      setView(h || 'home')
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // SEO + document title per active view. For legal views this also updates
  // meta description, canonical link and Open Graph / Twitter tags so each
  // legal document has its own SEO metadata. (Hash-based routing keeps the
  // existing architecture intact; the head is updated client-side on view
  // change, which modern crawlers handle.)
  useEffect(() => {
    const app = getApp(view)
    const legal = getLegalDoc(view)
    let title: string
    let description: string
    let canonical: string

    if (app) {
      title = `${app.name} — ${app.tagline} | ${STUDIO.name}`
      description = app.description
      canonical = `${STUDIO.url}/#${app.slug}`
    } else if (legal) {
      title = legal.seo.title
      description = legal.seo.description
      canonical = legal.seo.canonical
    } else if (view === 'contact') {
      title = `Contact Us — ${STUDIO.name}`
      description = 'Contact Loxavo for support, feedback, billing or partnership inquiries about any application published by Loxavo. We respond within 1–2 business days.'
      canonical = `${STUDIO.url}/#contact`
    } else {
      title = `${STUDIO.name} — ${STUDIO.tagline} | Premium iOS Apps`
      description = STUDIO.description
      canonical = `${STUDIO.url}/`
    }

    document.title = title
    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:url', canonical, true)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:card', 'summary_large_image')
    setCanonical(canonical)

    // Next.js App Router re-applies the static <title> from metadata during
    // hydration, which can overwrite a title set synchronously on a deep-link
    // load (e.g. /#privacy). Re-apply on the next frame so the per-view title
    // persists past hydration.
    requestAnimationFrame(() => {
      document.title = title
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [view])

  const navigate = useCallback((v: View) => {
    setView(v)
    if (typeof window !== 'undefined') window.location.hash = v === 'home' ? '' : v
  }, [])

  const currentApp = isAppSlug(view) ? getApp(view) : undefined

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <NavBar view={view} onNavigate={navigate} />
      <main className="flex-1">
        <div className={view === 'home' ? 'block' : 'hidden'}><ShowcaseHome onNavigate={navigate} /></div>
        {currentApp && (
          <div className={view === currentApp.slug ? 'block' : 'hidden'}>
            <AppDetail app={currentApp} onNavigate={navigate} />
          </div>
        )}
        {/* Legal Center — all documents rendered and kept in the DOM for SEO. */}
        {LEGAL_DOCS.map((doc) => (
          <div key={doc.view} className={view === doc.view ? 'block' : 'hidden'}>
            <LegalPage doc={doc} onNavigate={navigate} />
          </div>
        ))}
        <div className={view === 'contact' ? 'block' : 'hidden'}><Contact /></div>
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

// --- SEO head helpers (no routing change; updates DOM meta on view switch) ---
function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
