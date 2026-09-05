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
    name: { en: 'Acolyte', it: 'Accolito' },
    description: {
      en: 'You have spent your life in the service of a temple to a specific god or pantheon, acting as an intermediary between the realm of the holy and the mortal world.',
      it: 'Hai passato la tua vita al servizio di un tempio dedicato a uno specifico dio o pantheon, fungendo da intermediario tra il regno del sacro e il mondo mortale.',
    },
    skillProficiencies: ['insight', 'religion'],
    toolProficiencies: [],
    languages: 2,
    equipment: {
      en: 'A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp.',
      it: 'Un simbolo sacro, un libro di preghiere o una ruota di preghiera, 5 bastoncini di incenso, paramenti, un set di abiti comuni e una borsa contenente 15 mo.',
    },
    feature: {
      id: 'acolyte-shelter-of-the-faithful',
      name: { en: 'Shelter of the Faithful', it: 'Rifugio dei Fedeli' },
      description: {
        en: 'You command the respect of those who share your faith, and you can perform its religious ceremonies. You and your companions can expect free healing and care at a temple, shrine, or other established presence of your faith (though you must provide material components for spells yourself), and those who share your religion support you, alone, at a modest lifestyle.',
        it: 'Comandi il rispetto di chi condivide la tua fede, e puoi officiare le sue cerimonie religiose. Tu e i tuoi compagni potete aspettarvi cure e assistenza gratuite presso un tempio, un santuario o un’altra presenza consolidata della tua fede (sebbene tu debba procurarti da solo le componenti materiali per gli incantesimi), e chi condivide la tua religione ti sostiene, da solo, con un tenore di vita modesto.',
      },
    },
    source: 'SRD5.1',
  },
]

export const BACKGROUNDS_BY_ID: Record<string, Background> = Object.fromEntries(BACKGROUNDS.map((b) => [b.id, b]))

export function getBackground(id: string): Background | undefined {
  return BACKGROUNDS_BY_ID[id]
}
