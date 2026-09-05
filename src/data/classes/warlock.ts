import type { CharacterClass } from '../../types/srd'

export const warlock: CharacterClass = {
  id: 'warlock',
  name: { en: 'Warlock', it: 'Warlock' },
  description: { en: 'A wielder of magic derived from a bargain with an extraplanar entity.', it: 'Un utilizzatore di una magia derivata da un patto con un’entità extraplanare.' },
  hitDie: 8,
  primaryAbility: ['cha'],
  savingThrowProficiencies: ['wis', 'cha'],
  armorProficiencies: ['Light armor'],
  weaponProficiencies: ['Simple weapons'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'] },
  casterProgression: 'pact',
  spellcastingAbility: 'cha',
  startingEquipment: [
    {
      options: [
        { itemIds: ['light-crossbow'], label: { en: 'A light crossbow and 20 bolts', it: 'Una balestra leggera e 20 quadrelli' } },
        { itemIds: ['dagger'], label: { en: 'Any simple weapon', it: 'Un’arma semplice a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['component-pouch'], label: { en: 'A component pouch', it: 'Una sacca dei componenti' } },
        { itemIds: ['arcane-focus-crystal'], label: { en: 'An arcane focus', it: 'Un focus arcano' } },
      ],
    },
    {
      options: [
        { itemIds: ['scholars-pack'], label: { en: "A scholar's pack", it: 'Uno zaino da studioso' } },
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack", it: 'Uno zaino da esploratore di dungeon' } },
      ],
    },
    { options: [{ itemIds: ['leather', 'dagger', 'dagger', 'dagger'], label: { en: 'Leather armor, any simple weapon, and two daggers', it: 'Un’armatura di cuoio, un’arma semplice a scelta e due pugnali' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'warlock-otherworldly-patron',
      level: 1,
      name: { en: 'Otherworldly Patron', it: 'Patrono Ultraterreno' },
      description: {
        en: 'You strike a bargain with an otherworldly being, such as the Fiend, granting features at 1st, 6th, 10th, and 14th level.',
        it: 'Stringi un patto con un essere ultraterreno, come il Demone, che concede capacità al 1°, 6°, 10° e 14° livello.',
      },
    },
    {
      id: 'warlock-pact-magic',
      level: 1,
      name: { en: 'Pact Magic', it: 'Magia del Patto' },
      description: {
        en: 'You know 2 cantrips and 2 1st-level spells from the warlock spell list. You have a small number of spell slots (per the Warlock table) that are all the same level and recharge on a short or long rest. Charisma is your spellcasting ability; you can use an arcane focus as a spellcasting focus.',
        it: 'Conosci 2 trucchetti e 2 incantesimi di 1° livello dalla lista incantesimi del warlock. Hai un piccolo numero di slot incantesimo (secondo la tabella del Warlock) tutti dello stesso livello, che si ricaricano con un riposo breve o lungo. Il Carisma è la tua caratteristica da incantatore; puoi usare un focus arcano come focus da incantatore.',
      },
    },
    {
      id: 'warlock-fiend-dark-ones-blessing',
      level: 1,
      name: { en: "The Fiend: Dark One's Blessing", it: 'Il Demone: Benedizione del Signore Oscuro' },
      description: {
        en: 'When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum 1).',
        it: 'Quando riduci una creatura ostile a 0 punti ferita, ottieni punti ferita temporanei pari al tuo modificatore di Carisma + il tuo livello da warlock (minimo 1).',
      },
    },
    {
      id: 'warlock-eldritch-invocations',
      level: 2,
      name: { en: 'Eldritch Invocations', it: 'Invocazioni Occulte' },
      description: {
        en: 'You gain two eldritch invocations of your choice (e.g. Agonizing Blast, Armor of Shadows, Devil’s Sight), gaining more at higher levels as shown on the Warlock table.',
        it: 'Ottieni due invocazioni occulte a tua scelta (es. Esplosione Agonizzante, Armatura d’Ombra, Vista del Diavolo), ottenendone altre ai livelli superiori come mostrato nella tabella del Warlock.',
      },
    },
    {
      id: 'warlock-pact-boon',
      level: 3,
      name: { en: 'Pact Boon', it: 'Dono del Patto' },
      description: {
        en: 'Your patron grants a boon of your choice: Pact of the Chain (a special familiar via find familiar), Pact of the Blade (summon a magical melee pact weapon), or Pact of the Tome (a Book of Shadows with three extra cantrips from any spell list).',
        it: 'Il tuo patrono concede un dono a tua scelta: Patto della Catena (un famiglio speciale tramite trova famiglio), Patto della Lama (evoca un’arma da mischia magica del patto), oppure Patto del Tomo (un Libro delle Ombre con tre trucchetti extra da qualsiasi lista incantesimi).',
      },
    },
    {
      id: 'warlock-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
  ],
}
