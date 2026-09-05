import type { CharacterClass } from '../../types/srd'

export const druid: CharacterClass = {
  id: 'druid',
  name: { en: 'Druid', it: 'Druido' },
  description: {
    en: 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
    it: 'Un sacerdote dell’Antica Fede, che impugna i poteri della natura e assume forme animali.',
  },
  hitDie: 8,
  primaryAbility: ['wis'],
  savingThrowProficiencies: ['int', 'wis'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields (non-metal)'],
  weaponProficiencies: ['Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Sickles', 'Slings', 'Spears'],
  toolProficiencies: ['Herbalism kit'],
  skillChoices: {
    count: 2,
    from: ['arcana', 'animalHandling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
  },
  casterProgression: 'full',
  spellcastingAbility: 'wis',
  startingEquipment: [
    {
      options: [
        { itemIds: ['shield'], label: { en: 'A wooden shield', it: 'Uno scudo di legno' } },
        { itemIds: ['spear'], label: { en: 'Any simple weapon', it: 'Un’arma semplice a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['scimitar'], label: { en: 'A scimitar', it: 'Una scimitarra' } },
        { itemIds: ['club'], label: { en: 'Any simple melee weapon', it: 'Un’arma da mischia semplice a scelta' } },
      ],
    },
    {
      options: [
        {
          itemIds: ['leather', 'explorers-pack', 'druidic-focus-mistletoe'],
          label: { en: 'Leather armor, an explorer’s pack, and a druidic focus', it: 'Un’armatura di cuoio, uno zaino da esploratore e un focus druidico' },
        },
      ],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'druid-druidic',
      level: 1,
      name: { en: 'Druidic', it: 'Druidico' },
      description: { en: 'You know Druidic, the secret language of druids, and can use it to leave hidden messages.', it: 'Conosci il Druidico, la lingua segreta dei druidi, e puoi usarla per lasciare messaggi nascosti.' },
    },
    {
      id: 'druid-spellcasting',
      level: 1,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You know 2 cantrips from the druid spell list. You prepare a number of druid spells equal to your Wisdom modifier + your druid level (minimum one). Wisdom is your spellcasting ability. You can use a druidic focus as a spellcasting focus.',
        it: 'Conosci 2 trucchetti dalla lista incantesimi del druido. Prepari un numero di incantesimi da druido pari al tuo modificatore di Saggezza + il tuo livello da druido (minimo uno). La Saggezza è la tua caratteristica da incantatore. Puoi usare un focus druidico come focus da incantatore.',
      },
    },
    {
      id: 'druid-wild-shape',
      level: 2,
      name: { en: 'Wild Shape', it: 'Forma Selvatica' },
      description: {
        en: 'As an action, you can magically assume the shape of a beast you have seen before, usable twice (regained on a short or long rest). At 2nd level you can transform into a beast of CR 1/4 or lower with no flying or swimming speed; at 4th level CR 1/2 with no flying speed; at 8th level CR 1. You can stay transformed for hours equal to half your druid level (rounded down).',
        it: 'Come azione, puoi assumere magicamente la forma di una bestia che hai già visto, utilizzabile due volte (recuperate con un riposo breve o lungo). Al 2° livello puoi trasformarti in una bestia di GS 1/4 o inferiore senza velocità di volo o di nuoto; al 4° livello GS 1/2 senza velocità di volo; all’8° livello GS 1. Puoi restare trasformato per un numero di ore pari alla metà del tuo livello da druido (arrotondato per difetto).',
      },
    },
    {
      id: 'druid-circle',
      level: 2,
      name: { en: 'Druid Circle', it: 'Circolo Druidico' },
      description: {
        en: 'You choose to identify with a circle of druids, such as the Circle of the Land, granting features at 2nd, 6th, 10th, and 14th level.',
        it: 'Scegli di identificarti con un circolo di druidi, come il Circolo della Terra, che concede capacità al 2°, 6°, 10° e 14° livello.',
      },
    },
    {
      id: 'druid-land-bonus-cantrip',
      level: 2,
      name: { en: 'Circle of the Land: Bonus Cantrip & Natural Recovery', it: 'Circolo della Terra: Trucchetto Bonus e Recupero Naturale' },
      description: {
        en: 'You learn one additional druid cantrip. During a short rest, you can recover expended spell slots with a combined level equal to or less than half your druid level (rounded up), none 6th level or higher; usable once per long rest.',
        it: 'Impari un trucchetto da druido aggiuntivo. Durante un riposo breve, puoi recuperare slot incantesimo spesi con un livello complessivo pari o inferiore alla metà del tuo livello da druido (arrotondato per eccesso), nessuno di 6° livello o superiore; utilizzabile una volta per riposo lungo.',
      },
    },
    {
      id: 'druid-circle-spells',
      level: 3,
      name: { en: 'Circle of the Land: Circle Spells', it: 'Circolo della Terra: Incantesimi del Circolo' },
      description: {
        en: 'Choosing a land type (arctic, coast, desert, forest, grassland, mountain, or swamp) grants you always-prepared circle spells at 3rd, 5th, 7th, and 9th level.',
        it: 'Scegliendo un tipo di territorio (artico, costa, deserto, foresta, prateria, montagna o palude) ottieni incantesimi del circolo sempre preparati al 3°, 5°, 7° e 9° livello.',
      },
    },
    {
      id: 'druid-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
  ],
}
