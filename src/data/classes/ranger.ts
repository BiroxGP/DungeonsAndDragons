import type { CharacterClass } from '../../types/srd'

export const ranger: CharacterClass = {
  id: 'ranger',
  name: { en: 'Ranger', it: 'Ranger' },
  description: { en: 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.', it: 'Un guerriero che usa abilità marziale e magia naturale per combattere le minacce ai margini della civiltà.' },
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
        { itemIds: ['scale-mail'], label: { en: 'Scale mail', it: 'Un’armatura a scaglie' } },
        { itemIds: ['leather'], label: { en: 'Leather armor', it: 'Un’armatura di cuoio' } },
      ],
    },
    {
      options: [
        { itemIds: ['shortsword', 'shortsword'], label: { en: 'Two shortswords', it: 'Due spade corte' } },
        { itemIds: ['spear', 'spear'], label: { en: 'Two simple melee weapons', it: 'Due armi da mischia semplici' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack", it: 'Uno zaino da esploratore di dungeon' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    { options: [{ itemIds: ['longbow'], label: { en: 'A longbow and a quiver of 20 arrows', it: 'Un arco lungo e una faretra con 20 frecce' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'ranger-favored-enemy',
      level: 1,
      name: { en: 'Favored Enemy', it: 'Nemico Prescelto' },
      description: {
        en: 'Choose a type of favored enemy. You have advantage on Wisdom (Survival) checks to track them and Intelligence checks to recall information about them, and learn one of their languages. Choose an additional favored enemy at 6th and 14th level.',
        it: 'Scegli un tipo di nemico prescelto. Hai vantaggio alle prove di Saggezza (Sopravvivenza) per rintracciarlo e alle prove di Intelligenza per ricordare informazioni su di esso, e impari una delle sue lingue. Scegli un nemico prescelto aggiuntivo al 6° e al 14° livello.',
      },
    },
    {
      id: 'ranger-natural-explorer',
      level: 1,
      name: { en: 'Natural Explorer', it: 'Esploratore Naturale' },
      description: {
        en: 'Choose a favored terrain. You double your proficiency bonus on related Intelligence/Wisdom checks, and gain travel benefits (no difficult terrain slowdown, can’t get lost except magically, stay alert while engaged in other tasks, move stealthily alone, forage double food, learn more when tracking). Choose additional terrain at 6th and 10th level.',
        it: 'Scegli un terreno prescelto. Raddoppi il tuo bonus di competenza nelle relative prove di Intelligenza/Saggezza, e ottieni benefici di viaggio (nessun rallentamento da terreno difficile, non ti perdi se non per via magica, resti vigile mentre svolgi altri compiti, ti muovi furtivamente da solo, foraggi il doppio del cibo, impari di più quando rintracci). Scegli un terreno aggiuntivo al 6° e al 10° livello.',
      },
    },
    {
      id: 'ranger-fighting-style',
      level: 2,
      name: { en: 'Fighting Style', it: 'Stile di Combattimento' },
      description: { en: 'You adopt a style: Archery, Defense, Dueling, or Two-Weapon Fighting (see Fighter).', it: 'Adotti uno stile: Arco, Difesa, Duello o Combattere con Due Armi (vedi Guerriero).' },
    },
    {
      id: 'ranger-spellcasting',
      level: 2,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You know 2 1st-level ranger spells, gaining more as shown on the Ranger table. Wisdom is your spellcasting ability.',
        it: 'Conosci 2 incantesimi da ranger di 1° livello, ottenendone altri come mostrato nella tabella del Ranger. La Saggezza è la tua caratteristica da incantatore.',
      },
    },
    {
      id: 'ranger-archetype',
      level: 3,
      name: { en: 'Ranger Archetype', it: 'Archetipo del Ranger' },
      description: { en: 'You choose an archetype, such as the Hunter, granting features at 3rd, 7th, 11th, and 15th level.', it: 'Scegli un archetipo, come il Cacciatore, che concede capacità al 3°, 7°, 11° e 15° livello.' },
    },
    {
      id: 'ranger-hunters-prey',
      level: 3,
      name: { en: 'Hunter: Hunter’s Prey', it: 'Cacciatore: Preda del Cacciatore' },
      description: {
        en: 'Choose one: Colossus Slayer (extra 1d8 damage once per turn to a creature below its hit point maximum), Giant Killer (reaction attack against a Large+ creature that hits or misses you within 5 feet), or Horde Breaker (make an extra attack against a different creature within 5 feet of the original target).',
        it: 'Scegline una: Ammazzacolossi (1d8 danno extra una volta per turno a una creatura sotto il suo massimo dei punti ferita), Ammazzagiganti (attacco di reazione contro una creatura Grande o superiore che ti colpisce o manca entro 1,5 metri), oppure Spezzaorde (effettua un attacco extra contro una creatura diversa entro 1,5 metri dal bersaglio originale).',
      },
    },
    {
      id: 'ranger-primeval-awareness',
      level: 3,
      name: { en: 'Primeval Awareness', it: 'Percezione Primordiale' },
      description: {
        en: 'Expend a spell slot as an action to sense whether aberrations, celestials, dragons, elementals, fey, fiends, and undead are present within 1 mile (6 in favored terrain), for 1 minute per spell level.',
        it: 'Spendi uno slot incantesimo come azione per percepire se aberrazioni, creature celestiali, draghi, elementali, fatati, demoni e non morti sono presenti entro 1,6 km (9,6 km nel terreno prescelto), per 1 minuto per livello dello slot.',
      },
    },
    {
      id: 'ranger-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'ranger-extra-attack',
      level: 5,
      name: { en: 'Extra Attack', it: 'Attacco Extra' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.', it: 'Puoi attaccare due volte, invece di una, ogni volta che intraprendi l’azione Attacco nel tuo turno.' },
    },
  ],
}
