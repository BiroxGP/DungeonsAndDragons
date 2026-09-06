import { SPELL_GLYPHS } from '../lib/spellGlyphs'
import { getSubraceIcon } from '../data/subraceIconMap'

interface SubraceIconProps {
  subraceId: string
  size?: number
  className?: string
}

export function SubraceIcon({ subraceId, size = 24, className }: SubraceIconProps) {
  const entry = getSubraceIcon(subraceId)
  if (!entry) return null
  const glyph = SPELL_GLYPHS[entry.glyph]
  if (!glyph) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} role="img" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill={entry.color} />
      <g fill="white">{glyph}</g>
    </svg>
  )
}
