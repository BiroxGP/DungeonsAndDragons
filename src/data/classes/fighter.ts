import type { CharacterClass } from '../../types/srd'

export const fighter: CharacterClass = {
  id: 'fighter',
  name: { en: 'Fighter' },
  description: { en: 'A master of martial combat, skilled with a variety of weapons and armor.' },
  hitDie: 10,
  primaryAbility: ['str', 'dex'],
  savingThrowProficiencies: ['str', 'con'],
  armorProficiencies: ['All armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: {
    count: 2,
    from: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
  },
  casterProgression: 'none',
  startingEquipment: [
    {
      options: [
        { itemIds: ['chain-mail'], label: { en: 'Chain mail' } },
        { itemIds: ['leather', 'longbow'], label: { en: 'Leather armor, longbow, and 20 arrows' } },
      ],
    },
    {
      options: [
        { itemIds: ['longsword', 'shield'], label: { en: 'A martial weapon and a shield' } },
        { itemIds: ['longsword', 'battleaxe'], label: { en: 'Two martial weapons' } },
      ],
    },
    {
      options: [
        { itemIds: ['light-crossbow'], label: { en: 'A light crossbow and 20 bolts' } },
        { itemIds: ['handaxe', 'handaxe'], label: { en: 'Two handaxes' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack" } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack" } },
      ],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'fighter-fighting-style',
      level: 1,
      name: { en: 'Fighting Style' },
      description: {
        en: 'You adopt a style of fighting: Archery (+2 to ranged attack rolls), Defense (+1 AC while wearing armor), Dueling (+2 damage with a one-handed melee weapon and no other weapons), Great Weapon Fighting (reroll 1s and 2s on two-handed melee weapon damage dice), Protection (impose disadvantage on an attack against an ally within 5 feet, using your reaction and a shield), or Two-Weapon Fighting (add your ability modifier to the second attack’s damage).',
      },
    },
    {
      id: 'fighter-second-wind',
      level: 1,
      name: { en: 'Second Wind' },
      description: { en: 'As a bonus action, regain 1d10 + your fighter level hit points. Usable once per short or long rest.' },
    },
    {
      id: 'fighter-action-surge',
      level: 2,
      name: { en: 'Action Surge' },
      description: { en: 'On your turn, you can take one additional action. Usable once per short or long rest (twice per rest at 17th level).' },
    },
    {
      id: 'fighter-martial-archetype',
      level: 3,
      name: { en: 'Martial Archetype' },
      description: {
        en: 'You choose an archetype, such as Champion, granting features at 3rd, 7th, 10th, 15th, and 18th level.',
      },
    },
    {
      id: 'fighter-champion-improved-critical',
      level: 3,
      name: { en: 'Champion: Improved Critical' },
      description: { en: 'Your weapon attacks score a critical hit on a roll of 19 or 20.' },
    },
    {
      id: 'fighter-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 6th, 8th, 12th, 14th, 16th, and 19th level.' },
    },
    {
      id: 'fighter-extra-attack',
      level: 5,
      name: { en: 'Extra Attack' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn (three attacks at 11th level, four at 20th).' },
    },
  ],
}
