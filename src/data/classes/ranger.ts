import type { CharacterClass } from '../../types/srd'

export const ranger: CharacterClass = {
  id: 'ranger',
  name: { en: 'Ranger' },
  description: { en: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.' },
  hitDie: 10,
  primaryAbility: ['dex', 'wis'],
  savingThrowProficiencies: ['str', 'dex'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: {
    count: 3,
    from: ['animalHandling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
  },
  casterProgression: 'half',
  spellcastingAbility: 'wis',
  startingEquipment: [
    {
      options: [
        { itemIds: ['scale-mail'], label: { en: 'Scale mail' } },
        { itemIds: ['leather'], label: { en: 'Leather armor' } },
      ],
    },
    {
      options: [
        { itemIds: ['shortsword', 'shortsword'], label: { en: 'Two shortswords' } },
        { itemIds: ['spear', 'spear'], label: { en: 'Two simple melee weapons' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack" } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack" } },
      ],
    },
    { options: [{ itemIds: ['longbow'], label: { en: 'A longbow and a quiver of 20 arrows' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'ranger-favored-enemy',
      level: 1,
      name: { en: 'Favored Enemy' },
      description: {
        en: 'Choose a type of favored enemy. You have advantage on Wisdom (Survival) checks to track them and Intelligence checks to recall information about them, and learn one of their languages. Choose an additional favored enemy at 6th and 14th level.',
      },
    },
    {
      id: 'ranger-natural-explorer',
      level: 1,
      name: { en: 'Natural Explorer' },
      description: {
        en: 'Choose a favored terrain. You double your proficiency bonus on related Intelligence/Wisdom checks, and gain travel benefits (no difficult terrain slowdown, can’t get lost except magically, stay alert while engaged in other tasks, move stealthily alone, forage double food, learn more when tracking). Choose additional terrain at 6th and 10th level.',
      },
    },
    {
      id: 'ranger-fighting-style',
      level: 2,
      name: { en: 'Fighting Style' },
      description: { en: 'You adopt a style: Archery, Defense, Dueling, or Two-Weapon Fighting (see Fighter).' },
    },
    {
      id: 'ranger-spellcasting',
      level: 2,
      name: { en: 'Spellcasting' },
      description: {
        en: 'You know 2 1st-level ranger spells, gaining more as shown on the Ranger table. Wisdom is your spellcasting ability.',
      },
    },
    {
      id: 'ranger-archetype',
      level: 3,
      name: { en: 'Ranger Archetype' },
      description: { en: 'You choose an archetype, such as the Hunter, granting features at 3rd, 7th, 11th, and 15th level.' },
    },
    {
      id: 'ranger-hunters-prey',
      level: 3,
      name: { en: 'Hunter: Hunter’s Prey' },
      description: {
        en: 'Choose one: Colossus Slayer (extra 1d8 damage once per turn to a creature below its hit point maximum), Giant Killer (reaction attack against a Large+ creature that hits or misses you within 5 feet), or Horde Breaker (make an extra attack against a different creature within 5 feet of the original target).',
      },
    },
    {
      id: 'ranger-primeval-awareness',
      level: 3,
      name: { en: 'Primeval Awareness' },
      description: {
        en: 'Expend a spell slot as an action to sense whether aberrations, celestials, dragons, elementals, fey, fiends, and undead are present within 1 mile (6 in favored terrain), for 1 minute per spell level.',
      },
    },
    {
      id: 'ranger-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'ranger-extra-attack',
      level: 5,
      name: { en: 'Extra Attack' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
    },
  ],
}
