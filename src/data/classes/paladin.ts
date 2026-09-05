import type { CharacterClass } from '../../types/srd'

export const paladin: CharacterClass = {
  id: 'paladin',
  name: { en: 'Paladin' },
  description: { en: 'A holy warrior bound to a sacred oath.' },
  hitDie: 10,
  primaryAbility: ['str', 'cha'],
  savingThrowProficiencies: ['wis', 'cha'],
  armorProficiencies: ['All armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'] },
  casterProgression: 'half',
  spellcastingAbility: 'cha',
  source: 'SRD5.1',
  traits: [
    {
      id: 'paladin-divine-sense',
      level: 1,
      name: { en: 'Divine Sense' },
      description: {
        en: 'As an action, until the end of your next turn you know the location of any celestial, fiend, or undead within 60 feet not behind total cover. Usable 1 + your Charisma modifier times per long rest.',
      },
    },
    {
      id: 'paladin-lay-on-hands',
      level: 1,
      name: { en: 'Lay on Hands' },
      description: {
        en: 'You have a pool of healing power (paladin level × 5 hit points, replenished on a long rest). As an action, touch a creature to restore hit points from the pool, or expend 5 hit points to cure one disease or neutralize one poison. No effect on undead or constructs.',
      },
    },
    {
      id: 'paladin-fighting-style',
      level: 2,
      name: { en: 'Fighting Style' },
      description: { en: 'You adopt a style such as Defense, Dueling, Great Weapon Fighting, or Protection (see Fighter).' },
    },
    {
      id: 'paladin-spellcasting',
      level: 2,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You prepare a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum one). Charisma is your spellcasting ability; you can use a holy symbol as a spellcasting focus.',
      },
    },
    {
      id: 'paladin-divine-smite',
      level: 2,
      name: { en: 'Divine Smite' },
      description: {
        en: 'When you hit with a melee weapon attack, you can expend a spell slot to deal extra radiant damage: 2d8 for a 1st-level slot plus 1d8 per slot level above 1st (max 5d8), +1d8 if the target is undead or a fiend.',
      },
    },
    {
      id: 'paladin-divine-health',
      level: 3,
      name: { en: 'Divine Health' },
      description: { en: 'You are immune to disease.' },
    },
    {
      id: 'paladin-sacred-oath',
      level: 3,
      name: { en: 'Sacred Oath' },
      description: {
        en: 'You swear an oath, such as the Oath of Devotion, granting oath spells (always prepared) and Channel Divinity options at 3rd level and again at 7th, 15th, and 20th level.',
      },
    },
    {
      id: 'paladin-devotion-channel-divinity',
      level: 3,
      name: { en: 'Oath of Devotion: Channel Divinity' },
      description: {
        en: 'Sacred Weapon: as an action, imbue a weapon you hold with positive energy for 1 minute, adding your Charisma modifier to its attack rolls (minimum +1) and making it magical. Turn the Unholy: fiends and undead within 30 feet must succeed on a Wisdom save or be turned for 1 minute or until they take damage.',
      },
    },
    {
      id: 'paladin-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'paladin-extra-attack',
      level: 5,
      name: { en: 'Extra Attack' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
    },
  ],
}
