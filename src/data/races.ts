import type { Race } from '../types/srd'

export const RACES: Race[] = [
  {
    id: 'dwarf',
    name: { en: 'Dwarf' },
    description: { en: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.' },
    abilityBonuses: { con: 2 },
    speed: 25,
    size: 'medium',
    languages: ['Common', 'Dwarvish'],
    source: 'SRD5.1',
    traits: [
      { id: 'dwarf-darkvision', name: { en: 'Darkvision' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).' } },
      { id: 'dwarf-resilience', name: { en: 'Dwarven Resilience' }, description: { en: 'You have advantage on saving throws against poison, and resistance against poison damage.' } },
      { id: 'dwarf-combat-training', name: { en: 'Dwarven Combat Training' }, description: { en: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.' } },
      { id: 'dwarf-tool-proficiency', name: { en: 'Tool Proficiency' }, description: { en: "You gain proficiency with one of: smith's tools, brewer's supplies, or mason's tools." } },
      { id: 'dwarf-stonecunning', name: { en: 'Stonecunning' }, description: { en: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient and add double your proficiency bonus.' } },
      { id: 'dwarf-heavy-armor', name: { en: 'Armored Stride' }, description: { en: 'Your speed is not reduced by wearing heavy armor.' } },
    ],
    subraces: [
      {
        id: 'hill-dwarf',
        name: { en: 'Hill Dwarf' },
        description: { en: 'Hill dwarves have keen senses, deep intuition, and remarkable resilience.' },
        abilityBonuses: { wis: 1 },
        traits: [
          { id: 'hill-dwarf-toughness', name: { en: 'Dwarven Toughness' }, description: { en: 'Your hit point maximum increases by 1, and increases by 1 again every time you gain a level.' } },
        ],
      },
    ],
  },
  {
    id: 'elf',
    name: { en: 'Elf' },
    description: { en: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.' },
    abilityBonuses: { dex: 2 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Elvish'],
    source: 'SRD5.1',
    traits: [
      { id: 'elf-darkvision', name: { en: 'Darkvision' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).' } },
      { id: 'elf-keen-senses', name: { en: 'Keen Senses' }, description: { en: 'You have proficiency in the Perception skill.' } },
      { id: 'elf-fey-ancestry', name: { en: 'Fey Ancestry' }, description: { en: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." } },
      { id: 'elf-trance', name: { en: 'Trance' }, description: { en: "Elves don't need to sleep; instead they meditate deeply for 4 hours a day, gaining the same benefit a human gets from 8 hours of sleep." } },
    ],
    subraces: [
      {
        id: 'high-elf',
        name: { en: 'High Elf' },
        description: { en: 'High elves have a keen mind and a mastery of at least the basics of magic.' },
        abilityBonuses: { int: 1 },
        traits: [
          { id: 'high-elf-weapon-training', name: { en: 'Elf Weapon Training' }, description: { en: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.' } },
          { id: 'high-elf-cantrip', name: { en: 'Cantrip' }, description: { en: 'You know one cantrip of your choice from the wizard spell list; Intelligence is your spellcasting ability for it.' } },
          { id: 'high-elf-extra-language', name: { en: 'Extra Language' }, description: { en: 'You can speak, read, and write one extra language of your choice.' } },
        ],
      },
    ],
  },
  {
    id: 'halfling',
    name: { en: 'Halfling' },
    description: { en: 'The comforts of home are dear to halflings, who value hearth and kin above wealth and adventure.' },
    abilityBonuses: { dex: 2 },
    speed: 25,
    size: 'small',
    languages: ['Common', 'Halfling'],
    source: 'SRD5.1',
    traits: [
      { id: 'halfling-lucky', name: { en: 'Lucky' }, description: { en: 'When you roll a 1 on a d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.' } },
      { id: 'halfling-brave', name: { en: 'Brave' }, description: { en: 'You have advantage on saving throws against being frightened.' } },
      { id: 'halfling-nimbleness', name: { en: 'Halfling Nimbleness' }, description: { en: 'You can move through the space of any creature that is of a size larger than yours.' } },
    ],
    subraces: [
      {
        id: 'lightfoot-halfling',
        name: { en: 'Lightfoot Halfling' },
        description: { en: 'Lightfoot halflings can easily hide from notice, even using other people as cover, and are inclined to be affable and easygoing.' },
        abilityBonuses: { cha: 1 },
        traits: [
          { id: 'lightfoot-stealthy', name: { en: 'Naturally Stealthy' }, description: { en: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.' } },
        ],
      },
    ],
  },
  {
    id: 'human',
    name: { en: 'Human' },
    description: { en: 'Humans are the most adaptable and ambitious people among the common races, with wide-ranging tastes and customs.' },
    abilityBonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'One extra language of your choice'],
    source: 'SRD5.1',
    traits: [],
  },
  {
    id: 'dragonborn',
    name: { en: 'Dragonborn' },
    description: { en: 'Dragonborn walk proudly through a world that greets them with fearful incomprehension, their draconic heritage manifesting in a variety of traits.' },
    abilityBonuses: { str: 2, cha: 1 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Draconic'],
    source: 'SRD5.1',
    traits: [
      {
        id: 'dragonborn-ancestry',
        name: { en: 'Draconic Ancestry' },
        description: {
          en: 'Choose one dragon type (Black/acid, Blue/lightning, Brass/fire, Bronze/lightning, Copper/acid, Gold/fire, Green/poison, Red/fire, Silver/cold, White/cold), which determines the damage type of your Breath Weapon and Damage Resistance.',
        },
      },
      {
        id: 'dragonborn-breath-weapon',
        name: { en: 'Breath Weapon' },
        description: {
          en: 'As an action, you can exhale destructive energy (a 5-by-30-foot line or a 15-foot cone, depending on ancestry). Each creature in the area makes a Dexterity or Constitution save (DC 8 + your Constitution modifier + your proficiency bonus), taking 2d6 damage on a failure (half on a success). The damage increases to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th. Usable once per short or long rest.',
        },
      },
      { id: 'dragonborn-damage-resistance', name: { en: 'Damage Resistance' }, description: { en: 'You have resistance to the damage type associated with your draconic ancestry.' } },
    ],
  },
  {
    id: 'gnome',
    name: { en: 'Gnome' },
    description: { en: 'A gnome’s energy and enthusiasm for living shines through every inch of their tiny body.' },
    abilityBonuses: { int: 2 },
    speed: 25,
    size: 'small',
    languages: ['Common', 'Gnomish'],
    source: 'SRD5.1',
    traits: [
      { id: 'gnome-darkvision', name: { en: 'Darkvision' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).' } },
      { id: 'gnome-cunning', name: { en: 'Gnome Cunning' }, description: { en: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.' } },
    ],
    subraces: [
      {
        id: 'rock-gnome',
        name: { en: 'Rock Gnome' },
        description: { en: 'Rock gnomes have a natural inventiveness and hardiness beyond that of other gnomes.' },
        abilityBonuses: { con: 1 },
        traits: [
          { id: 'rock-gnome-artificers-lore', name: { en: "Artificer's Lore" }, description: { en: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you add double your proficiency bonus.' } },
          {
            id: 'rock-gnome-tinker',
            name: { en: 'Tinker' },
            description: {
              en: "You have proficiency with tinker's tools. You can spend 1 hour and 10 gp of materials to construct a Tiny clockwork device (AC 5, 1 hp) — a Clockwork Toy, Fire Starter, or Music Box — that ceases to function after 24 hours unless repaired. You can have up to three active at once.",
            },
          },
        ],
      },
    ],
  },
  {
    id: 'half-elf',
    name: { en: 'Half-Elf' },
    description: { en: 'Walking in two worlds but truly belonging to neither, half-elves combine what some call the best qualities of their elf and human parents.' },
    abilityBonuses: { cha: 2 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Elvish', 'One extra language of your choice'],
    source: 'SRD5.1',
    traits: [
      { id: 'half-elf-ability-choice', name: { en: 'Ability Score Increase (choice)' }, description: { en: 'Two ability scores of your choice (other than Charisma) each increase by 1.' } },
      { id: 'half-elf-darkvision', name: { en: 'Darkvision' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).' } },
      { id: 'half-elf-fey-ancestry', name: { en: 'Fey Ancestry' }, description: { en: "You have advantage on saving throws against being charmed, and magic can't put you to sleep." } },
      { id: 'half-elf-skill-versatility', name: { en: 'Skill Versatility' }, description: { en: 'You gain proficiency in two skills of your choice.' } },
    ],
  },
  {
    id: 'half-orc',
    name: { en: 'Half-Orc' },
    description: { en: 'Half-orcs bear the traits of their two vastly different heritages, forever standing apart from human and orc society alike.' },
    abilityBonuses: { str: 2, con: 1 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Orc'],
    source: 'SRD5.1',
    traits: [
      { id: 'half-orc-darkvision', name: { en: 'Darkvision' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).' } },
      { id: 'half-orc-menacing', name: { en: 'Menacing' }, description: { en: 'You gain proficiency in the Intimidation skill.' } },
      { id: 'half-orc-relentless-endurance', name: { en: 'Relentless Endurance' }, description: { en: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Usable once per long rest." } },
      { id: 'half-orc-savage-attacks', name: { en: 'Savage Attacks' }, description: { en: 'When you score a critical hit with a melee weapon attack, you can roll one additional weapon damage die and add it to the extra damage of the critical hit.' } },
    ],
  },
  {
    id: 'tiefling',
    name: { en: 'Tiefling' },
    description: { en: 'To be greeted with stares and whispers, to be treated with suspicion and fear: this is the lot in life for tieflings, whose infernal descent is written in their features.' },
    abilityBonuses: { int: 1, cha: 2 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Infernal'],
    source: 'SRD5.1',
    traits: [
      { id: 'tiefling-darkvision', name: { en: 'Darkvision' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).' } },
      { id: 'tiefling-hellish-resistance', name: { en: 'Hellish Resistance' }, description: { en: 'You have resistance to fire damage.' } },
      {
        id: 'tiefling-infernal-legacy',
        name: { en: 'Infernal Legacy' },
        description: {
          en: 'You know the thaumaturgy cantrip. At 3rd level you can cast hellish rebuke once per long rest as a 2nd-level spell, and at 5th level you can cast darkness once per long rest. Charisma is your spellcasting ability for these spells.',
        },
      },
    ],
  },
]

export const RACES_BY_ID: Record<string, Race> = Object.fromEntries(RACES.map((r) => [r.id, r]))

export function getRace(id: string): Race | undefined {
  return RACES_BY_ID[id]
}
