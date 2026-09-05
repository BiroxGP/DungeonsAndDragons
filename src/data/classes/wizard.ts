import type { CharacterClass } from '../../types/srd'

export const wizard: CharacterClass = {
  id: 'wizard',
  name: { en: 'Wizard', it: 'Mago' },
  description: { en: 'A scholarly magic-user capable of manipulating the structures of reality.', it: 'Un utilizzatore di magia erudito, capace di manipolare le strutture della realtà.' },
  hitDie: 6,
  primaryAbility: ['int'],
  savingThrowProficiencies: ['int', 'wis'],
  armorProficiencies: [],
  weaponProficiencies: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light crossbows'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'] },
  casterProgression: 'full',
  spellcastingAbility: 'int',
  startingEquipment: [
    {
      options: [
        { itemIds: ['quarterstaff'], label: { en: 'A quarterstaff', it: 'Un bastone ferrato' } },
        { itemIds: ['dagger'], label: { en: 'A dagger', it: 'Un pugnale' } },
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
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    { options: [{ itemIds: ['spellbook'], label: { en: 'A spellbook', it: 'Un libro degli incantesimi' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'wizard-spellcasting',
      level: 1,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You know 3 cantrips from the wizard spell list. Your spellbook holds six 1st-level wizard spells of your choice; you prepare a number of spells from it equal to your Intelligence modifier + your wizard level (minimum one). Intelligence is your spellcasting ability; you can use an arcane focus as a spellcasting focus. Each time you gain a level, you can add two more wizard spells to your spellbook for free.',
        it: 'Conosci 3 trucchetti dalla lista incantesimi del mago. Il tuo libro degli incantesimi contiene sei incantesimi da mago di 1° livello a tua scelta; prepari un numero di incantesimi da esso pari al tuo modificatore di Intelligenza + il tuo livello da mago (minimo uno). L’Intelligenza è la tua caratteristica da incantatore; puoi usare un focus arcano come focus da incantatore. Ogni volta che sali di livello, puoi aggiungere altri due incantesimi da mago al tuo libro degli incantesimi gratuitamente.',
      },
    },
    {
      id: 'wizard-arcane-recovery',
      level: 1,
      name: { en: 'Arcane Recovery', it: 'Recupero Arcano' },
      description: {
        en: 'Once per day when you finish a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up), none 6th level or higher.',
        it: 'Una volta al giorno quando completi un riposo breve, puoi recuperare slot incantesimo spesi con un livello complessivo pari o inferiore alla metà del tuo livello da mago (arrotondato per eccesso), nessuno di 6° livello o superiore.',
      },
    },
    {
      id: 'wizard-arcane-tradition',
      level: 2,
      name: { en: 'Arcane Tradition', it: 'Tradizione Arcana' },
      description: {
        en: 'You choose a school of magic, such as School of Evocation, granting features at 2nd, 6th, 10th, and 14th level.',
        it: 'Scegli una scuola di magia, come la Scuola dell’Evocazione, che concede capacità al 2°, 6°, 10° e 14° livello.',
      },
    },
    {
      id: 'wizard-evocation-savant',
      level: 2,
      name: { en: 'School of Evocation: Savant & Sculpt Spells', it: 'Scuola dell’Evocazione: Sapiente e Incantesimi Scolpiti' },
      description: {
        en: 'The cost to copy an evocation spell into your spellbook is halved. When you cast an evocation spell affecting other creatures, you can choose a number of them equal to 1 + the spell’s level who automatically succeed on their save and take no damage on a successful save.',
        it: 'Il costo per copiare un incantesimo di evocazione nel tuo libro degli incantesimi è dimezzato. Quando lanci un incantesimo di evocazione che colpisce altre creature, puoi scegliere un numero di esse pari a 1 + il livello dell’incantesimo che superano automaticamente il tiro salvezza e non subiscono danno in caso di successo.',
      },
    },
    {
      id: 'wizard-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'wizard-potent-cantrip',
      level: 6,
      name: { en: 'School of Evocation: Potent Cantrip', it: 'Scuola dell’Evocazione: Trucchetto Potente' },
      description: { en: 'When a creature succeeds on a save against your damaging cantrip, it still takes half damage but suffers no additional effect.', it: 'Quando una creatura supera il tiro salvezza contro il tuo trucchetto dannoso, subisce comunque metà del danno ma nessun effetto aggiuntivo.' },
    },
  ],
}
