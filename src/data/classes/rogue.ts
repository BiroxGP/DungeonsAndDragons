import type { CharacterClass } from '../../types/srd'

export const rogue: CharacterClass = {
  id: 'rogue',
  name: { en: 'Rogue', it: 'Ladro' },
  description: { en: 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.', it: 'Un furfante che usa furtività e astuzia per superare ostacoli e nemici.' },
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
  startingEquipment: [
    {
      options: [
        { itemIds: ['rapier'], label: { en: 'A rapier', it: 'Uno stocco' } },
        { itemIds: ['shortsword'], label: { en: 'A shortsword', it: 'Una spada corta' } },
      ],
    },
    {
      options: [
        { itemIds: ['shortbow'], label: { en: 'A shortbow and quiver of 20 arrows', it: 'Un arco corto e una faretra con 20 frecce' } },
        { itemIds: ['shortsword'], label: { en: 'A shortsword', it: 'Una spada corta' } },
      ],
    },
    {
      options: [
        { itemIds: ['burglars-pack'], label: { en: "A burglar's pack", it: 'Uno zaino da scassinatore' } },
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack", it: 'Uno zaino da esploratore di dungeon' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    {
      options: [
        { itemIds: ['leather', 'dagger', 'dagger', 'thieves-tools'], label: { en: 'Leather armor, two daggers, and thieves’ tools', it: 'Un’armatura di cuoio, due pugnali e gli arnesi da scasso' } },
      ],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'rogue-expertise',
      level: 1,
      name: { en: 'Expertise', it: 'Maestria' },
      description: {
        en: 'Choose two of your skill proficiencies (or one skill and thieves’ tools); your proficiency bonus is doubled for checks using them. Choose two more at 6th level.',
        it: 'Scegli due delle tue competenze nelle abilità (oppure un’abilità e gli arnesi da scasso); il tuo bonus di competenza è raddoppiato per le prove che le usano. Scegline altre due al 6° livello.',
      },
    },
    {
      id: 'rogue-sneak-attack',
      level: 1,
      name: { en: 'Sneak Attack', it: 'Attacco Furtivo' },
      description: {
        en: 'Once per turn, deal an extra 1d6 damage to a creature you hit with an attack if you have advantage on the roll, using a finesse or ranged weapon. You don’t need advantage if another enemy of the target is within 5 feet of it and you don’t have disadvantage. The extra damage increases with level (2d6 at 3rd, up to 10d6 at 20th).',
        it: 'Una volta per turno, infliggi 1d6 danno extra a una creatura che colpisci con un attacco se hai vantaggio al tiro, usando un’arma con finesse o a distanza. Non ti serve il vantaggio se un altro nemico del bersaglio è entro 1,5 metri da esso e tu non hai svantaggio. Il danno extra aumenta con il livello (2d6 al 3°, fino a 10d6 al 20°).',
      },
    },
    {
      id: 'rogue-thieves-cant',
      level: 1,
      name: { en: "Thieves' Cant", it: 'Gergo dei Ladri' },
      description: { en: 'A secret mix of dialect, jargon, and code letting you hide messages in normal conversation.', it: 'Una miscela segreta di dialetto, gergo e codice che ti permette di nascondere messaggi in una conversazione normale.' },
    },
    {
      id: 'rogue-cunning-action',
      level: 2,
      name: { en: 'Cunning Action', it: 'Azione Astuta' },
      description: { en: 'You can take a bonus action on each of your turns to Dash, Disengage, or Hide.', it: 'Puoi intraprendere un’azione bonus in ognuno dei tuoi turni per Scattare, Disimpegnarti o Nasconderti.' },
    },
    {
      id: 'rogue-roguish-archetype',
      level: 3,
      name: { en: 'Roguish Archetype', it: 'Archetipo Ladresco' },
      description: { en: 'You choose an archetype, such as Thief, granting features at 3rd, 9th, 13th, and 17th level.', it: 'Scegli un archetipo, come il Ladro, che concede capacità al 3°, 9°, 13° e 17° livello.' },
    },
    {
      id: 'rogue-thief-fast-hands',
      level: 3,
      name: { en: 'Thief: Fast Hands', it: 'Ladro: Mani Veloci' },
      description: {
        en: 'You can use the bonus action from Cunning Action to make a Sleight of Hand check, use thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.',
        it: 'Puoi usare l’azione bonus di Azione Astuta per effettuare una prova di Rapidità di Mano, usare gli arnesi da scasso per disinnescare una trappola o aprire una serratura, oppure intraprendere l’azione Usa un Oggetto.',
      },
    },
    {
      id: 'rogue-thief-second-story-work',
      level: 3,
      name: { en: 'Thief: Second-Story Work', it: 'Ladro: Scalatore Esperto' },
      description: { en: 'Climbing no longer costs extra movement, and running jump distance increases by your Dexterity modifier.', it: 'Arrampicarsi non costa più movimento extra, e la distanza di un salto con rincorsa aumenta del tuo modificatore di Destrezza.' },
    },
    {
      id: 'rogue-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 10th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 10°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'rogue-uncanny-dodge',
      level: 5,
      name: { en: 'Uncanny Dodge', it: 'Schivata Prodigiosa' },
      description: { en: 'When an attacker you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.', it: 'Quando un attaccante che puoi vedere ti colpisce con un attacco, puoi usare la tua reazione per dimezzare il danno dell’attacco contro di te.' },
    },
  ],
}
