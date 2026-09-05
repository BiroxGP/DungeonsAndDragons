import type { CharacterClass } from '../../types/srd'

export const monk: CharacterClass = {
  id: 'monk',
  name: { en: 'Monk' },
  description: { en: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.' },
  hitDie: 8,
  primaryAbility: ['dex', 'wis'],
  savingThrowProficiencies: ['str', 'dex'],
  armorProficiencies: [],
  weaponProficiencies: ['Simple weapons', 'Shortswords'],
  toolProficiencies: ["One type of artisan's tools or one musical instrument"],
  skillChoices: { count: 2, from: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'] },
  casterProgression: 'none',
  startingEquipment: [
    {
      options: [
        { itemIds: ['shortsword'], label: { en: 'A shortsword' } },
        { itemIds: ['spear'], label: { en: 'Any simple weapon' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack" } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack" } },
      ],
    },
    { options: [{ itemIds: ['dart'], label: { en: '10 darts' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'monk-unarmored-defense',
      level: 1,
      name: { en: 'Unarmored Defense' },
      description: { en: 'While wearing no armor and no shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.' },
    },
    {
      id: 'monk-martial-arts',
      level: 1,
      name: { en: 'Martial Arts' },
      description: {
        en: 'While unarmed or wielding only monk weapons and not wearing armor or a shield: you can use Dexterity instead of Strength for attack and damage rolls; you can roll a d4 in place of normal unarmed/monk weapon damage (increasing at higher levels); and when you take the Attack action, you can make one unarmed strike as a bonus action.',
      },
    },
    {
      id: 'monk-ki',
      level: 2,
      name: { en: 'Ki' },
      description: {
        en: 'You gain ki points (equal to your monk level) to fuel ki features, starting with Flurry of Blows (spend 1 ki after the Attack action to make two unarmed strikes as a bonus action), Patient Defense (spend 1 ki to Dodge as a bonus action), and Step of the Wind (spend 1 ki to Disengage or Dash as a bonus action, doubling jump distance). Ki save DC = 8 + proficiency bonus + Wisdom modifier.',
      },
    },
    {
      id: 'monk-unarmored-movement',
      level: 2,
      name: { en: 'Unarmored Movement' },
      description: { en: 'Your speed increases by 10 feet while not wearing armor or a shield, increasing further at higher monk levels.' },
    },
    {
      id: 'monk-monastic-tradition',
      level: 3,
      name: { en: 'Monastic Tradition' },
      description: { en: 'You commit to a tradition, such as the Way of the Open Hand, granting features at 3rd, 6th, 11th, and 17th level.' },
    },
    {
      id: 'monk-open-hand-technique',
      level: 3,
      name: { en: 'Way of the Open Hand: Open Hand Technique' },
      description: {
        en: 'Whenever you hit with an attack granted by Flurry of Blows, you can impose one of: the target must succeed on a Dexterity save or be knocked prone; the target must succeed on a Strength save or be pushed 15 feet; or the target can’t take reactions until the end of your next turn.',
      },
    },
    {
      id: 'monk-deflect-missiles',
      level: 3,
      name: { en: 'Deflect Missiles' },
      description: {
        en: 'You can use your reaction to reduce ranged weapon attack damage by 1d10 + your Dexterity modifier + your monk level. If reduced to 0, you can catch the missile and spend 1 ki to make a ranged attack with it.',
      },
    },
    {
      id: 'monk-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
    {
      id: 'monk-slow-fall',
      level: 4,
      name: { en: 'Slow Fall' },
      description: { en: 'You can use your reaction when you fall to reduce falling damage by an amount equal to five times your monk level.' },
    },
    {
      id: 'monk-extra-attack',
      level: 5,
      name: { en: 'Extra Attack' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.' },
    },
    {
      id: 'monk-stunning-strike',
      level: 5,
      name: { en: 'Stunning Strike' },
      description: {
        en: 'When you hit a creature with a melee weapon attack, you can spend 1 ki point to force a Constitution save; on a failure the target is stunned until the end of your next turn.',
      },
    },
  ],
}
