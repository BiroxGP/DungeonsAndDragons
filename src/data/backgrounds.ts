import type { Background } from '../types/srd'

/**
 * SRD 5.1 publishes exactly one sample background (Acolyte) — Criminal, Folk
 * Hero, Noble, Sage, etc. are PHB-only and not part of the open content.
 * The "Customizing a Background" rule (SRD 5.1, p.59) lets a player rebuild
 * this background's proficiencies/equipment/feature to fit a different concept.
 */
export const BACKGROUNDS: Background[] = [
  {
    id: 'acolyte',
    name: { en: 'Acolyte' },
    description: {
      en: 'You have spent your life in the service of a temple to a specific god or pantheon, acting as an intermediary between the realm of the holy and the mortal world.',
    },
    skillProficiencies: ['insight', 'religion'],
    toolProficiencies: [],
    languages: 2,
    equipment: {
      en: 'A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp.',
    },
    feature: {
      id: 'acolyte-shelter-of-the-faithful',
      name: { en: 'Shelter of the Faithful' },
      description: {
        en: 'You command the respect of those who share your faith, and you can perform its religious ceremonies. You and your companions can expect free healing and care at a temple, shrine, or other established presence of your faith (though you must provide material components for spells yourself), and those who share your religion support you, alone, at a modest lifestyle.',
      },
    },
    source: 'SRD5.1',
  },
]

export const BACKGROUNDS_BY_ID: Record<string, Background> = Object.fromEntries(BACKGROUNDS.map((b) => [b.id, b]))

export function getBackground(id: string): Background | undefined {
  return BACKGROUNDS_BY_ID[id]
}
