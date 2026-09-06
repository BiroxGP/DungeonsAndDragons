import { SCHOOL_COLORS, schoolKey } from '../lib/schoolColors'
import { SPELL_GLYPHS } from '../lib/spellGlyphs'
import { getSpellGlyphKey } from '../data/spellGlyphMap'

/** Used only if a spell id is somehow missing from SPELL_GLYPH_MAP. */
const SCHOOL_DEFAULT_GLYPH: Record<string, string> = {
  abjuration: 'shield',
  conjuration: 'portal',
  divination: 'eyeOpen',
  enchantment: 'chain',
  evocation: 'fire',
  illusion: 'mask',
  necromancy: 'skull',
  transmutation: 'spiral',
}

interface SpellIconProps {
  spellId: string
  school: string
  size?: number
  className?: string
}

export function SpellIcon({ spellId, school, size = 28, className }: SpellIconProps) {
  const key = schoolKey(school)
  const color = SCHOOL_COLORS[key]
  const glyphKey = getSpellGlyphKey(spellId) ?? SCHOOL_DEFAULT_GLYPH[key]
  const glyph = glyphKey ? SPELL_GLYPHS[glyphKey] : undefined
  if (!color || !glyph) return null
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} role="img" aria-label={school}>
      <circle cx="12" cy="12" r="12" fill={color} />
      <g fill="white">{glyph}</g>
    </svg>
  )
}
