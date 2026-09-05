import type { CharacterClass } from '../../types/srd'

export const bard: CharacterClass = {
  id: 'bard',
  name: { en: 'Bard' },
  description: {
    en: 'An inspiring magician whose power echoes the music of creation.',
  },
  hitDie: 8,
  primaryAbility: ['cha'],
  savingThrowProficiencies: ['dex', 'cha'],
  armorProficiencies: ['Light armor'],
  weaponProficiencies: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
  toolProficiencies: ['Three musical instruments of your choice'],
  skillChoices: {
    count: 3,
    from: [
      'acrobatics', 'animalHandling', 'arcana', 'athletics', 'deception', 'history', 'insight',
      'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion',
      'religion', 'sleightOfHand', 'stealth', 'survival',
    ],
  },
  casterProgression: 'full',
  spellcastingAbility: 'cha',
  startingEquipment: [
    {
      options: [
        { itemIds: ['rapier'], label: { en: 'A rapier' } },
        { itemIds: ['longsword'], label: { en: 'A longsword' } },
        { itemIds: ['dagger'], label: { en: 'Any simple weapon' } },
      ],
    },
    {
      options: [
        { itemIds: ['diplomats-pack'], label: { en: "A diplomat's pack" } },
        { itemIds: ['entertainers-pack'], label: { en: "An entertainer's pack" } },
      ],
    },
    {
      options: [
        { itemIds: ['musical-instrument-lute'], label: { en: 'A lute' } },
        { itemIds: ['musical-instrument-lute'], label: { en: 'Any other musical instrument' } },
      ],
    },
    {
      options: [{ itemIds: ['leather', 'dagger'], label: { en: 'Leather armor and a dagger' } }],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'bard-spellcasting',
      level: 1,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You know 2 cantrips and 4 1st-level spells from the bard spell list, gaining more as shown on the Bard table. Charisma is your spellcasting ability. You can cast a bard spell you know as a ritual if it has the ritual tag, and use a musical instrument as a spellcasting focus.',
      },
    },
    {
      id: 'bard-bardic-inspiration',
      level: 1,
      name: { en: 'Bardic Inspiration' },
      description: {
        en: 'As a bonus action, choose one creature other than yourself within 60 feet who can hear you. That creature gains a Bardic Inspiration die (a d6) it can add to one ability check, attack roll, or saving throw within the next 10 minutes. Usable a number of times equal to your Charisma modifier (minimum once), regained on a long rest. The die becomes a d8 at 5th level, d10 at 10th, and d12 at 15th.',
      },
    },
    {
      id: 'bard-jack-of-all-trades',
      level: 2,
      name: { en: 'Jack of All Trades' },
      description: { en: 'You can add half your proficiency bonus, rounded down, to any ability check that doesn’t already include your proficiency bonus.' },
    },
    {
      id: 'bard-song-of-rest',
      level: 2,
      name: { en: 'Song of Rest' },
      description: { en: 'During a short rest, if you or allies who hear your performance regain hit points by spending Hit Dice, each of those creatures regains an extra 1d6 hit points (more at higher levels).' },
    },
    {
      id: 'bard-college',
      level: 3,
      name: { en: 'Bard College' },
      description: { en: 'You delve into a bard college, such as the College of Lore, granting features at 3rd, 6th, and 14th level.' },
    },
    {
      id: 'bard-lore-bonus-proficiencies',
      level: 3,
      name: { en: 'College of Lore: Bonus Proficiencies' },
      description: { en: 'You gain proficiency with three skills of your choice.' },
    },
    {
      id: 'bard-lore-cutting-words',
      level: 3,
      name: { en: 'College of Lore: Cutting Words' },
      description: {
        en: 'When a creature you can see within 60 feet makes an attack roll, ability check, or damage roll, you can use your reaction to expend a Bardic Inspiration die and subtract the roll from the creature’s result.',
      },
    },
    {
      id: 'bard-expertise',
      level: 3,
      name: { en: 'Expertise' },
      description: { en: 'Choose two of your skill proficiencies; your proficiency bonus is doubled for checks using them. Choose two more at 10th level.' },
    },
    {
      id: 'bard-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'bard-font-of-inspiration',
      level: 5,
      name: { en: 'Font of Inspiration' },
      description: { en: 'You regain all expended uses of Bardic Inspiration when you finish a short or long rest.' },
    },
  ],
}
