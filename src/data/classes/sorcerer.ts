import type { CharacterClass } from '../../types/srd'

export const sorcerer: CharacterClass = {
  id: 'sorcerer',
  name: { en: 'Sorcerer', it: 'Stregone' },
  description: { en: 'A spellcaster who draws on inherent magic from a gift or bloodline.', it: 'Un incantatore che attinge a una magia innata proveniente da un dono o da una stirpe.' },
  hitDie: 6,
  primaryAbility: ['cha'],
  savingThrowProficiencies: ['con', 'cha'],
  armorProficiencies: [],
  weaponProficiencies: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'] },
  casterProgression: 'full',
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
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack", it: 'Uno zaino da esploratore di dungeon' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    { options: [{ itemIds: ['dagger', 'dagger'], label: { en: 'Two daggers', it: 'Due pugnali' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'sorcerer-spellcasting',
      level: 1,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You know 4 cantrips and 2 1st-level spells from the sorcerer spell list, gaining more as shown on the Sorcerer table. Charisma is your spellcasting ability; you can use an arcane focus as a spellcasting focus.',
        it: 'Conosci 4 trucchetti e 2 incantesimi di 1° livello dalla lista incantesimi dello stregone, ottenendone altri come mostrato nella tabella dello Stregone. Il Carisma è la tua caratteristica da incantatore; puoi usare un focus arcano come focus da incantatore.',
      },
    },
    {
      id: 'sorcerer-sorcerous-origin',
      level: 1,
      name: { en: 'Sorcerous Origin', it: 'Origine Stregonesca' },
      description: {
        en: 'You choose a sorcerous origin, such as Draconic Bloodline, granting features at 1st, 6th, 14th, and 18th level.',
        it: 'Scegli un’origine stregonesca, come la Discendenza Draconica, che concede capacità al 1°, 6°, 14° e 18° livello.',
      },
    },
    {
      id: 'sorcerer-draconic-ancestry',
      level: 1,
      name: { en: 'Draconic Bloodline: Dragon Ancestor & Resilience', it: 'Discendenza Draconica: Antenato Draconico e Resilienza' },
      description: {
        en: 'You choose a dragon type determining a damage type. Your hit point maximum increases by 1 (and again each sorcerer level), and your AC without armor equals 13 + your Dexterity modifier.',
        it: 'Scegli un tipo di drago che determina un tipo di danno. Il tuo massimo dei punti ferita aumenta di 1 (e ancora a ogni livello da stregone), e la tua CA senza armatura è pari a 13 + il tuo modificatore di Destrezza.',
      },
    },
    {
      id: 'sorcerer-font-of-magic',
      level: 2,
      name: { en: 'Font of Magic', it: 'Fonte di Magia' },
      description: {
        en: 'You gain sorcery points (equal to your sorcerer level) usable to create spell slots (Creating Spell Slots table) or converted from unused spell slots, as a bonus action.',
        it: 'Ottieni punti stregoneria (pari al tuo livello da stregone) utilizzabili per creare slot incantesimo (tabella Creazione di Slot Incantesimo) o convertiti da slot incantesimo non usati, come azione bonus.',
      },
    },
    {
      id: 'sorcerer-metamagic',
      level: 3,
      name: { en: 'Metamagic', it: 'Metamagia' },
      description: {
        en: 'You learn two Metamagic options (of Careful, Distant, Empowered, Extended, Heightened, Quickened, Subtle, or Twinned Spell), each letting you spend sorcery points to alter a spell as you cast it. You learn another at 10th and 17th level.',
        it: 'Impari due opzioni di Metamagia (tra Incantesimo Accorto, Distante, Potenziato, Prolungato, Elevato, Rapido, Sottile o Gemellato), ciascuna delle quali ti permette di spendere punti stregoneria per alterare un incantesimo mentre lo lanci. Ne impari un’altra al 10° e al 17° livello.',
      },
    },
    {
      id: 'sorcerer-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
  ],
}
