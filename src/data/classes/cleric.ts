import type { CharacterClass } from '../../types/srd'

export const cleric: CharacterClass = {
  id: 'cleric',
  name: { en: 'Cleric' },
  description: {
    en: 'A priestly champion who wields divine magic in service of a higher power.',
  },
  hitDie: 8,
  primaryAbility: ['wis'],
  savingThrowProficiencies: ['wis', 'cha'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
  weaponProficiencies: ['Simple weapons'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['history', 'insight', 'medicine', 'persuasion', 'religion'] },
  casterProgression: 'full',
  spellcastingAbility: 'wis',
  source: 'SRD5.1',
  traits: [
    {
      id: 'cleric-spellcasting',
      level: 1,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You know 3 cantrips from the cleric spell list. You prepare a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum one), choosing from the full cleric spell list, and can change your prepared list after a long rest. Wisdom is your spellcasting ability. You can use a holy symbol as a spellcasting focus.',
      },
    },
    {
      id: 'cleric-divine-domain',
      level: 1,
      name: { en: 'Divine Domain' },
      description: {
        en: 'You choose a domain related to your deity, such as the Life domain, granting domain spells (always prepared) and other features at 1st level, additional Channel Divinity options at 2nd, and more at 6th, 8th, and 17th level.',
      },
    },
    {
      id: 'cleric-life-bonus-proficiency',
      level: 1,
      name: { en: 'Life Domain: Bonus Proficiency & Disciple of Life' },
      description: {
        en: 'You gain proficiency with heavy armor. Whenever you use a spell of 1st level or higher to restore hit points to a creature, it regains additional hit points equal to 2 + the spell’s level.',
      },
    },
    {
      id: 'cleric-channel-divinity',
      level: 2,
      name: { en: 'Channel Divinity' },
      description: {
        en: 'You can channel divine energy to fuel magical effects: Turn Undead (undead within 30 feet must succeed on a Wisdom save or flee) and an effect from your domain. You regain your use(s) on a short or long rest; you gain a second use at 6th level.',
      },
    },
    {
      id: 'cleric-preserve-life',
      level: 2,
      name: { en: 'Life Domain: Preserve Life' },
      description: {
        en: 'As an action, you present your holy symbol and restore hit points equal to five times your cleric level, divided among creatures within 30 feet, restoring no creature above half its hit point maximum. Can’t target undead or constructs.',
      },
    },
    {
      id: 'cleric-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'cleric-destroy-undead',
      level: 5,
      name: { en: 'Destroy Undead' },
      description: {
        en: 'When an undead fails its save against your Turn Undead, it is instantly destroyed if its challenge rating is at or below a threshold (1/2 at 5th level, rising at higher levels).',
      },
    },
  ],
}
