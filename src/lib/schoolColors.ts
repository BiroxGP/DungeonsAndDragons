/** One accent color per school of magic, shared by SchoolIcon and SpellIcon. */
export const SCHOOL_COLORS: Record<string, string> = {
  abjuration: '#2563eb',
  conjuration: '#d97706',
  divination: '#0891b2',
  enchantment: '#db2777',
  evocation: '#dc2626',
  illusion: '#7c3aed',
  necromancy: '#44403c',
  transmutation: '#ca8a04',
}

/** Normalizes "Divination (ritual)" etc. down to a lookup key like "divination". */
export function schoolKey(school: string): string {
  return school.split(' ')[0].toLowerCase()
}
