import type { CharacterClass } from '../../types/srd'

export const wizard: CharacterClass = {
  id: 'wizard',
  name: { en: 'Wizard' },
  description: { en: 'A scholarly magic-user capable of manipulating the structures of reality.' },
  hitDie: 6,
  primaryAbility: ['int'],
  savingThrowProficiencies: ['int', 'wis'],
  armorProficiencies: [],
  weaponProficiencies: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'] },
  casterProgression: 'full',
  spellcastingAbility: 'int',
  startingEquipment: [
    {
      options: [
        { itemIds: ['quarterstaff'], label: { en: 'A quarterstaff' } },
        { itemIds: ['dagger'], label: { en: 'A dagger' } },
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
        { itemIds: ['scholars-pack'], label: { en: "A scholar's pack" } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack" } },
      ],
    },
    { options: [{ itemIds: ['spellbook'], label: { en: 'A spellbook' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'wizard-spellcasting',
      level: 1,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You know 3 cantrips from the wizard spell list. Your spellbook holds six 1st-level wizard spells of your choice; you prepare a number of spells from it equal to your Intelligence modifier + your wizard level (minimum one). Intelligence is your spellcasting ability; you can use an arcane focus as a spellcasting focus. Each time you gain a level, you can add two more wizard spells to your spellbook for free.',
      },
    },
    {
      id: 'wizard-arcane-recovery',
      level: 1,
      name: { en: 'Arcane Recovery' },
      description: {
        en: 'Once per day when you finish a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up), none 6th level or higher.',
      },
    },
    {
      id: 'wizard-arcane-tradition',
      level: 2,
      name: { en: 'Arcane Tradition' },
      description: {
        en: 'You choose a school of magic, such as School of Evocation, granting features at 2nd, 6th, 10th, and 14th level.',
      },
    },
    {
      id: 'wizard-evocation-savant',
      level: 2,
      name: { en: 'School of Evocation: Savant & Sculpt Spells' },
      description: {
        en: 'The cost to copy an evocation spell into your spellbook is halved. When you cast an evocation spell affecting other creatures, you can choose a number of them equal to 1 + the spell’s level who automatically succeed on their save and take no damage on a successful save.',
      },
    },
    {
      id: 'wizard-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'wizard-potent-cantrip',
      level: 6,
      name: { en: 'School of Evocation: Potent Cantrip' },
      description: { en: 'When a creature succeeds on a save against your damaging cantrip, it still takes half damage but suffers no additional effect.' },
    },
  ],
}
