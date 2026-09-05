import type { CharacterClass } from '../../types/srd'

export const barbarian: CharacterClass = {
  id: 'barbarian',
  name: { en: 'Barbarian' },
  description: {
    en: 'A fierce warrior of primitive background who can enter a battle rage.',
  },
  hitDie: 12,
  primaryAbility: ['str'],
  savingThrowProficiencies: ['str', 'con'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: {
    count: 2,
    from: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
  },
  casterProgression: 'none',
  startingEquipment: [
    {
      options: [
        { itemIds: ['greataxe'], label: { en: 'A greataxe' } },
        { itemIds: ['longsword'], label: { en: 'Any martial melee weapon' } },
      ],
    },
    {
      options: [
        { itemIds: ['handaxe', 'handaxe'], label: { en: 'Two handaxes' } },
        { itemIds: ['spear'], label: { en: 'Any simple weapon' } },
      ],
    },
    {
      options: [{ itemIds: ['explorers-pack', 'javelin', 'javelin', 'javelin', 'javelin'], label: { en: "An explorer's pack and four javelins" } }],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'barbarian-rage',
      level: 1,
      name: { en: 'Rage' },
      description: {
        en: 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, if you aren’t wearing heavy armor: you have advantage on Strength checks and Strength saving throws; when you make a melee weapon attack using Strength, you gain a bonus to the damage roll (+2 at 1st level); and you have resistance to bludgeoning, piercing, and slashing damage. You can’t cast spells or concentrate on them while raging. Your rage lasts 1 minute and ends early if you’re knocked unconscious or if your turn ends without attacking a hostile creature or taking damage since your last turn; you can also end it as a bonus action. You can rage twice at 1st level, and must finish a long rest to regain uses once you run out.',
      },
    },
    {
      id: 'barbarian-unarmored-defense',
      level: 1,
      name: { en: 'Unarmored Defense' },
      description: {
        en: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
      },
    },
    {
      id: 'barbarian-reckless-attack',
      level: 2,
      name: { en: 'Reckless Attack' },
      description: {
        en: 'When you make your first attack on your turn, you can decide to attack recklessly, giving you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.',
      },
    },
    {
      id: 'barbarian-danger-sense',
      level: 2,
      name: { en: 'Danger Sense' },
      description: {
        en: 'You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells, as long as you aren’t blinded, deafened, or incapacitated.',
      },
    },
    {
      id: 'barbarian-primal-path',
      level: 3,
      name: { en: 'Primal Path' },
      description: {
        en: 'You choose a path that shapes the nature of your rage, such as the Path of the Berserker, granting features at 3rd, 6th, 10th, and 14th level.',
      },
    },
    {
      id: 'barbarian-berserker-frenzy',
      level: 3,
      name: { en: 'Path of the Berserker: Frenzy' },
      description: {
        en: 'When you rage, you can go into a frenzy. While frenzied, you can make a single melee weapon attack as a bonus action on each of your turns. When your rage ends, you suffer one level of exhaustion.',
      },
    },
    {
      id: 'barbarian-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: {
        en: 'You can increase one ability score by 2, or two ability scores by 1 each (max 20). This repeats at 8th, 12th, 16th, and 19th level.',
      },
    },
    {
      id: 'barbarian-extra-attack',
      level: 5,
      name: { en: 'Extra Attack' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
    },
    {
      id: 'barbarian-fast-movement',
      level: 5,
      name: { en: 'Fast Movement' },
      description: { en: 'Your speed increases by 10 feet while you aren’t wearing heavy armor.' },
    },
  ],
}
