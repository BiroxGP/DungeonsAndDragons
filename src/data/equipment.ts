import type { Item } from '../types/srd'

const armor: Item[] = [
  { id: 'padded', name: { en: 'Padded', it: 'Imbottita' }, category: 'armor', cost: '5 gp', weight: 8, stats: 'AC 11 + Dex modifier', properties: ['Light', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'leather', name: { en: 'Leather', it: 'Di cuoio' }, category: 'armor', cost: '10 gp', weight: 10, stats: 'AC 11 + Dex modifier', properties: ['Light'], source: 'SRD5.1' },
  { id: 'studded-leather', name: { en: 'Studded Leather', it: 'Di cuoio borchiato' }, category: 'armor', cost: '45 gp', weight: 13, stats: 'AC 12 + Dex modifier', properties: ['Light'], source: 'SRD5.1' },
  { id: 'hide', name: { en: 'Hide', it: 'Di pelli' }, category: 'armor', cost: '10 gp', weight: 12, stats: 'AC 12 + Dex modifier (max 2)', properties: ['Medium'], source: 'SRD5.1' },
  { id: 'chain-shirt', name: { en: 'Chain Shirt', it: 'Camicia di maglia' }, category: 'armor', cost: '50 gp', weight: 20, stats: 'AC 13 + Dex modifier (max 2)', properties: ['Medium'], source: 'SRD5.1' },
  { id: 'scale-mail', name: { en: 'Scale Mail', it: 'A scaglie' }, category: 'armor', cost: '50 gp', weight: 45, stats: 'AC 14 + Dex modifier (max 2)', properties: ['Medium', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'breastplate', name: { en: 'Breastplate', it: 'Corazza' }, category: 'armor', cost: '400 gp', weight: 20, stats: 'AC 14 + Dex modifier (max 2)', properties: ['Medium'], source: 'SRD5.1' },
  { id: 'half-plate', name: { en: 'Half Plate', it: 'Mezza piastra' }, category: 'armor', cost: '750 gp', weight: 40, stats: 'AC 15 + Dex modifier (max 2)', properties: ['Medium', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'ring-mail', name: { en: 'Ring Mail', it: 'Ad anelli' }, category: 'armor', cost: '30 gp', weight: 40, stats: 'AC 14', properties: ['Heavy', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'chain-mail', name: { en: 'Chain Mail', it: 'Cotta di maglia' }, category: 'armor', cost: '75 gp', weight: 55, stats: 'AC 16', properties: ['Heavy', 'Str 13', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'splint', name: { en: 'Splint', it: 'A stecche' }, category: 'armor', cost: '200 gp', weight: 60, stats: 'AC 17', properties: ['Heavy', 'Str 15', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'plate', name: { en: 'Plate', it: 'A piastre' }, category: 'armor', cost: '1500 gp', weight: 65, stats: 'AC 18', properties: ['Heavy', 'Str 15', 'Stealth disadvantage'], source: 'SRD5.1' },
  { id: 'shield', name: { en: 'Shield', it: 'Scudo' }, category: 'armor', cost: '10 gp', weight: 6, stats: '+2 AC', properties: [], source: 'SRD5.1' },
]

const simpleMeleeWeapons: Item[] = [
  { id: 'club', name: { en: 'Club', it: 'Randello' }, category: 'weapon', cost: '1 sp', weight: 2, stats: '1d4 bludgeoning', properties: ['Light'], source: 'SRD5.1' },
  { id: 'dagger', name: { en: 'Dagger', it: 'Pugnale' }, category: 'weapon', cost: '2 gp', weight: 1, stats: '1d4 piercing', properties: ['Finesse', 'Light', 'Thrown (20/60)'], source: 'SRD5.1' },
  { id: 'greatclub', name: { en: 'Greatclub', it: 'Randello grande' }, category: 'weapon', cost: '2 sp', weight: 10, stats: '1d8 bludgeoning', properties: ['Two-handed'], source: 'SRD5.1' },
  { id: 'handaxe', name: { en: 'Handaxe', it: 'Ascia da mano' }, category: 'weapon', cost: '5 gp', weight: 2, stats: '1d6 slashing', properties: ['Light', 'Thrown (20/60)'], source: 'SRD5.1' },
  { id: 'javelin', name: { en: 'Javelin', it: 'Giavellotto' }, category: 'weapon', cost: '5 sp', weight: 2, stats: '1d6 piercing', properties: ['Thrown (30/120)'], source: 'SRD5.1' },
  { id: 'light-hammer', name: { en: 'Light Hammer', it: 'Martello leggero' }, category: 'weapon', cost: '2 gp', weight: 2, stats: '1d4 bludgeoning', properties: ['Light', 'Thrown (20/60)'], source: 'SRD5.1' },
  { id: 'mace', name: { en: 'Mace', it: 'Mazza' }, category: 'weapon', cost: '5 gp', weight: 4, stats: '1d6 bludgeoning', properties: [], source: 'SRD5.1' },
  { id: 'quarterstaff', name: { en: 'Quarterstaff', it: 'Bastone ferrato' }, category: 'weapon', cost: '2 sp', weight: 4, stats: '1d6 bludgeoning', properties: ['Versatile (1d8)'], source: 'SRD5.1' },
  { id: 'sickle', name: { en: 'Sickle', it: 'Falcetto' }, category: 'weapon', cost: '1 gp', weight: 2, stats: '1d4 slashing', properties: ['Light'], source: 'SRD5.1' },
  { id: 'spear', name: { en: 'Spear', it: 'Lancia' }, category: 'weapon', cost: '1 gp', weight: 3, stats: '1d6 piercing', properties: ['Thrown (20/60)', 'Versatile (1d8)'], source: 'SRD5.1' },
]

const simpleRangedWeapons: Item[] = [
  { id: 'light-crossbow', name: { en: 'Light Crossbow', it: 'Balestra leggera' }, category: 'weapon', cost: '25 gp', weight: 5, stats: '1d8 piercing', properties: ['Ammunition (80/320)', 'Loading', 'Two-handed'], source: 'SRD5.1' },
  { id: 'dart', name: { en: 'Dart', it: 'Dardo' }, category: 'weapon', cost: '5 cp', weight: 0.25, stats: '1d4 piercing', properties: ['Finesse', 'Thrown (20/60)'], source: 'SRD5.1' },
  { id: 'shortbow', name: { en: 'Shortbow', it: 'Arco corto' }, category: 'weapon', cost: '25 gp', weight: 2, stats: '1d6 piercing', properties: ['Ammunition (80/320)', 'Two-handed'], source: 'SRD5.1' },
  { id: 'sling', name: { en: 'Sling', it: 'Fionda' }, category: 'weapon', cost: '1 sp', weight: 0, stats: '1d4 bludgeoning', properties: ['Ammunition (30/120)'], source: 'SRD5.1' },
]

const martialMeleeWeapons: Item[] = [
  { id: 'battleaxe', name: { en: 'Battleaxe', it: 'Ascia bipenne' }, category: 'weapon', cost: '10 gp', weight: 4, stats: '1d8 slashing', properties: ['Versatile (1d10)'], source: 'SRD5.1' },
  { id: 'flail', name: { en: 'Flail', it: 'Mazzafrusto' }, category: 'weapon', cost: '10 gp', weight: 2, stats: '1d8 bludgeoning', properties: [], source: 'SRD5.1' },
  { id: 'glaive', name: { en: 'Glaive', it: 'Falcione' }, category: 'weapon', cost: '20 gp', weight: 6, stats: '1d10 slashing', properties: ['Heavy', 'Reach', 'Two-handed'], source: 'SRD5.1' },
  { id: 'greataxe', name: { en: 'Greataxe', it: 'Ascia bipenne grande' }, category: 'weapon', cost: '30 gp', weight: 7, stats: '1d12 slashing', properties: ['Heavy', 'Two-handed'], source: 'SRD5.1' },
  { id: 'greatsword', name: { en: 'Greatsword', it: 'Spadone' }, category: 'weapon', cost: '50 gp', weight: 6, stats: '2d6 slashing', properties: ['Heavy', 'Two-handed'], source: 'SRD5.1' },
  { id: 'halberd', name: { en: 'Halberd', it: 'Alabarda' }, category: 'weapon', cost: '20 gp', weight: 6, stats: '1d10 slashing', properties: ['Heavy', 'Reach', 'Two-handed'], source: 'SRD5.1' },
  { id: 'lance', name: { en: 'Lance', it: 'Lancia da giostra' }, category: 'weapon', cost: '10 gp', weight: 6, stats: '1d12 piercing', properties: ['Reach', 'Special'], source: 'SRD5.1' },
  { id: 'longsword', name: { en: 'Longsword', it: 'Spada lunga' }, category: 'weapon', cost: '15 gp', weight: 3, stats: '1d8 slashing', properties: ['Versatile (1d10)'], source: 'SRD5.1' },
  { id: 'maul', name: { en: 'Maul', it: 'Maglio' }, category: 'weapon', cost: '10 gp', weight: 10, stats: '2d6 bludgeoning', properties: ['Heavy', 'Two-handed'], source: 'SRD5.1' },
  { id: 'morningstar', name: { en: 'Morningstar', it: 'Stella del mattino' }, category: 'weapon', cost: '15 gp', weight: 4, stats: '1d8 piercing', properties: [], source: 'SRD5.1' },
  { id: 'pike', name: { en: 'Pike', it: 'Picca' }, category: 'weapon', cost: '5 gp', weight: 18, stats: '1d10 piercing', properties: ['Heavy', 'Reach', 'Two-handed'], source: 'SRD5.1' },
  { id: 'rapier', name: { en: 'Rapier', it: 'Stocco' }, category: 'weapon', cost: '25 gp', weight: 2, stats: '1d8 piercing', properties: ['Finesse'], source: 'SRD5.1' },
  { id: 'scimitar', name: { en: 'Scimitar', it: 'Scimitarra' }, category: 'weapon', cost: '25 gp', weight: 3, stats: '1d6 slashing', properties: ['Finesse', 'Light'], source: 'SRD5.1' },
  { id: 'shortsword', name: { en: 'Shortsword', it: 'Spada corta' }, category: 'weapon', cost: '10 gp', weight: 2, stats: '1d6 piercing', properties: ['Finesse', 'Light'], source: 'SRD5.1' },
  { id: 'trident', name: { en: 'Trident', it: 'Tridente' }, category: 'weapon', cost: '5 gp', weight: 4, stats: '1d6 piercing', properties: ['Thrown (20/60)', 'Versatile (1d8)'], source: 'SRD5.1' },
  { id: 'war-pick', name: { en: 'War Pick', it: 'Piccone da guerra' }, category: 'weapon', cost: '5 gp', weight: 2, stats: '1d8 piercing', properties: [], source: 'SRD5.1' },
  { id: 'warhammer', name: { en: 'Warhammer', it: 'Martello da guerra' }, category: 'weapon', cost: '15 gp', weight: 2, stats: '1d8 bludgeoning', properties: ['Versatile (1d10)'], source: 'SRD5.1' },
  { id: 'whip', name: { en: 'Whip', it: 'Frusta' }, category: 'weapon', cost: '2 gp', weight: 3, stats: '1d4 slashing', properties: ['Finesse', 'Reach'], source: 'SRD5.1' },
]

const martialRangedWeapons: Item[] = [
  { id: 'blowgun', name: { en: 'Blowgun', it: 'Cerbottana' }, category: 'weapon', cost: '10 gp', weight: 1, stats: '1 piercing', properties: ['Ammunition (25/100)', 'Loading'], source: 'SRD5.1' },
  { id: 'hand-crossbow', name: { en: 'Hand Crossbow', it: 'Balestra a una mano' }, category: 'weapon', cost: '75 gp', weight: 3, stats: '1d6 piercing', properties: ['Ammunition (30/120)', 'Light', 'Loading'], source: 'SRD5.1' },
  { id: 'heavy-crossbow', name: { en: 'Heavy Crossbow', it: 'Balestra pesante' }, category: 'weapon', cost: '50 gp', weight: 18, stats: '1d10 piercing', properties: ['Ammunition (100/400)', 'Heavy', 'Loading', 'Two-handed'], source: 'SRD5.1' },
  { id: 'longbow', name: { en: 'Longbow', it: 'Arco lungo' }, category: 'weapon', cost: '50 gp', weight: 2, stats: '1d8 piercing', properties: ['Ammunition (150/600)', 'Heavy', 'Two-handed'], source: 'SRD5.1' },
  { id: 'net', name: { en: 'Net', it: 'Rete' }, category: 'weapon', cost: '1 gp', weight: 3, stats: 'Special', properties: ['Thrown (5/15)'], source: 'SRD5.1' },
]

const adventuringGear: Item[] = [
  { id: 'backpack', name: { en: 'Backpack', it: 'Zaino' }, category: 'gear', cost: '2 gp', weight: 5, source: 'SRD5.1' },
  { id: 'bedroll', name: { en: 'Bedroll', it: 'Sacco a pelo' }, category: 'gear', cost: '1 gp', weight: 7, source: 'SRD5.1' },
  { id: 'rope-hempen-50ft', name: { en: 'Rope, hempen (50 feet)', it: 'Corda di canapa (15 metri)' }, category: 'gear', cost: '1 gp', weight: 10, source: 'SRD5.1' },
  { id: 'rope-silk-50ft', name: { en: 'Rope, silk (50 feet)', it: 'Corda di seta (15 metri)' }, category: 'gear', cost: '10 gp', weight: 5, source: 'SRD5.1' },
  { id: 'torch', name: { en: 'Torch', it: 'Torcia' }, category: 'gear', cost: '1 cp', weight: 1, source: 'SRD5.1' },
  { id: 'lantern-hooded', name: { en: 'Lantern, hooded', it: 'Lanterna cieca' }, category: 'gear', cost: '5 gp', weight: 2, source: 'SRD5.1' },
  { id: 'oil-flask', name: { en: 'Oil (flask)', it: 'Olio (fiaschetta)' }, category: 'gear', cost: '1 sp', weight: 1, source: 'SRD5.1' },
  { id: 'rations-1-day', name: { en: 'Rations (1 day)', it: 'Razioni (1 giorno)' }, category: 'gear', cost: '5 sp', weight: 2, source: 'SRD5.1' },
  { id: 'waterskin', name: { en: 'Waterskin', it: 'Otre' }, category: 'gear', cost: '2 sp', weight: 5, source: 'SRD5.1' },
  { id: 'component-pouch', name: { en: 'Component Pouch', it: 'Sacca dei componenti' }, category: 'gear', cost: '25 gp', weight: 2, source: 'SRD5.1' },
  { id: 'arcane-focus-crystal', name: { en: 'Arcane Focus (crystal)', it: 'Focus arcano (cristallo)' }, category: 'gear', cost: '10 gp', weight: 1, source: 'SRD5.1' },
  { id: 'holy-symbol-amulet', name: { en: 'Holy Symbol (amulet)', it: 'Simbolo sacro (amuleto)' }, category: 'gear', cost: '5 gp', weight: 1, source: 'SRD5.1' },
  { id: 'druidic-focus-mistletoe', name: { en: 'Druidic Focus (sprig of mistletoe)', it: 'Focus druidico (rametto di vischio)' }, category: 'gear', cost: '1 gp', weight: 0, source: 'SRD5.1' },
  { id: 'healers-kit', name: { en: "Healer's Kit", it: 'Kit da guaritore' }, category: 'gear', cost: '5 gp', weight: 3, source: 'SRD5.1' },
  { id: 'spellbook', name: { en: 'Spellbook', it: 'Libro degli incantesimi' }, category: 'gear', cost: '50 gp', weight: 3, source: 'SRD5.1' },
]

const tools: Item[] = [
  { id: 'thieves-tools', name: { en: "Thieves' Tools", it: 'Arnesi da scasso' }, category: 'tool', cost: '25 gp', weight: 1, source: 'SRD5.1' },
  { id: 'herbalism-kit', name: { en: 'Herbalism Kit', it: 'Kit da erborista' }, category: 'tool', cost: '5 gp', weight: 3, source: 'SRD5.1' },
  { id: 'tinkers-tools', name: { en: "Tinker's Tools", it: 'Strumenti da meccanico' }, category: 'tool', cost: '50 gp', weight: 10, source: 'SRD5.1' },
  { id: 'musical-instrument-lute', name: { en: 'Musical Instrument (lute)', it: 'Strumento musicale (liuto)' }, category: 'tool', cost: '35 gp', weight: 2, source: 'SRD5.1' },
]

const packs: Item[] = [
  { id: 'explorers-pack', name: { en: "Explorer's Pack", it: 'Zaino da esploratore' }, category: 'pack', cost: '10 gp', weight: 59, description: { en: 'A backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.', it: 'Uno zaino, un sacco a pelo, un kit da mensa, un acciarino, 10 torce, 10 giorni di razioni e un otre. Lo zaino ha anche 15 metri di corda di canapa legata al fianco.' }, source: 'SRD5.1' },
  { id: 'dungeoneers-pack', name: { en: "Dungeoneer's Pack", it: 'Zaino da esploratore di dungeon' }, category: 'pack', cost: '12 gp', weight: 61.5, description: { en: 'A backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.', it: 'Uno zaino, un piede di porco, un martello, 10 piton, 10 torce, un acciarino, 10 giorni di razioni e un otre. Lo zaino ha anche 15 metri di corda di canapa legata al fianco.' }, source: 'SRD5.1' },
  { id: 'priests-pack', name: { en: "Priest's Pack", it: 'Zaino da sacerdote' }, category: 'pack', cost: '19 gp', weight: 24, description: { en: 'A backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.', it: 'Uno zaino, una coperta, 10 candele, un acciarino, una cassetta delle elemosine, 2 blocchi di incenso, un turibolo, paramenti, 2 giorni di razioni e un otre.' }, source: 'SRD5.1' },
  { id: 'entertainers-pack', name: { en: "Entertainer's Pack", it: 'Zaino da intrattenitore' }, category: 'pack', cost: '40 gp', weight: 38, description: { en: 'A backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.', it: 'Uno zaino, un sacco a pelo, 2 costumi, 5 candele, 5 giorni di razioni, un otre e un kit da travestimento.' }, source: 'SRD5.1' },
  { id: 'diplomats-pack', name: { en: "Diplomat's Pack", it: 'Zaino da diplomatico' }, category: 'pack', cost: '39 gp', weight: 39, description: { en: 'A chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.', it: 'Un baule, 2 astucci per mappe e pergamene, un set di abiti eleganti, una boccetta di inchiostro, una penna d’oca, una lampada, 2 fiaschette d’olio, 5 fogli di carta, una fiala di profumo, ceralacca e sapone.' }, source: 'SRD5.1' },
  { id: 'burglars-pack', name: { en: "Burglar's Pack", it: 'Zaino da scassinatore' }, category: 'pack', cost: '16 gp', weight: 44.5, description: { en: 'A backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days of rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.', it: 'Uno zaino, un sacchetto con 1.000 sfere di cuscinetto, 3 metri di spago, un campanello, 5 candele, un piede di porco, un martello, 10 piton, una lanterna cieca, 2 fiaschette d’olio, 5 giorni di razioni, un acciarino e un otre. Lo zaino ha anche 15 metri di corda di canapa legata al fianco.' }, source: 'SRD5.1' },
  { id: 'scholars-pack', name: { en: "Scholar's Pack", it: 'Zaino da studioso' }, category: 'pack', cost: '40 gp', weight: 11, description: { en: 'A backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.', it: 'Uno zaino, un libro di sapienza, una boccetta di inchiostro, una penna d’oca, 10 fogli di pergamena, un sacchettino di sabbia e un piccolo coltello.' }, source: 'SRD5.1' },
]

export const EQUIPMENT: Item[] = [
  ...armor,
  ...simpleMeleeWeapons,
  ...simpleRangedWeapons,
  ...martialMeleeWeapons,
  ...martialRangedWeapons,
  ...adventuringGear,
  ...tools,
  ...packs,
]

export const EQUIPMENT_BY_ID: Record<string, Item> = Object.fromEntries(EQUIPMENT.map((i) => [i.id, i]))

export function getItem(id: string): Item | undefined {
  return EQUIPMENT_BY_ID[id]
}
