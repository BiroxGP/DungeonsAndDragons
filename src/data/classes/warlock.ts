import type { CharacterClass } from '../../types/srd'

export const warlock: CharacterClass = {
  id: 'warlock',
  name: { en: 'Warlock' },
  description: { en: 'A wielder of magic derived from a bargain with an extraplanar entity.' },
  hitDie: 8,
  primaryAbility: ['cha'],
  savingThrowProficiencies: ['wis', 'cha'],
  armorProficiencies: ['Light armor'],
  weaponProficiencies: ['Simple weapons'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'] },
  casterProgression: 'pact',
  spellcastingAbility: 'cha',
  source: 'SRD5.1',
  traits: [
    {
      id: 'warlock-otherworldly-patron',
      level: 1,
      name: { en: 'Otherworldly Patron' },
      description: {
        en: 'You strike a bargain with an otherworldly being, such as the Fiend, granting features at 1st, 6th, 10th, and 14th level.',
      },
    },
    {
      id: 'warlock-pact-magic',
      level: 1,
      name: { en: 'Pact Magic' },
      description: {
        en: 'You know 2 cantrips and 2 1st-level spells from the warlock spell list. You have a small number of spell slots (per the Warlock table) that are all the same level and recharge on a short or long rest. Charisma is your spellcasting ability; you can use an arcane focus as a spellcasting focus.',
      },
    },
    {
      id: 'warlock-fiend-dark-ones-blessing',
      level: 1,
      name: { en: "The Fiend: Dark One's Blessing" },
      description: {
        en: 'When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum 1).',
      },
    },
    {
      id: 'warlock-eldritch-invocations',
      level: 2,
      name: { en: 'Eldritch Invocations' },
      description: {
        en: 'You gain two eldritch invocations of your choice (e.g. Agonizing Blast, Armor of Shadows, Devil’s Sight), gaining more at higher levels as shown on the Warlock table.',
      },
    },
    {
      id: 'warlock-pact-boon',
      level: 3,
      name: { en: 'Pact Boon' },
      description: {
        en: 'Your patron grants a boon of your choice: Pact of the Chain (a special familiar via find familiar), Pact of the Blade (summon a magical melee pact weapon), or Pact of the Tome (a Book of Shadows with three extra cantrips from any spell list).',
      },
    },
    {
      id: 'warlock-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.' },
    },
  ],
}
