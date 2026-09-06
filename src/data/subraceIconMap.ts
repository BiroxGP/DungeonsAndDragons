/** Per-subrace icon: a color plus a glyph key from lib/spellGlyphs.tsx. */
export const SUBRACE_ICON_MAP: Record<string, { color: string; glyph: string }> = {
  // Dwarf
  'hill-dwarf': { color: '#57534e', glyph: 'shield' },
  'forgeheart-dwarf': { color: '#c2410c', glyph: 'hammer' },
  'frostkin-dwarf': { color: '#0284c7', glyph: 'ice' },

  // Elf
  'high-elf': { color: '#3b82f6', glyph: 'book' },
  'starlit-elf': { color: '#4338ca', glyph: 'star' },
  'marsh-elf': { color: '#0d9488', glyph: 'wave' },

  // Halfling
  'lightfoot-halfling': { color: '#16a34a', glyph: 'footprints' },
  'hearth-halfling': { color: '#b45309', glyph: 'hearth' },
  'wanderer-halfling': { color: '#7c5e2a', glyph: 'compass' },

  // Human
  'wayfarer-human': { color: '#475569', glyph: 'footprints' },
  'artisan-human': { color: '#92400e', glyph: 'hammer' },

  // Dragonborn
  'desert-dragonborn': { color: '#ca8a04', glyph: 'fire' },
  'storm-dragonborn': { color: '#334155', glyph: 'lightning' },

  // Gnome
  'rock-gnome': { color: '#b45309', glyph: 'key' },
  'deep-root-gnome': { color: '#4d7c0f', glyph: 'tree' },
  'fairground-gnome': { color: '#be185d', glyph: 'mask' },

  // Half-Elf
  'wildborn-half-elf': { color: '#15803d', glyph: 'leaf' },
  'cityborn-half-elf': { color: '#7e22ce', glyph: 'speechBubble' },

  // Half-Orc
  'frontier-half-orc': { color: '#9a3412', glyph: 'shield' },
  'warband-half-orc': { color: '#7f1d1d', glyph: 'fist' },

  // Tiefling
  'abyss-touched-tiefling': { color: '#581c87', glyph: 'skull' },
  'old-blood-tiefling': { color: '#a16207', glyph: 'gem' },
}

export function getSubraceIcon(subraceId: string) {
  return SUBRACE_ICON_MAP[subraceId]
}
