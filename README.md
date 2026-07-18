# VMate Music Player — Landing Page & App Store Creatives

A premium marketing website and App Store screenshot pipeline for **VMate Music Player**, an offline-first iOS music player.

## What's inside

### 1. Landing Page (Next.js 16 + TypeScript + Tailwind + shadcn/ui)
A single-route (`/`) premium dark-themed website with hash-based view switching:

- **Home** — Hero, 9 feature cards, stats, 6 real app screenshots in phone frames, FAQ accordion, final CTA
- **Privacy Policy** — 12 sections (GDPR, CCPA, children, security, retention…)
- **Terms & Conditions** — 14 sections (license, IP, acceptable use, liability…)
- **Purchase & Subscription Terms** — 11 sections (Apple billing, auto-renewal, refunds…)
- **Contact Us** — functional form posting to `/api/contact` (Prisma + SQLite, validation, honeypot, rate limiting)

### 2. App Store Screenshots Pipeline (`/appstore-shots`)
A standalone Python + Playwright pipeline that renders **126 premium App Store screenshots** (18 languages × 7 designs, 1290 × 2796 px) wrapping the real app UI from `/upload` in a device frame with localized ASO headlines and glassmorphic callouts.

```
appstore-shots/
├── locales/copy.py            # Native localized marketing copy (18 languages)
├── templates_base.py          # Shared design system CSS + icons
├── templates_screens.py       # 7 screenshot designs (real app images)
├── render.py                  # Playwright renderer → out/<lang>/shot_<n>.png
├── assets/
│   ├── covers/                # AI-generated album art
│   ├── app-ui/                # Real app screenshots (from /upload)
│   └── fonts/noto/            # Premium Noto/Inter fonts
└── out/                       # Rendered 126 PNGs (gitignored, regenerate with render.py)
```

### 3. SEO + AI-SEO (GEO)
- Comprehensive `metadata` in `src/app/layout.tsx` (title, description, keywords, canonical, robots, OG, Twitter)
- **JSON-LD** structured data: `SoftwareApplication` (offers + aggregateRating + featureList), `Organization`, `WebSite`, `FAQPage`, `BreadcrumbList`
- `src/app/robots.ts` — allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot
- `src/app/sitemap.ts` — dynamic sitemap
- `public/llms.txt` — entity summary for LLM citation
- All legal + FAQ content stays in the DOM (hidden when inactive) so crawlers see it

## Tech Stack
- Next.js 16 (App Router), TypeScript 5, Tailwind CSS 4, shadcn/ui (New York)
- Prisma ORM + SQLite (`prisma/schema.prisma` — `ContactMessage` model)
- Playwright (Python) for screenshot rendering
- z-ai-web-dev-sdk (VLM + image generation) used during asset creation

## Getting Started

### 1. Install dependencies
```bash
bun install            # or npm install
```

### 2. Configure environment
Create `.env` in the project root:
```
DATABASE_URL=file:/home/z/my-project/db/custom.db
```

### 3. Initialize the database
```bash
bun run db:push        # creates db/custom.db from prisma/schema.prisma
```

### 4. Run the dev server
```bash
bun run dev            # http://localhost:3000
```

### 5. (Optional) Re-render App Store screenshots
The 126 rendered PNGs live in `appstore-shots/out/`. To regenerate:
```bash
cd appstore-shots
pip install playwright pillow
playwright install chromium
python3 render.py                  # all 18 languages × 7 shots
python3 render.py en-US            # one language
python3 render.py en-US 1          # one specific shot
```
Requires the real app screenshots in `appstore-shots/assets/app-ui/` (sourced from `/upload`).

## Project Structure
```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx           # SEO metadata + JSON-LD
│   │   ├── page.tsx             # Landing page (all views)
│   │   ├── globals.css
│   │   ├── robots.ts            # robots.txt (AI-bot friendly)
│   │   ├── sitemap.ts           # sitemap.xml
│   │   └── api/contact/route.ts # Contact form endpoint
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   └── landing/icon.tsx     # SVG icon set
│   └── lib/
│       ├── site-config.ts       # Site metadata + nav config
│       ├── legal-content.ts     # Privacy / Terms / Subscription / FAQ
│       ├── features.ts          # Feature + screenshot data
│       └── db.ts                # Prisma client
├── prisma/schema.prisma
├── public/
│   ├── appstore-shots/          # Screenshots + real app UI images
│   ├── llms.txt                 # LLM entity summary
│   ├── manifest.json
│   └── icon.svg
├── appstore-shots/              # Screenshot rendering pipeline
└── upload/                      # Original VMate app screenshots (reference)
```

## Brand
- **Name:** VMate Music Player
- **Tagline:** Your Music. Offline. Anywhere.
- **Colors:** Deep Black `#000000`, Soft Rose Red `#D85B73`, Premium Green `#7BE495`, White `#FFFFFF`
- **Languages:** 18 (English, Arabic, German, French, Spanish, Italian, Portuguese-BR, Dutch, Turkish, Russian, Japanese, Korean, Simplified Chinese, Swedish, Danish, Norwegian, Finnish, Polish)

## License
Marketing site and screenshot pipeline © VMate Labs. Third-party libraries retain their own licenses.
