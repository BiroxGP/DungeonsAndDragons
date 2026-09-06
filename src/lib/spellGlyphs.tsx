import type { ReactNode } from 'react'

/**
 * A small library of simple, reusable line-art glyphs (viewBox 0 0 24 24,
 * white strokes/fills). Hand-authored rather than AI-generated (there's no
 * image-gen tool in this session) — deliberately simple so ~65 shapes can
 * cover hundreds of spells and subraces by thematic fit, reused across many
 * entries with a similar flavor. Originally built for SpellIcon, also reused
 * by SubraceIcon.
 */
export const SPELL_GLYPHS: Record<string, ReactNode> = {
  fire: <path d="M12 2C9 6 6 9.5 6 14a6 6 0 0 0 12 0c0-2-1-3.6-2-5 .2 1.3-.3 2.2-1 2.7C15.6 8 12 2 12 2Z" />,
  ice: (
    <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 3v18M4.5 7l15 10M19.5 7l-15 10" />
    </g>
  ),
  lightning: <path d="M13 2 5 14h5l-1 8 8-12h-5z" />,
  acid: <path d="M12 3c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10Z" />,
  poison: (
    <g>
      <path d="M12 4c2.5 3 4 5.5 4 8a4 4 0 0 1-8 0c0-2.5 1.5-5 4-8Z" />
      <circle cx="17" cy="6" r="1.6" />
    </g>
  ),
  thunder: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 3 9 10h3l-1.5 5L16 8h-3z" />
    </g>
  ),
  radiant: (
    <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="3.2" fill="white" stroke="none" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </g>
  ),
  necroticBurst: <path d="M12 3 14 9l6 .5-4.6 4L17 20l-5-3.2L7 20l1.6-6.5L4 9.5 10 9Z" />,
  force: <path d="M12 3 20 12 12 21 4 12Z" fill="none" stroke="white" strokeWidth="1.8" />,
  arrow: (
    <g stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none">
      <path d="M5 19 19 5M19 5h-6M19 5v6" />
    </g>
  ),
  ray: (
    <g stroke="white" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 20 16 8" />
      <path d="M14 4l1.5 2.5L18 8" fill="none" />
    </g>
  ),
  blade: (
    <g stroke="white" strokeWidth="1.7" strokeLinecap="round" fill="none">
      <path d="M6 18 18 6M14 6h4v4" />
    </g>
  ),
  shield: <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z" />,
  ward: <path d="M12 3 20 8v6c0 3.5-3.5 6-8 7-4.5-1-8-3.5-8-7V8Z" fill="none" stroke="white" strokeWidth="1.6" />,
  dome: <path d="M4 18a8 8 0 0 1 16 0Z" />,
  wall: (
    <g fill="none" stroke="white" strokeWidth="1.5">
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M4 12h16M9 6v6M15 12v6" />
    </g>
  ),
  heartPlus: (
    <g>
      <path d="M12 20S4 14 4 8.5C4 5 6.5 3 9 3c1.5 0 2.6 1 3 2 .4-1 1.5-2 3-2 2.5 0 5 2 5 5.5C20 14 12 20 12 20Z" />
    </g>
  ),
  star: <path d="M12 2l2.6 6.6L22 9l-5.4 4.8L18 21l-6-3.8L6 21l1.4-7.2L2 9l7.4-.4Z" />,
  wing: <path d="M3 15c4-1 7-4 8-10 3 4 3 9-1 12-3 2-7 1-7-2Z" />,
  footprints: (
    <g>
      <ellipse cx="8" cy="8" rx="2.2" ry="3" />
      <ellipse cx="16" cy="15" rx="2.2" ry="3" />
    </g>
  ),
  portal: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <ellipse cx="12" cy="12" rx="8" ry="5" />
      <circle cx="12" cy="12" r="1.6" fill="white" stroke="none" />
    </g>
  ),
  spiral: (
    <path
      d="M12 12c1.5 0 2.5-1 2.5-2.3C14.5 8 13 7 11.5 7 9.5 7 8 8.7 8 11c0 3 2.3 5 5.3 5 3.5 0 6.2-2.8 6.2-6.5C19.5 5 16 2 12 2 6.5 2 2.5 6.3 2.5 12"
      fill="none"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  eyeClosed: (
    <g stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none">
      <path d="M3 12s4-5 9-5 9 5 9 5" />
      <path d="M8 15l-1.5 2M16 15l1.5 2M12 16v2.4" />
    </g>
  ),
  eyeOpen: (
    <g fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.6" fill="white" stroke="none" />
    </g>
  ),
  mask: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 9c0-3.5 3.5-6 8-6s8 2.5 8 6c0 4-2 8-8 11-6-3-8-7-8-11Z" />
      <path d="M8.5 10.5 10 9m5.5 1.5L14 9m-5.5 5.5c1 1 4 1 5 0" />
    </g>
  ),
  mirror: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <ellipse cx="12" cy="10" rx="6" ry="8" />
      <path d="M12 18v3" />
    </g>
  ),
  thoughtBubble: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <ellipse cx="13" cy="9" rx="7" ry="5" />
      <circle cx="6" cy="16" r="1.4" />
      <circle cx="4" cy="19.5" r="0.9" />
    </g>
  ),
  chain: (
    <g fill="none" stroke="white" strokeWidth="1.8">
      <ellipse cx="9" cy="8" rx="3.4" ry="2.4" transform="rotate(-30 9 8)" />
      <ellipse cx="15" cy="16" rx="3.4" ry="2.4" transform="rotate(-30 15 16)" />
    </g>
  ),
  lock: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <rect x="5" y="11" width="14" height="10" rx="1.5" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </g>
  ),
  key: (
    <g fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round">
      <circle cx="7" cy="8" r="3.2" />
      <path d="M9.5 10.5 19 20m-4-4 2-2m-5 1 2-2" />
    </g>
  ),
  sleepMoon: (
    <g>
      <path d="M15 3a9 9 0 1 0 6 15 8 8 0 0 1-6-15Z" />
    </g>
  ),
  snowflake: (
    <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 2v20M4 7l16 10M20 7 4 17" />
    </g>
  ),
  web: (
    <g fill="none" stroke="white" strokeWidth="1.3">
      <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="8" />
    </g>
  ),
  cage: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <rect x="5" y="4" width="14" height="16" rx="1" />
      <path d="M9 4v16M15 4v16" />
    </g>
  ),
  book: (
    <g fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M12 6c-2-1.5-5-2-8-1v13c3-1 6-.5 8 1 2-1.5 5-2 8-1V5c-3-1-6-.5-8 1Z" />
      <path d="M12 6v13" />
    </g>
  ),
  compass: (
    <g fill="none" stroke="white" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6z" fill="white" stroke="none" />
    </g>
  ),
  magnifyingGlass: (
    <g fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.5-4.5" />
    </g>
  ),
  scroll: (
    <g fill="none" stroke="white" strokeWidth="1.5">
      <path d="M6 4h9a3 3 0 0 1 3 3v10a3 3 0 0 0 3 3H9a3 3 0 0 1-3-3z" />
      <path d="M9 9h6M9 13h6" />
    </g>
  ),
  bell: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a5 5 0 0 0-5 5c0 5-2 6-2 7h14c0-1-2-2-2-7a5 5 0 0 0-5-5Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </g>
  ),
  lantern: (
    <g fill="none" stroke="white" strokeWidth="1.5">
      <rect x="8" y="6" width="8" height="11" rx="2" />
      <path d="M12 2v4M12 17v5M6 9h2M16 9h2M6 14h2M16 14h2" />
    </g>
  ),
  leaf: <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />,
  tree: (
    <g>
      <path d="M12 2 6 12h3l-4 6h5v4h4v-4h5l-4-6h3z" />
    </g>
  ),
  wave: (
    <g fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
      <path d="M2 10c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
      <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
    </g>
  ),
  windSwirl: (
    <g fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round">
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 14h15a3 3 0 1 1-3 3" />
      <path d="M3 19h9" />
    </g>
  ),
  pawPrint: (
    <g>
      <ellipse cx="12" cy="15" rx="5" ry="4" />
      <circle cx="6" cy="8" r="2" />
      <circle cx="11" cy="5.5" r="2" />
      <circle cx="16" cy="8" r="2" />
      <circle cx="18" cy="12" r="1.7" />
    </g>
  ),
  thornVine: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 20C8 14 8 8 4 3" />
      <path d="M5 16l3-1M6 11l3-1M5.5 6.5l3-1" />
    </g>
  ),
  spores: (
    <g>
      <circle cx="8" cy="9" r="2.4" />
      <circle cx="15" cy="7" r="1.8" />
      <circle cx="16" cy="14" r="2.6" />
      <circle cx="9" cy="16" r="1.6" />
    </g>
  ),
  skull: (
    <g>
      <path d="M12 3C7.6 3 5 6 5 10c0 2.3 1 4 2.5 5.2V18h2v-2h1v2h3v-2h1v2h2v-2.8C18 14 19 12.3 19 10c0-4-2.6-7-7-7Z" />
      <circle cx="9" cy="10" r="1.5" fill="none" stroke="black" strokeOpacity="0.35" strokeWidth="1.4" />
      <circle cx="15" cy="10" r="1.5" fill="none" stroke="black" strokeOpacity="0.35" strokeWidth="1.4" />
    </g>
  ),
  boneHand: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 21v-7M12 14 9 4M12 14l3-10M9 14 6 6M15 14l3-8" />
    </g>
  ),
  tombstone: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <path d="M6 21V11a6 6 0 0 1 12 0v10z" />
      <path d="M10 15h4M12 13v4" />
    </g>
  ),
  ghost: (
    <path d="M12 3a7 7 0 0 0-7 7v11l2.5-2 2 2 2.5-2 2.5 2 2-2 2.5 2V10a7 7 0 0 0-7-7Z" />
  ),
  swirlArrows: (
    <g fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 10a6.5 6.5 0 0 1 11-4.2" />
      <path d="M15.5 3.5 17 6l-2.7.6" />
      <path d="M18 14a6.5 6.5 0 0 1-11 4.2" />
      <path d="M8.5 20.5 7 18l2.7-.6" />
    </g>
  ),
  door: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <path d="M6 21V6a6 6 0 0 1 12 0v15" />
      <path d="M3 21h18" />
    </g>
  ),
  hourglass: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9s10 4 10 9" />
    </g>
  ),
  cloud: <path d="M7 18a4.5 4.5 0 0 1-1-8.9A5.5 5.5 0 0 1 16.5 8 4 4 0 0 1 18 16H7Z" />,
  cloudRain: (
    <g>
      <path d="M7 14a4.5 4.5 0 0 1-1-8.9A5.5 5.5 0 0 1 16.5 4 4 4 0 0 1 18 12H7Z" />
      <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
        <path d="M8 17v3M13 17v3M18 17v3" />
      </g>
    </g>
  ),
  handOpen: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 13V6a1.5 1.5 0 0 1 3 0v5M10 11V4a1.5 1.5 0 0 1 3 0v7M13 11V5a1.5 1.5 0 0 1 3 0v6M16 12v-4a1.5 1.5 0 0 1 3 0v7c0 3.5-2 8-7 8s-7-3-7-6v-3c0-1.5 2-2 3-1" />
    </g>
  ),
  fist: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="6" y="9" width="12" height="9" rx="3" />
      <path d="M9 9V6a1.5 1.5 0 0 1 3 0v3M12 9V5a1.5 1.5 0 0 1 3 0v4M15 9V6a1.5 1.5 0 0 1 3 0v3" />
    </g>
  ),
  crown: <path d="M4 18h16l-1-9-4 3-3-6-3 6-4-3Z" />,
  gem: <path d="M6 9 9 3h6l3 6-8 12Z" fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />,
  coin: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M9.5 10a2.5 2 0 0 1 5 0c0 1.2-1 1.7-2.5 2s-2.5.8-2.5 2a2.5 2 0 0 0 5 0" />
    </g>
  ),
  anchor: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13M7 12H3a9 9 0 0 0 9 9 9 9 0 0 0 9-9h-4M7 12c0 2 2 3 5 3" />
    </g>
  ),
  feather: <path d="M18 3c-6 0-13 5-13 13a5 5 0 0 0 5 5c8 0 13-7 13-13 0-2-2-5-5-5Z" fill="none" stroke="white" strokeWidth="1.5" />,
  speechBubble: (
    <g fill="none" stroke="white" strokeWidth="1.6">
      <path d="M4 5h16v10H9l-4 4v-4H4Z" />
    </g>
  ),
  earSound: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M8 18c-3-2-4-5-3-8a5 5 0 0 1 10-1c1 3-1 5-3 5" />
      <path d="M14 7c2 1 2 5-1 6" />
    </g>
  ),
  rope: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M6 4c3 3 9 3 12 0M6 20c3-3 9-3 12 0M6 4v16M18 4v16" />
    </g>
  ),
  sun: (
    <g stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" fill="white" stroke="none" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2 2M17 17l2 2M19.1 4.9l-2 2M7 17l-2 2" />
    </g>
  ),
  cube: <path d="M12 3 20 7v10l-8 4-8-4V7Z" fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />,
  dice: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <circle cx="9" cy="9" r="1.1" fill="white" stroke="none" />
      <circle cx="15" cy="9" r="1.1" fill="white" stroke="none" />
      <circle cx="12" cy="12" r="1.1" fill="white" stroke="none" />
      <circle cx="9" cy="15" r="1.1" fill="white" stroke="none" />
      <circle cx="15" cy="15" r="1.1" fill="white" stroke="none" />
    </g>
  ),
  bridge: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
      <path d="M3 16c3-4 15-4 18 0M5 16v3M9 16v3M15 16v3M19 16v3" />
    </g>
  ),
  wallOfFire: (
    <g>
      <path d="M4 20c1-3 0-5-1-6 1 0 3 1 3 3 0-3 1-5-1-8 2 1 4 3 4 6 1-2 0-4-1-5 2 0 4 2 4 5 0-2 1-3 1-5 2 1 3 4 2 6 1-1 2-2 2-4 1 2 1 4 0 5-1 1-2 2-2 3z" />
    </g>
  ),
  hearth: (
    <g fill="none" stroke="white" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 12 12 5l8 7M6 11v8h12v-8" />
      <path d="M12 19v-4c-1.5-1-1.5-2.5 0-4 1.5 1.5 1.5 3 0 4" />
    </g>
  ),
  hammer: (
    <g fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5M14.5 6.5 4 17v3h3L17.5 9.5M14.5 6.5l3 3" />
    </g>
  ),
}
