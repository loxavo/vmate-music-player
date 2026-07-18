// Inline SVG icon set for the VMate landing page (stroke-based, currentColor).

const PATHS: Record<string, string> = {
  airplane: 'M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z',
  sliders: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
  quote: 'M7 7h4v6a4 4 0 01-4 4M13 7h4v6a4 4 0 01-4 4',
  wave: 'M3 12h2l2-6 3 14 3-18 3 12 2-2h3',
  folder: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  search: 'M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-4.3-4.3',
  queue: 'M3 6h13M3 12h13M3 18h9M19 14v6l4-3z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  globe: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z',
  play: 'M7 5v14l12-7z',
  apple:
    'M16.5 12.5c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1.9-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8 2.1-1.2 2.9-2.3c.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-4zM14 4.5c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z',
  star: 'M12 3l2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8L6.6 19.6l1-6L3.3 9.4l6-.9z',
  check: 'M20 6L9 17l-5-5',
  chevronDown: 'M6 9l6 6 6-6',
  menu: 'M3 6h18M3 12h18M3 18h18',
  x: 'M18 6L6 18M6 6l12 12',
  mail: 'M3 5h18v14H3zM3 5l9 7 9-7',
  twitter:
    'M22 5.8c-.8.4-1.6.6-2.5.7.9-.5 1.6-1.4 1.9-2.4-.8.5-1.8.9-2.7 1.1A4.2 4.2 0 0011.4 9c0 .3 0 .7.1 1A12 12 0 013 4.7a4.2 4.2 0 001.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.5 3.7 3.4 4.1-.4.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 4 2.9A8.5 8.5 0 012 18.8 12 12 0 008.5 21c7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.6 1.5-1.3 2.1-2.1z',
  instagram:
    'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zM12 8a4 4 0 100 8 4 4 0 000-8zm5-1.5a1 1 0 100 2 1 1 0 000-2z',
  github:
    'M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z',
  lock: 'M5 11h14v10H5zM8 11V7a4 4 0 018 0v4',
  download: 'M12 3v12M7 10l5 5 5-5M5 21h14',
  sparkles:
    'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8z',
  zap: 'M13 2L3 14h8l-1 8 10-12h-8z',
  layers: 'M12 2l9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5',
  send: 'M22 2L11 13M22 2l-7 20-4-9-9-4z',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
  users: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8',
}

export function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  className,
}: {
  name: string
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}) {
  const d = PATHS[name]
  if (!d) return null
  const fillNames = ['play', 'apple', 'star', 'twitter', 'instagram', 'github', 'send']
  const fill = fillNames.includes(name) ? color : 'none'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
