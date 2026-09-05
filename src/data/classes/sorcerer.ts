import type { CharacterClass } from '../../types/srd'

export const sorcerer: CharacterClass = {
  id: 'sorcerer',
  name: { en: 'Sorcerer' },
  description: { en: 'A spellcaster who draws on inherent magic from a gift or bloodline.' },
  hitDie: 6,
  primaryAbility: ['cha'],
  savingThrowProficiencies: ['con', 'cha'],
  armorProficiencies: [],
  weaponProficiencies: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'] },
  casterProgression: 'full',
  spellcastingAbility: 'cha',
  startingEquipment: [
    {
      options: [
        { itemIds: ['light-crossbow'], label: { en: 'A light crossbow and 20 bolts' } },
        { itemIds: ['dagger'], label: { en: 'Any simple weapon' } },
      ],
    },
    {
      options: [
        { itemIds: ['component-pouch'], label: { en: 'A component pouch' } },
        { itemIds: ['arcane-focus-crystal'], label: { en: 'An arcane focus' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack" } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack" } },
      ],
    },
    { options: [{ itemIds: ['dagger', 'dagger'], label: { en: 'Two daggers' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'sorcerer-spellcasting',
      level: 1,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You know 4 cantrips and 2 1st-level spells from the sorcerer spell list, gaining more as shown on the Sorcerer table. Charisma is your spellcasting ability; you can use an arcane focus as a spellcasting focus.',
      },
    },
    {
      id: 'sorcerer-sorcerous-origin',
      level: 1,
      name: { en: 'Sorcerous Origin' },
      description: {
        en: 'You choose a sorcerous origin, such as Draconic Bloodline, granting features at 1st, 6th, 14th, and 18th level.',
      },
    },
    {
      id: 'sorcerer-draconic-ancestry',
      level: 1,
      name: { en: 'Draconic Bloodline: Dragon Ancestor & Resilience' },
      description: {
        en: 'You choose a dragon type determining a damage type. Your hit point maximum increases by 1 (and again each sorcerer level), and your AC without armor equals 13 + your Dexterity modifier.',
      },
    },
    {
      id: 'sorcerer-font-of-magic',
      level: 2,
      name: { en: 'Font of Magic' },
      description: {
        en: 'You gain sorcery points (equal to your sorcerer level) usable to create spell slots (Creating Spell Slots table) or converted from unused spell slots, as a bonus action.',
      },
    },
    {
      id: 'sorcerer-metamagic',
      level: 3,
      name: { en: 'Metamagic' },
      description: {
        en: 'You learn two Metamagic options (of Careful, Distant, Empowered, Extended, Heightened, Quickened, Subtle, or Twinned Spell), each letting you spend sorcery points to alter a spell as you cast it. You learn another at 10th and 17th level.',
      },
    },
    {
      id: 'sorcerer-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
  ],
}
