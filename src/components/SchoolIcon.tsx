import type { ReactNode } from 'react'

const SCHOOLS: Record<string, { color: string; path: ReactNode }> = {
  abjuration: {
    color: '#2563eb',
    path: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z" />,
  },
  conjuration: {
    color: '#d97706',
    path: (
      <g fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M12 3 21 18H3z" />
        <path d="M12 21 3 6h18z" />
      </g>
    ),
  },
  divination: {
    color: '#0891b2',
    path: (
      <g fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="2.6" fill="white" stroke="none" />
      </g>
    ),
  },
  enchantment: {
    color: '#db2777',
    path: <path d="M12 21S4 14 4 8.5C4 5 6.5 3 9 3c1.5 0 2.6 1 3 2 .4-1 1.5-2 3-2 2.5 0 5 2 5 5.5C20 14 12 21 12 21Z" />,
  },
  evocation: {
    color: '#dc2626',
    path: <path d="M12 2C9 6 6 9.5 6 14a6 6 0 0 0 12 0c0-2-1-3.6-2-5 .2 1.3-.3 2.2-1 2.7C15.6 8 12 2 12 2Z" />,
  },
  illusion: {
    color: '#7c3aed',
    path: (
      <g fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round">
        <path d="M4 9c0-3.5 3.5-6 8-6s8 2.5 8 6c0 4-2 8-8 11-6-3-8-7-8-11Z" />
        <path d="M8.5 10.5 10 9m5.5 1.5L14 9m-5.5 5.5c1 1 4 1 5 0" />
      </g>
    ),
  },
  necromancy: {
    color: '#44403c',
    path: (
      <g>
        <path d="M12 3C7.6 3 5 6 5 10c0 2.3 1 4 2.5 5.2V18h2v-2h1v2h3v-2h1v2h2v-2.8C18 14 19 12.3 19 10c0-4-2.6-7-7-7Z" />
        <circle cx="9" cy="10" r="1.6" fill="#44403c" />
        <circle cx="15" cy="10" r="1.6" fill="#44403c" />
      </g>
    ),
  },
  transmutation: {
    color: '#ca8a04',
    path: (
      <g fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 10a6.5 6.5 0 0 1 11-4.2" />
        <path d="M15.5 3.5 17 6l-2.7.6" />
        <path d="M18 14a6.5 6.5 0 0 1-11 4.2" />
        <path d="M8.5 20.5 7 18l2.7-.6" />
      </g>
    ),
  },
}

/** Normalizes "Divination (ritual)" etc. down to a lookup key like "divination". */
function schoolKey(school: string): string {
  return school.split(' ')[0].toLowerCase()
}

interface SchoolIconProps {
  school: string
  size?: number
  className?: string
}

export function SchoolIcon({ school, size = 28, className }: SchoolIconProps) {
  const entry = SCHOOLS[schoolKey(school)]
  if (!entry) return null
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={school}
    >
      <circle cx="12" cy="12" r="12" fill={entry.color} />
      <g fill="white">{entry.path}</g>
    </svg>
  )
}
