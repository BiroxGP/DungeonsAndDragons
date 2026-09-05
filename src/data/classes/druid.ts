import type { CharacterClass } from '../../types/srd'

export const druid: CharacterClass = {
  id: 'druid',
  name: { en: 'Druid' },
  description: {
    en: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
  },
  hitDie: 8,
  primaryAbility: ['wis'],
  savingThrowProficiencies: ['int', 'wis'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields (non-metal)'],
  weaponProficiencies: ['Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Sickles', 'Slings', 'Spears'],
  toolProficiencies: ['Herbalism kit'],
  skillChoices: {
    count: 2,
    from: ['arcana', 'animalHandling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
  },
  casterProgression: 'full',
  spellcastingAbility: 'wis',
  startingEquipment: [
    {
      options: [
        { itemIds: ['shield'], label: { en: 'A wooden shield' } },
        { itemIds: ['spear'], label: { en: 'Any simple weapon' } },
      ],
    },
    {
      options: [
        { itemIds: ['scimitar'], label: { en: 'A scimitar' } },
        { itemIds: ['club'], label: { en: 'Any simple melee weapon' } },
      ],
    },
    {
      options: [
        {
          itemIds: ['leather', 'explorers-pack', 'druidic-focus-mistletoe'],
          label: { en: 'Leather armor, an explorer’s pack, and a druidic focus' },
        },
      ],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'druid-druidic',
      level: 1,
      name: { en: 'Druidic' },
      description: { en: 'You know Druidic, the secret language of druids, and can use it to leave hidden messages.' },
    },
    {
      id: 'druid-spellcasting',
      level: 1,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You know 2 cantrips from the druid spell list. You prepare a number of druid spells equal to your Wisdom modifier + your druid level (minimum one). Wisdom is your spellcasting ability. You can use a druidic focus as a spellcasting focus.',
      },
    },
    {
      id: 'druid-wild-shape',
      level: 2,
      name: { en: 'Wild Shape' },
      description: {
        en: 'As an action, you can magically assume the shape of a beast you have seen before, usable twice (regained on a short or long rest). At 2nd level you can transform into a beast of CR 1/4 or lower with no flying or swimming speed; at 4th level CR 1/2 with no flying speed; at 8th level CR 1. You can stay transformed for hours equal to half your druid level (rounded down).',
      },
    },
    {
      id: 'druid-circle',
      level: 2,
      name: { en: 'Druid Circle' },
      description: {
        en: 'You choose to identify with a circle of druids, such as the Circle of the Land, granting features at 2nd, 6th, 10th, and 14th level.',
      },
    },
    {
      id: 'druid-land-bonus-cantrip',
      level: 2,
      name: { en: 'Circle of the Land: Bonus Cantrip & Natural Recovery' },
      description: {
        en: 'You learn one additional druid cantrip. During a short rest, you can recover expended spell slots with a combined level equal to or less than half your druid level (rounded up), none 6th level or higher; usable once per long rest.',
      },
    },
    {
      id: 'druid-circle-spells',
      level: 3,
      name: { en: 'Circle of the Land: Circle Spells' },
      description: {
        en: 'Choosing a land type (arctic, coast, desert, forest, grassland, mountain, or swamp) grants you always-prepared circle spells at 3rd, 5th, 7th, and 9th level.',
      },
    },
    {
      id: 'druid-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
  ],
}
