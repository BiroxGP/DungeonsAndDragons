import type { CharacterClass } from '../../types/srd'

export const rogue: CharacterClass = {
  id: 'rogue',
  name: { en: 'Rogue' },
  description: { en: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.' },
  hitDie: 8,
  primaryAbility: ['dex'],
  savingThrowProficiencies: ['dex', 'int'],
  armorProficiencies: ['Light armor'],
  weaponProficiencies: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
  toolProficiencies: ["Thieves' tools"],
  skillChoices: {
    count: 4,
    from: [
      'acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation',
      'perception', 'performance', 'persuasion', 'sleightOfHand', 'stealth',
    ],
  },
  casterProgression: 'none',
  source: 'SRD5.1',
  traits: [
    {
      id: 'rogue-expertise',
      level: 1,
      name: { en: 'Expertise' },
      description: {
        en: 'Choose two of your skill proficiencies (or one skill and thieves’ tools); your proficiency bonus is doubled for checks using them. Choose two more at 6th level.',
      },
    },
    {
      id: 'rogue-sneak-attack',
      level: 1,
      name: { en: 'Sneak Attack' },
      description: {
        en: 'Once per turn, deal an extra 1d6 damage to a creature you hit with an attack if you have advantage on the roll, using a finesse or ranged weapon. You don’t need advantage if another enemy of the target is within 5 feet of it and you don’t have disadvantage. The extra damage increases with level (2d6 at 3rd, up to 10d6 at 20th).',
      },
    },
    {
      id: 'rogue-thieves-cant',
      level: 1,
      name: { en: "Thieves' Cant" },
      description: { en: 'A secret mix of dialect, jargon, and code letting you hide messages in normal conversation.' },
    },
    {
      id: 'rogue-cunning-action',
      level: 2,
      name: { en: 'Cunning Action' },
      description: { en: 'You can take a bonus action on each of your turns to Dash, Disengage, or Hide.' },
    },
    {
      id: 'rogue-roguish-archetype',
      level: 3,
      name: { en: 'Roguish Archetype' },
      description: { en: 'You choose an archetype, such as Thief, granting features at 3rd, 9th, 13th, and 17th level.' },
    },
    {
      id: 'rogue-thief-fast-hands',
      level: 3,
      name: { en: 'Thief: Fast Hands' },
      description: {
        en: 'You can use the bonus action from Cunning Action to make a Sleight of Hand check, use thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.',
      },
    },
    {
      id: 'rogue-thief-second-story-work',
      level: 3,
      name: { en: 'Thief: Second-Story Work' },
      description: { en: 'Climbing no longer costs extra movement, and running jump distance increases by your Dexterity modifier.' },
    },
    {
      id: 'rogue-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 10th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'rogue-uncanny-dodge',
      level: 5,
      name: { en: 'Uncanny Dodge' },
      description: { en: 'When an attacker you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.' },
    },
  ],
}
