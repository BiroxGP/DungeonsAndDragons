import type { CharacterClass } from '../../types/srd'

export const cleric: CharacterClass = {
  id: 'cleric',
  name: { en: 'Cleric', it: 'Chierico' },
  description: {
    en: 'A priestly champion who wields divine magic in service of a higher power.',
    it: 'Un campione sacerdotale che impugna la magia divina al servizio di un potere superiore.',
  },
  hitDie: 8,
  primaryAbility: ['wis'],
  savingThrowProficiencies: ['wis', 'cha'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
  weaponProficiencies: ['Simple weapons'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['history', 'insight', 'medicine', 'persuasion', 'religion'] },
  casterProgression: 'full',
  spellcastingAbility: 'wis',
  startingEquipment: [
    {
      options: [
        { itemIds: ['mace'], label: { en: 'A mace', it: 'Una mazza' } },
        { itemIds: ['warhammer'], label: { en: 'A warhammer (if proficient)', it: 'Un martello da guerra (se competente)' } },
      ],
    },
    {
      options: [
        { itemIds: ['scale-mail'], label: { en: 'Scale mail', it: 'Un’armatura a scaglie' } },
        { itemIds: ['leather'], label: { en: 'Leather armor', it: 'Un’armatura di cuoio' } },
        { itemIds: ['chain-mail'], label: { en: 'Chain mail (if proficient)', it: 'Una cotta di maglia (se competente)' } },
      ],
    },
    {
      options: [
        { itemIds: ['light-crossbow'], label: { en: 'A light crossbow and 20 bolts', it: 'Una balestra leggera e 20 quadrelli' } },
        { itemIds: ['dagger'], label: { en: 'Any simple weapon', it: 'Un’arma semplice a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['priests-pack'], label: { en: "A priest's pack", it: 'Uno zaino da sacerdote' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    {
      options: [{ itemIds: ['shield', 'holy-symbol-amulet'], label: { en: 'A shield and a holy symbol', it: 'Uno scudo e un simbolo sacro' } }],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'cleric-spellcasting',
      level: 1,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You know 3 cantrips from the cleric spell list. You prepare a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum one), choosing from the full cleric spell list, and can change your prepared list after a long rest. Wisdom is your spellcasting ability. You can use a holy symbol as a spellcasting focus.',
        it: 'Conosci 3 trucchetti dalla lista incantesimi del chierico. Prepari un numero di incantesimi da chierico pari al tuo modificatore di Saggezza + il tuo livello da chierico (minimo uno), scegliendo dall’intera lista incantesimi del chierico, e puoi cambiare la lista preparata dopo un riposo lungo. La Saggezza è la tua caratteristica da incantatore. Puoi usare un simbolo sacro come focus da incantatore.',
      },
    },
    {
      id: 'cleric-divine-domain',
      level: 1,
      name: { en: 'Divine Domain', it: 'Dominio Divino' },
      description: {
        en: 'You choose a domain related to your deity, such as the Life domain, granting domain spells (always prepared) and other features at 1st level, additional Channel Divinity options at 2nd, and more at 6th, 8th, and 17th level.',
        it: 'Scegli un dominio legato alla tua divinità, come il dominio della Vita, che concede incantesimi di dominio (sempre preparati) e altre capacità al 1° livello, ulteriori opzioni di Incanalare Divinità al 2°, e altro ancora al 6°, 8° e 17°.',
      },
    },
    {
      id: 'cleric-life-bonus-proficiency',
      level: 1,
      name: { en: 'Life Domain: Bonus Proficiency & Disciple of Life', it: 'Dominio della Vita: Competenza Bonus e Discepolo della Vita' },
      description: {
        en: 'You gain proficiency with heavy armor. Whenever you use a spell of 1st level or higher to restore hit points to a creature, it regains additional hit points equal to 2 + the spell’s level.',
        it: 'Ottieni competenza con le armature pesanti. Ogni volta che usi un incantesimo di 1° livello o superiore per ripristinare punti ferita a una creatura, questa recupera punti ferita aggiuntivi pari a 2 + il livello dell’incantesimo.',
      },
    },
    {
      id: 'cleric-channel-divinity',
      level: 2,
      name: { en: 'Channel Divinity', it: 'Incanalare Divinità' },
      description: {
        en: 'You can channel divine energy to fuel magical effects: Turn Undead (undead within 30 feet must succeed on a Wisdom save or flee) and an effect from your domain. You regain your use(s) on a short or long rest; you gain a second use at 6th level.',
        it: 'Puoi incanalare energia divina per alimentare effetti magici: Ricacciare i Non Morti (i non morti entro 9 metri devono superare un tiro salvezza su Saggezza o fuggire) e un effetto dal tuo dominio. Recuperi gli usi con un riposo breve o lungo; ottieni un secondo uso al 6° livello.',
      },
    },
    {
      id: 'cleric-preserve-life',
      level: 2,
      name: { en: 'Life Domain: Preserve Life', it: 'Dominio della Vita: Preservare la Vita' },
      description: {
        en: 'As an action, you present your holy symbol and restore hit points equal to five times your cleric level, divided among creatures within 30 feet, restoring no creature above half its hit point maximum. Can’t target undead or constructs.',
        it: 'Come azione, presenti il tuo simbolo sacro e ripristini punti ferita pari a cinque volte il tuo livello da chierico, divisi tra le creature entro 9 metri, senza portare nessuna creatura sopra la metà del suo massimo dei punti ferita. Non puoi bersagliare non morti o costrutti.',
      },
    },
    {
      id: 'cleric-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'cleric-destroy-undead',
      level: 5,
      name: { en: 'Destroy Undead', it: 'Distruggere Non Morti' },
      description: {
        en: 'When an undead fails its save against your Turn Undead, it is instantly destroyed if its challenge rating is at or below a threshold (1/2 at 5th level, rising at higher levels).',
        it: 'Quando un non morto fallisce il tiro salvezza contro la tua capacità di Ricacciare i Non Morti, viene distrutto all’istante se il suo grado di sfida è pari o inferiore a una soglia (1/2 al 5° livello, che sale ai livelli successivi).',
      },
    },
  ],
}
