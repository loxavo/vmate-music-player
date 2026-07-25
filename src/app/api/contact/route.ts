import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const RATE_WINDOW_MS = 60_000
const RATE_MAX = 5
const hits = new Map<string, { count: number; first: number }>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const rec = hits.get(ip)
  if (!rec || now - rec.first > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, first: now })
    return false
  }
  rec.count++
  return rec.count > RATE_MAX
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254
}

const CATEGORIES = ['general', 'support', 'billing', 'privacy', 'feedback', 'partnership'] as const

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429 }
    )
  }

  const data = body as Record<string, unknown>
  const name = String(data?.name ?? '').trim()
  const email = String(data?.email ?? '').trim().toLowerCase()
  const subject = String(data?.subject ?? '').trim()
  const message = String(data?.message ?? '').trim()
  const categoryRaw = String(data?.category ?? 'general').trim()
  const category = (CATEGORIES as readonly string[]).includes(categoryRaw) ? categoryRaw : 'general'
  const app = String(data?.app ?? 'general').trim().slice(0, 40)
  const website = String(data?.website ?? '').trim()
  if (website) {
    return NextResponse.json({ ok: true, id: 'spam' })
  }

  const errors: Record<string, string> = {}
  if (name.length < 2 || name.length > 80) errors.name = 'Please enter your name (2–80 characters).'
  if (!isEmail(email)) errors.email = 'Please enter a valid email address.'
  if (subject.length < 3 || subject.length > 120) errors.subject = 'Please enter a subject (3–120 characters).'
  if (message.length < 10 || message.length > 4000) errors.message = 'Please enter a message (10–4000 characters).'

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: 'Validation failed.', fields: errors }, { status: 422 })
  }

  try {
    const record = await db.contactMessage.create({
      data: { name, email, subject, message, category, app },
    })
    return NextResponse.json({
      ok: true,
      id: record.id,
      message: "Thanks for reaching out! We'll get back to you within 1–2 business days.",
    })
  } catch (err) {
    console.error('Contact form DB error:', err)
    return NextResponse.json(
      { error: 'Something went wrong while sending your message. Please try again or email support@vmate.app.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    endpoint: 'Loxavo Studios contact form',
    method: 'POST',
    fields: ['name', 'email', 'subject', 'message', 'category', 'app'],
    categories: CATEGORIES,
  })
}
