import type { Race } from '../types/srd'

export const RACES: Race[] = [
  {
    id: 'dwarf',
    name: { en: 'Dwarf', it: 'Nano' },
    description: {
      en: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
      it: 'Audaci e resistenti, i nani sono noti come abili guerrieri, minatori e lavoratori della pietra e del metallo.',
    },
    abilityBonuses: { con: 2 },
    speed: 25,
    size: 'medium',
    languages: ['Common', 'Dwarvish'],
    source: 'SRD5.1',
    traits: [
      { id: 'dwarf-darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).', it: 'Vedi nella penombra entro 18 metri come se fosse luce intensa, e nell’oscurità come se fosse penombra (senza percepire i colori).' } },
      { id: 'dwarf-resilience', name: { en: 'Dwarven Resilience', it: 'Resilienza dei Nani' }, description: { en: 'You have advantage on saving throws against poison, and resistance against poison damage.', it: 'Hai vantaggio ai tiri salvezza contro il veleno e resistenza al danno da veleno.' } },
      { id: 'dwarf-combat-training', name: { en: 'Dwarven Combat Training', it: 'Addestramento al Combattimento dei Nani' }, description: { en: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.', it: 'Sei competente con ascia bipenne, ascia da mano, martello leggero e martello da guerra.' } },
      { id: 'dwarf-tool-proficiency', name: { en: 'Tool Proficiency', it: 'Competenza negli Strumenti' }, description: { en: "You gain proficiency with one of: smith's tools, brewer's supplies, or mason's tools.", it: 'Ottieni competenza in uno tra: strumenti da fabbro, kit da birraio o strumenti da scalpellino.' } },
      { id: 'dwarf-stonecunning', name: { en: 'Stonecunning', it: 'Conoscenza della Pietra' }, description: { en: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient and add double your proficiency bonus.', it: 'Quando effettui una prova di Intelligenza (Storia) relativa all’origine di un manufatto in pietra, sei considerato competente e raddoppi il tuo bonus di competenza.' } },
      { id: 'dwarf-heavy-armor', name: { en: 'Armored Stride', it: 'Passo Corazzato' }, description: { en: 'Your speed is not reduced by wearing heavy armor.', it: 'La tua velocità non è ridotta dall’indossare un’armatura pesante.' } },
    ],
    subraces: [
      {
        id: 'hill-dwarf',
        name: { en: 'Hill Dwarf', it: 'Nano delle Colline' },
        description: { en: 'Hill dwarves have keen senses, deep intuition, and remarkable resilience.', it: 'I nani delle colline hanno sensi acuti, profonda intuizione e una resistenza notevole.' },
        abilityBonuses: { wis: 1 },
        source: 'SRD5.1',
        traits: [
          { id: 'hill-dwarf-toughness', name: { en: 'Dwarven Toughness', it: 'Robustezza dei Nani' }, description: { en: 'Your hit point maximum increases by 1, and increases by 1 again every time you gain a level.', it: 'Il tuo massimo dei punti ferita aumenta di 1, e aumenta di 1 ogni volta che sali di livello.' } },
        ],
      },
      {
        id: 'forgeheart-dwarf',
        name: { en: 'Forgeheart Dwarf', it: 'Nano del Cuore della Forgia' },
        description: {
          en: 'Raised beside the forge fires, forgeheart dwarves carry the heat of molten metal in their blood and a hammer’s rhythm in their hearts.',
          it: 'Cresciuti accanto ai fuochi della forgia, i nani del cuore della forgia portano nel sangue il calore del metallo fuso e nel cuore il ritmo del martello.',
        },
        abilityBonuses: { str: 1 },
        source: 'original',
        traits: [
          { id: 'forgeheart-dwarf-fire-resistance', name: { en: 'Fire-Forged Blood', it: 'Sangue Temprato dal Fuoco' }, description: { en: 'You have resistance to fire damage.', it: 'Hai resistenza al danno da fuoco.' } },
          { id: 'forgeheart-dwarf-smiths-aptitude', name: { en: "Smith's Aptitude", it: 'Attitudine da Fabbro' }, description: { en: "You have proficiency with smith's tools. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.", it: 'Sei competente con gli strumenti da fabbro. Se sei già competente, raddoppi il bonus di competenza nelle prove che effettui con essi.' } },
        ],
      },
      {
        id: 'frostkin-dwarf',
        name: { en: 'Frostkin Dwarf', it: 'Nano di Sangue Gelido' },
        description: {
          en: 'Dwelling in the coldest depths and highest peaks, frostkin dwarves have blood that runs cool and nerves that never falter on the ice.',
          it: 'Abitando le profondità più fredde e le vette più alte, i nani di sangue gelido hanno il sangue freddo e i nervi saldi sul ghiaccio.',
        },
        abilityBonuses: { dex: 1 },
        source: 'original',
        traits: [
          { id: 'frostkin-dwarf-cold-resistance', name: { en: 'Cold-Blooded', it: 'Sangue Freddo' }, description: { en: 'You have resistance to cold damage.', it: 'Hai resistenza al danno da freddo.' } },
          { id: 'frostkin-dwarf-sure-footed', name: { en: 'Sure-Footed', it: 'Piede Fermo' }, description: { en: 'You have advantage on saving throws and ability checks made to avoid falling prone.', it: 'Hai vantaggio ai tiri salvezza e alle prove di caratteristica effettuate per evitare di cadere prono.' } },
        ],
      },
    ],
  },
  {
    id: 'elf',
    name: { en: 'Elf', it: 'Elfo' },
    description: {
      en: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
      it: 'Gli elfi sono un popolo magico dalla grazia ultraterrena, che vive nel mondo senza però appartenervi del tutto.',
    },
    abilityBonuses: { dex: 2 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Elvish'],
    source: 'SRD5.1',
    traits: [
      { id: 'elf-darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).', it: 'Vedi nella penombra entro 18 metri come se fosse luce intensa, e nell’oscurità come se fosse penombra (senza percepire i colori).' } },
      { id: 'elf-keen-senses', name: { en: 'Keen Senses', it: 'Sensi Acuti' }, description: { en: 'You have proficiency in the Perception skill.', it: 'Sei competente nell’abilità Percezione.' } },
      { id: 'elf-fey-ancestry', name: { en: 'Fey Ancestry', it: 'Ascendenza Fatata' }, description: { en: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.", it: 'Hai vantaggio ai tiri salvezza contro l’essere affascinato, e la magia non può metterti a dormire.' } },
      { id: 'elf-trance', name: { en: 'Trance', it: 'Trance' }, description: { en: "Elves don't need to sleep; instead they meditate deeply for 4 hours a day, gaining the same benefit a human gets from 8 hours of sleep.", it: 'Gli elfi non hanno bisogno di dormire; meditano invece profondamente per 4 ore al giorno, ottenendo lo stesso beneficio che un umano trae da 8 ore di sonno.' } },
    ],
    subraces: [
      {
        id: 'high-elf',
        name: { en: 'High Elf', it: 'Alto Elfo' },
        description: { en: 'High elves have a keen mind and a mastery of at least the basics of magic.', it: 'Gli alti elfi hanno una mente acuta e padroneggiano almeno le basi della magia.' },
        abilityBonuses: { int: 1 },
        source: 'SRD5.1',
        traits: [
          { id: 'high-elf-weapon-training', name: { en: 'Elf Weapon Training', it: 'Addestramento alle Armi Elfiche' }, description: { en: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.', it: 'Sei competente con spada lunga, spada corta, arco corto e arco lungo.' } },
          { id: 'high-elf-cantrip', name: { en: 'Cantrip', it: 'Trucchetto' }, description: { en: 'You know one cantrip of your choice from the wizard spell list; Intelligence is your spellcasting ability for it.', it: 'Conosci un trucchetto a tua scelta dalla lista incantesimi del mago; l’Intelligenza è la tua caratteristica da incantatore per esso.' } },
          { id: 'high-elf-extra-language', name: { en: 'Extra Language', it: 'Lingua Extra' }, description: { en: 'You can speak, read, and write one extra language of your choice.', it: 'Sai parlare, leggere e scrivere una lingua extra a tua scelta.' } },
        ],
      },
      {
        id: 'starlit-elf',
        name: { en: 'Starlit Elf', it: 'Elfo delle Stelle' },
        description: {
          en: 'Under open night skies, starlit elves feel most at home, tracing old constellations that guide their steps and their magic.',
          it: 'Sotto i cieli notturni aperti, gli elfi delle stelle si sentono più a loro agio, seguendo antiche costellazioni che guidano i loro passi e la loro magia.',
        },
        abilityBonuses: { cha: 1 },
        source: 'original',
        traits: [
          { id: 'starlit-elf-nightsong', name: { en: 'Nightsong', it: 'Canto Notturno' }, description: { en: 'You know the Dancing Lights cantrip. Charisma is your spellcasting ability for it.', it: 'Conosci il trucchetto Luci Danzanti. Il Carisma è la tua caratteristica da incantatore per esso.' } },
          { id: 'starlit-elf-stargazer', name: { en: 'Stargazer', it: 'Osservatore di Stelle' }, description: { en: 'You have proficiency in the Survival skill.', it: 'Sei competente nell’abilità Sopravvivenza.' } },
        ],
      },
      {
        id: 'marsh-elf',
        name: { en: 'Marsh Elf', it: 'Elfo delle Paludi' },
        description: {
          en: 'At home among reeds and still waters, marsh elves move as easily through a bog as through a forest glade.',
          it: 'A proprio agio tra canneti e acque immobili, gli elfi delle paludi si muovono con la stessa facilità in una palude come in una radura.',
        },
        abilityBonuses: { con: 1 },
        source: 'original',
        traits: [
          { id: 'marsh-elf-swimmer', name: { en: 'Marsh-Born', it: 'Nato nella Palude' }, description: { en: 'You have a swimming speed equal to your walking speed.', it: 'Hai una velocità di nuoto pari alla tua velocità sul terreno.' } },
          { id: 'marsh-elf-poison-resistance', name: { en: 'Bog-Warded Blood', it: 'Sangue Protetto dalla Palude' }, description: { en: 'You have resistance to poison damage.', it: 'Hai resistenza al danno da veleno.' } },
        ],
      },
    ],
  },
  {
    id: 'halfling',
    name: { en: 'Halfling', it: 'Halfling' },
    description: {
      en: 'The comforts of home are dear to halflings, who value hearth and kin above wealth and adventure.',
      it: 'Le comodità di casa sono care agli halfling, che apprezzano il focolare e la famiglia più della ricchezza e dell’avventura.',
    },
    abilityBonuses: { dex: 2 },
    speed: 25,
    size: 'small',
    languages: ['Common', 'Halfling'],
    source: 'SRD5.1',
    traits: [
      { id: 'halfling-lucky', name: { en: 'Lucky', it: 'Fortunato' }, description: { en: 'When you roll a 1 on a d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.', it: 'Quando ottieni 1 su un d20 per un tiro per colpire, una prova di caratteristica o un tiro salvezza, puoi tirare di nuovo il dado e devi usare il nuovo risultato.' } },
      { id: 'halfling-brave', name: { en: 'Brave', it: 'Coraggioso' }, description: { en: 'You have advantage on saving throws against being frightened.', it: 'Hai vantaggio ai tiri salvezza contro la condizione spaventato.' } },
      { id: 'halfling-nimbleness', name: { en: 'Halfling Nimbleness', it: 'Agilità Halfling' }, description: { en: 'You can move through the space of any creature that is of a size larger than yours.', it: 'Puoi muoverti attraverso lo spazio di qualsiasi creatura di taglia maggiore della tua.' } },
    ],
    subraces: [
      {
        id: 'lightfoot-halfling',
        name: { en: 'Lightfoot Halfling', it: 'Halfling Piedileggeri' },
        description: { en: 'Lightfoot halflings can easily hide from notice, even using other people as cover, and are inclined to be affable and easygoing.', it: 'Gli halfling piedileggeri riescono facilmente a nascondersi alla vista, persino usando altre persone come copertura, e sono per natura affabili e disinvolti.' },
        abilityBonuses: { cha: 1 },
        source: 'SRD5.1',
        traits: [
          { id: 'lightfoot-stealthy', name: { en: 'Naturally Stealthy', it: 'Furtività Naturale' }, description: { en: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.', it: 'Puoi tentare di nasconderti anche quando sei celato solo da una creatura di taglia almeno superiore alla tua.' } },
        ],
      },
      {
        id: 'hearth-halfling',
        name: { en: 'Hearth Halfling', it: 'Halfling del Focolare' },
        description: {
          en: 'Hearth halflings are the keepers of the family fire, cherished for their steady hands and steadier hearts.',
          it: 'Gli halfling del focolare sono i custodi del fuoco di famiglia, apprezzati per le mani salde e il cuore ancora più saldo.',
        },
        abilityBonuses: { con: 1 },
        source: 'original',
        traits: [
          { id: 'hearth-halfling-hardy', name: { en: 'Hardy Constitution', it: 'Costituzione Robusta' }, description: { en: 'You have advantage on saving throws against disease.', it: 'Hai vantaggio ai tiri salvezza contro le malattie.' } },
          { id: 'hearth-halfling-cooks-aptitude', name: { en: "Cook's Aptitude", it: 'Attitudine da Cuoco' }, description: { en: "You have proficiency with cook's utensils.", it: 'Sei competente con gli utensili da cucina.' } },
        ],
      },
      {
        id: 'wanderer-halfling',
        name: { en: 'Wanderer Halfling', it: 'Halfling Girovago' },
        description: {
          en: 'Not every halfling stays close to home — wanderer halflings take to the open road, trading tales and trinkets from town to town.',
          it: 'Non tutti gli halfling restano vicino a casa: gli halfling girovaghi prendono la strada aperta, scambiando racconti e ninnoli di città in città.',
        },
        abilityBonuses: { wis: 1 },
        source: 'original',
        traits: [
          { id: 'wanderer-halfling-pathfinding', name: { en: 'Sure Path', it: 'Sentiero Sicuro' }, description: { en: 'You have proficiency in the Survival skill.', it: 'Sei competente nell’abilità Sopravvivenza.' } },
          { id: 'wanderer-halfling-road-sense', name: { en: 'Road Sense', it: 'Senso della Strada' }, description: { en: 'You have proficiency in the Perception skill.', it: 'Sei competente nell’abilità Percezione.' } },
        ],
      },
    ],
  },
  {
    id: 'human',
    name: { en: 'Human', it: 'Umano' },
    description: {
      en: 'Humans are the most adaptable and ambitious people among the common races, with wide-ranging tastes and customs.',
      it: 'Gli umani sono il popolo più adattabile e ambizioso tra le razze comuni, con gusti e usanze estremamente variegati.',
    },
    abilityBonuses: { str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'One extra language of your choice'],
    source: 'SRD5.1',
    traits: [],
    subraces: [
      {
        id: 'wayfarer-human',
        name: { en: 'Wayfarer Human', it: 'Umano Viandante' },
        description: {
          en: 'Always chasing the horizon, wayfarer humans call the road their true home, forever curious about what lies beyond the next hill.',
          it: 'Sempre in cerca dell’orizzonte, gli umani viandanti chiamano la strada la loro vera casa, per sempre curiosi di ciò che si trova oltre la prossima collina.',
        },
        abilityBonuses: {},
        source: 'original',
        traits: [
          { id: 'wayfarer-human-well-traveled', name: { en: 'Well-Traveled', it: 'Ben Viaggiato' }, description: { en: 'You have proficiency in the Survival skill.', it: 'Sei competente nell’abilità Sopravvivenza.' } },
          { id: 'wayfarer-human-quick-step', name: { en: 'Quick Step', it: 'Passo Rapido' }, description: { en: 'Your walking speed increases by 5 feet.', it: 'La tua velocità sul terreno aumenta di 1,5 metri.' } },
        ],
      },
      {
        id: 'artisan-human',
        name: { en: 'Artisan Human', it: 'Umano Artigiano' },
        description: {
          en: 'Artisan humans take pride in the work of their hands, passing trade secrets from parent to child across generations.',
          it: 'Gli umani artigiani sono fieri del lavoro delle proprie mani, tramandando i segreti del mestiere di generazione in generazione.',
        },
        abilityBonuses: {},
        source: 'original',
        traits: [
          { id: 'artisan-human-tool-training', name: { en: 'Tool Training', it: 'Addestramento negli Strumenti' }, description: { en: "You have proficiency with one type of artisan's tools of your choice.", it: 'Sei competente con un tipo di strumenti da artigiano a tua scelta.' } },
          { id: 'artisan-human-keen-eye', name: { en: 'Keen Eye', it: 'Occhio Attento' }, description: { en: 'You have proficiency in the Investigation skill.', it: 'Sei competente nell’abilità Indagare.' } },
        ],
      },
    ],
  },
  {
    id: 'dragonborn',
    name: { en: 'Dragonborn', it: 'Dragonide' },
    description: {
      en: 'Dragonborn walk proudly through a world that greets them with fearful incomprehension, their draconic heritage manifesting in a variety of traits.',
      it: 'I dragonidi camminano fieri in un mondo che li accoglie con timorosa incomprensione, mentre la loro eredità draconica si manifesta in una varietà di tratti.',
    },
    abilityBonuses: { str: 2, cha: 1 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Draconic'],
    source: 'SRD5.1',
    traits: [
      {
        id: 'dragonborn-ancestry',
        name: { en: 'Draconic Ancestry', it: 'Ascendenza Draconica' },
        description: {
          en: 'Choose one dragon type (Black/acid, Blue/lightning, Brass/fire, Bronze/lightning, Copper/acid, Gold/fire, Green/poison, Red/fire, Silver/cold, White/cold), which determines the damage type of your Breath Weapon and Damage Resistance.',
          it: 'Scegli un tipo di drago (Nero/acido, Blu/fulmine, Ottone/fuoco, Bronzo/fulmine, Rame/acido, Oro/fuoco, Verde/veleno, Rosso/fuoco, Argento/freddo, Bianco/freddo), che determina il tipo di danno della tua Arma dal Respiro e della Resistenza al Danno.',
        },
      },
      {
        id: 'dragonborn-breath-weapon',
        name: { en: 'Breath Weapon', it: 'Arma dal Respiro' },
        description: {
          en: 'As an action, you can exhale destructive energy (a 5-by-30-foot line or a 15-foot cone, depending on ancestry). Each creature in the area makes a Dexterity or Constitution save (DC 8 + your Constitution modifier + your proficiency bonus), taking 2d6 damage on a failure (half on a success). The damage increases to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th. Usable once per short or long rest.',
          it: 'Come azione, puoi esalare energia distruttiva (una linea 1,5×9 metri o un cono di 4,5 metri, a seconda dell’ascendenza). Ogni creatura nell’area effettua un tiro salvezza su Destrezza o Costituzione (CD 8 + il tuo modificatore di Costituzione + il tuo bonus di competenza), subendo 2d6 danni in caso di fallimento (la metà in caso di successo). Il danno aumenta a 3d6 al 6° livello, 4d6 all’11° e 5d6 al 16°. Utilizzabile una volta per riposo breve o lungo.',
        },
      },
      { id: 'dragonborn-damage-resistance', name: { en: 'Damage Resistance', it: 'Resistenza al Danno' }, description: { en: 'You have resistance to the damage type associated with your draconic ancestry.', it: 'Hai resistenza al tipo di danno associato alla tua ascendenza draconica.' } },
    ],
    subraces: [
      {
        id: 'desert-dragonborn',
        name: { en: 'Desert Dragonborn', it: 'Dragonide del Deserto' },
        description: {
          en: 'Hailing from sun-scorched wastes, desert dragonborn endure heat and thirst that would fell lesser travelers.',
          it: 'Provenienti da desolazioni arse dal sole, i dragonidi del deserto resistono a calore e sete che abbatterebbero viaggiatori meno forti.',
        },
        abilityBonuses: { con: 1 },
        source: 'original',
        traits: [
          { id: 'desert-dragonborn-heat-resistance', name: { en: 'Sun-Scaled Hide', it: 'Pelle Squamata dal Sole' }, description: { en: 'You have resistance to fire damage, in addition to any resistance granted by your draconic ancestry.', it: 'Hai resistenza al danno da fuoco, in aggiunta a qualsiasi resistenza concessa dalla tua ascendenza draconica.' } },
          { id: 'desert-dragonborn-survivor', name: { en: 'Wasteland Survivor', it: 'Sopravvissuto delle Terre Desolate' }, description: { en: 'You have proficiency in the Survival skill.', it: 'Sei competente nell’abilità Sopravvivenza.' } },
        ],
      },
      {
        id: 'storm-dragonborn',
        name: { en: 'Storm Dragonborn', it: 'Dragonide della Tempesta' },
        description: {
          en: 'Born amid rolling thunderheads, storm dragonborn move with the restless energy of an approaching gale.',
          it: 'Nati tra nubi temporalesche, i dragonidi della tempesta si muovono con l’energia inquieta di un uragano in arrivo.',
        },
        abilityBonuses: { dex: 1 },
        source: 'original',
        traits: [
          { id: 'storm-dragonborn-lightning-resistance', name: { en: 'Storm-Scaled Hide', it: 'Pelle Squamata dalla Tempesta' }, description: { en: 'You have resistance to lightning damage, in addition to any resistance granted by your draconic ancestry.', it: 'Hai resistenza al danno da fulmine, in aggiunta a qualsiasi resistenza concessa dalla tua ascendenza draconica.' } },
          { id: 'storm-dragonborn-keen-hearing', name: { en: 'Storm Sense', it: 'Senso della Tempesta' }, description: { en: 'You have proficiency in the Perception skill.', it: 'Sei competente nell’abilità Percezione.' } },
        ],
      },
    ],
  },
  {
    id: 'gnome',
    name: { en: 'Gnome', it: 'Gnomo' },
    description: {
      en: 'A gnome’s energy and enthusiasm for living shines through every inch of their tiny body.',
      it: 'L’energia e l’entusiasmo per la vita di uno gnomo risplendono in ogni centimetro del suo piccolo corpo.',
    },
    abilityBonuses: { int: 2 },
    speed: 25,
    size: 'small',
    languages: ['Common', 'Gnomish'],
    source: 'SRD5.1',
    traits: [
      { id: 'gnome-darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).', it: 'Vedi nella penombra entro 18 metri come se fosse luce intensa, e nell’oscurità come se fosse penombra (senza percepire i colori).' } },
      { id: 'gnome-cunning', name: { en: 'Gnome Cunning', it: 'Astuzia Gnomesca' }, description: { en: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.', it: 'Hai vantaggio a tutti i tiri salvezza su Intelligenza, Saggezza e Carisma contro la magia.' } },
    ],
    subraces: [
      {
        id: 'rock-gnome',
        name: { en: 'Rock Gnome', it: 'Gnomo delle Rocce' },
        description: { en: 'Rock gnomes have a natural inventiveness and hardiness beyond that of other gnomes.', it: 'Gli gnomi delle rocce hanno un’inventiva e una resistenza naturali superiori a quelle degli altri gnomi.' },
        abilityBonuses: { con: 1 },
        source: 'SRD5.1',
        traits: [
          { id: 'rock-gnome-artificers-lore', name: { en: "Artificer's Lore", it: 'Sapienza dell’Artificiere' }, description: { en: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you add double your proficiency bonus.', it: 'Quando effettui una prova di Intelligenza (Storia) relativa a oggetti magici, oggetti alchemici o dispositivi tecnologici, raddoppi il tuo bonus di competenza.' } },
          {
            id: 'rock-gnome-tinker',
            name: { en: 'Tinker', it: 'Aggiustatutto' },
            description: {
              en: "You have proficiency with tinker's tools. You can spend 1 hour and 10 gp of materials to construct a Tiny clockwork device (AC 5, 1 hp) — a Clockwork Toy, Fire Starter, or Music Box — that ceases to function after 24 hours unless repaired. You can have up to three active at once.",
              it: 'Sei competente con gli strumenti da meccanico. Puoi spendere 1 ora e 10 mo di materiali per costruire un minuscolo congegno a orologeria (CA 5, 1 pf) — un giocattolo a molla, un accendifuoco o un carillon — che smette di funzionare dopo 24 ore a meno che non venga riparato. Puoi averne fino a tre attivi contemporaneamente.',
            },
          },
        ],
      },
      {
        id: 'deep-root-gnome',
        name: { en: 'Deep-Root Gnome', it: 'Gnomo dalle Radici Profonde' },
        description: {
          en: 'Living far below the sunlit world, deep-root gnomes have grown attuned to the slow, patient rhythms of stone and root.',
          it: 'Vivendo ben al di sotto del mondo baciato dal sole, gli gnomi dalle radici profonde si sono sintonizzati con i ritmi lenti e pazienti della pietra e delle radici.',
        },
        abilityBonuses: { wis: 1 },
        source: 'original',
        traits: [
          { id: 'deep-root-gnome-nature', name: { en: 'Root Sense', it: 'Senso delle Radici' }, description: { en: 'You have proficiency in the Nature skill.', it: 'Sei competente nell’abilità Natura.' } },
          { id: 'deep-root-gnome-poison-resistance', name: { en: 'Deep Blood', it: 'Sangue Profondo' }, description: { en: 'You have resistance to poison damage.', it: 'Hai resistenza al danno da veleno.' } },
        ],
      },
      {
        id: 'fairground-gnome',
        name: { en: 'Fairground Gnome', it: 'Gnomo della Fiera Errante' },
        description: {
          en: 'Born into a life of traveling fairs and street performances, fairground gnomes know how to win over any crowd.',
          it: 'Nati in una vita fatta di fiere itineranti e spettacoli di strada, gli gnomi della fiera errante sanno come conquistare qualsiasi pubblico.',
        },
        abilityBonuses: { cha: 1 },
        source: 'original',
        traits: [
          { id: 'fairground-gnome-performance', name: { en: 'Crowd-Pleaser', it: 'Intrattenitore Nato' }, description: { en: 'You have proficiency in the Performance skill.', it: 'Sei competente nell’abilità Intrattenere.' } },
          { id: 'fairground-gnome-persuasion', name: { en: 'Fast Talker', it: 'Parlantina Sciolta' }, description: { en: 'You have proficiency in the Persuasion skill.', it: 'Sei competente nell’abilità Persuasione.' } },
        ],
      },
    ],
  },
  {
    id: 'half-elf',
    name: { en: 'Half-Elf', it: 'Mezzelfo' },
    description: {
      en: 'Walking in two worlds but truly belonging to neither, half-elves combine what some call the best qualities of their elf and human parents.',
      it: 'Camminando tra due mondi senza appartenere davvero a nessuno dei due, i mezzelfi uniscono quelle che alcuni definiscono le migliori qualità dei loro genitori elfi e umani.',
    },
    abilityBonuses: { cha: 2 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Elvish', 'One extra language of your choice'],
    source: 'SRD5.1',
    traits: [
      { id: 'half-elf-ability-choice', name: { en: 'Ability Score Increase (choice)', it: 'Aumento di Caratteristica (a scelta)' }, description: { en: 'Two ability scores of your choice (other than Charisma) each increase by 1.', it: 'Due caratteristiche a tua scelta (diverse dal Carisma) aumentano ciascuna di 1.' } },
      { id: 'half-elf-darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).', it: 'Vedi nella penombra entro 18 metri come se fosse luce intensa, e nell’oscurità come se fosse penombra (senza percepire i colori).' } },
      { id: 'half-elf-fey-ancestry', name: { en: 'Fey Ancestry', it: 'Ascendenza Fatata' }, description: { en: "You have advantage on saving throws against being charmed, and magic can't put you to sleep.", it: 'Hai vantaggio ai tiri salvezza contro l’essere affascinato, e la magia non può metterti a dormire.' } },
      { id: 'half-elf-skill-versatility', name: { en: 'Skill Versatility', it: 'Versatilità nelle Abilità' }, description: { en: 'You gain proficiency in two skills of your choice.', it: 'Ottieni competenza in due abilità a tua scelta.' } },
    ],
    subraces: [
      {
        id: 'wildborn-half-elf',
        name: { en: 'Wildborn Half-Elf', it: 'Mezzelfo Selvatico' },
        description: {
          en: 'Raised at the edge of the wild rather than in elf or human halls, wildborn half-elves are as comfortable under open sky as any ranger.',
          it: 'Cresciuti ai margini della natura selvaggia anziché nelle sale degli elfi o degli umani, i mezzelfi selvatici si trovano a proprio agio sotto il cielo aperto quanto qualsiasi ramingo.',
        },
        abilityBonuses: { wis: 1 },
        source: 'original',
        traits: [
          { id: 'wildborn-half-elf-survival', name: { en: 'Wild Instinct', it: 'Istinto Selvatico' }, description: { en: 'You have proficiency in the Survival skill.', it: 'Sei competente nell’abilità Sopravvivenza.' } },
          { id: 'wildborn-half-elf-quick', name: { en: 'Light Step', it: 'Passo Leggero' }, description: { en: 'Your walking speed increases by 5 feet.', it: 'La tua velocità sul terreno aumenta di 1,5 metri.' } },
        ],
      },
      {
        id: 'cityborn-half-elf',
        name: { en: 'Cityborn Half-Elf', it: 'Mezzelfo di Città' },
        description: {
          en: 'Raised amid crowded markets and noble courts, cityborn half-elves learn early how to read a room and turn a phrase.',
          it: 'Cresciuti tra mercati affollati e corti nobiliari, i mezzelfi di città imparano presto a leggere una stanza e a trovare le parole giuste.',
        },
        abilityBonuses: { int: 1 },
        source: 'original',
        traits: [
          { id: 'cityborn-half-elf-silver-tongue', name: { en: 'Silver Tongue', it: 'Lingua d’Argento' }, description: { en: 'You have proficiency in the Persuasion skill.', it: 'Sei competente nell’abilità Persuasione.' } },
          { id: 'cityborn-half-elf-extra-language', name: { en: 'Extra Language', it: 'Lingua Extra' }, description: { en: 'You can speak, read, and write one extra language of your choice.', it: 'Sai parlare, leggere e scrivere una lingua extra a tua scelta.' } },
        ],
      },
    ],
  },
  {
    id: 'half-orc',
    name: { en: 'Half-Orc', it: 'Mezzorco' },
    description: {
      en: 'Half-orcs bear the traits of their two vastly different heritages, forever standing apart from human and orc society alike.',
      it: 'I mezzorchi portano i tratti delle loro due eredità profondamente diverse, restando per sempre ai margini sia della società umana sia di quella orchesca.',
    },
    abilityBonuses: { str: 2, con: 1 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Orc'],
    source: 'SRD5.1',
    traits: [
      { id: 'half-orc-darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).', it: 'Vedi nella penombra entro 18 metri come se fosse luce intensa, e nell’oscurità come se fosse penombra (senza percepire i colori).' } },
      { id: 'half-orc-menacing', name: { en: 'Menacing', it: 'Minaccioso' }, description: { en: 'You gain proficiency in the Intimidation skill.', it: 'Ottieni competenza nell’abilità Intimidire.' } },
      { id: 'half-orc-relentless-endurance', name: { en: 'Relentless Endurance', it: 'Resistenza Instancabile' }, description: { en: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. Usable once per long rest.', it: 'Quando vieni ridotto a 0 punti ferita ma non ucciso all’istante, puoi scendere a 1 punto ferita invece che a 0. Utilizzabile una volta per riposo lungo.' } },
      { id: 'half-orc-savage-attacks', name: { en: 'Savage Attacks', it: 'Attacchi Selvaggi' }, description: { en: 'When you score a critical hit with a melee weapon attack, you can roll one additional weapon damage die and add it to the extra damage of the critical hit.', it: 'Quando infliggi un colpo critico con un attacco in mischia, puoi tirare un dado da danno dell’arma aggiuntivo e aggiungerlo al danno extra del colpo critico.' } },
    ],
    subraces: [
      {
        id: 'frontier-half-orc',
        name: { en: 'Frontier Half-Orc', it: 'Mezzorco di Frontiera' },
        description: {
          en: 'Living on the edge of untamed lands, frontier half-orcs have made peace with a harsh world that others fear to enter.',
          it: 'Vivendo ai margini di terre incontaminate, i mezzorchi di frontiera hanno fatto pace con un mondo ostile che altri temono di attraversare.',
        },
        abilityBonuses: { wis: 1 },
        source: 'original',
        traits: [
          { id: 'frontier-half-orc-survival', name: { en: 'Wilderness Instinct', it: 'Istinto Selvaggio' }, description: { en: 'You have proficiency in the Survival skill.', it: 'Sei competente nell’abilità Sopravvivenza.' } },
          { id: 'frontier-half-orc-fearless', name: { en: 'Fearless Heart', it: 'Cuore Impavido' }, description: { en: 'You have advantage on saving throws against being frightened.', it: 'Hai vantaggio ai tiri salvezza contro la condizione spaventato.' } },
        ],
      },
      {
        id: 'warband-half-orc',
        name: { en: 'Warband Half-Orc', it: 'Mezzorco della Banda Guerriera' },
        description: {
          en: 'Raised within a tight-knit warband, these half-orcs measure their worth in strength of arm and loyalty to their kin-in-arms.',
          it: 'Cresciuti all’interno di una banda guerriera molto unita, questi mezzorchi misurano il proprio valore nella forza del braccio e nella lealtà verso i loro compagni d’armi.',
        },
        abilityBonuses: { str: 1 },
        source: 'original',
        traits: [
          { id: 'warband-half-orc-athletics', name: { en: 'Battle-Hardened Frame', it: 'Corpo Temprato dalla Battaglia' }, description: { en: 'You have proficiency in the Athletics skill.', it: 'Sei competente nell’abilità Atletica.' } },
          { id: 'warband-half-orc-grip', name: { en: 'Iron Grip', it: 'Presa di Ferro' }, description: { en: 'You have advantage on checks and saving throws made to escape a grapple or to avoid being knocked prone.', it: 'Hai vantaggio alle prove e ai tiri salvezza effettuati per liberarti da una presa o per evitare di cadere prono.' } },
        ],
      },
    ],
  },
  {
    id: 'tiefling',
    name: { en: 'Tiefling', it: 'Tiefling' },
    description: {
      en: 'To be greeted with stares and whispers, to be treated with suspicion and fear: this is the lot in life for tieflings, whose infernal descent is written in their features.',
      it: 'Essere accolti con sguardi e sussurri, essere trattati con sospetto e paura: questa è la sorte dei tiefling, la cui discendenza infernale è scritta nei loro tratti.',
    },
    abilityBonuses: { int: 1, cha: 2 },
    speed: 30,
    size: 'medium',
    languages: ['Common', 'Infernal'],
    source: 'SRD5.1',
    traits: [
      { id: 'tiefling-darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, description: { en: 'You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light (no color).', it: 'Vedi nella penombra entro 18 metri come se fosse luce intensa, e nell’oscurità come se fosse penombra (senza percepire i colori).' } },
      { id: 'tiefling-hellish-resistance', name: { en: 'Hellish Resistance', it: 'Resistenza Infernale' }, description: { en: 'You have resistance to fire damage.', it: 'Hai resistenza al danno da fuoco.' } },
      {
        id: 'tiefling-infernal-legacy',
        name: { en: 'Infernal Legacy', it: 'Retaggio Infernale' },
        description: {
          en: 'You know the thaumaturgy cantrip. At 3rd level you can cast hellish rebuke once per long rest as a 2nd-level spell, and at 5th level you can cast darkness once per long rest. Charisma is your spellcasting ability for these spells.',
          it: 'Conosci il trucchetto taumaturgia. Al 3° livello puoi lanciare rimprovero infernale una volta per riposo lungo come incantesimo di 2° livello, e al 5° livello puoi lanciare oscurità una volta per riposo lungo. Il Carisma è la tua caratteristica da incantatore per questi incantesimi.',
        },
      },
    ],
    subraces: [
      {
        id: 'abyss-touched-tiefling',
        name: { en: 'Abyss-Touched Tiefling', it: 'Tiefling Toccato dall’Abisso' },
        description: {
          en: 'Their bloodline runs closer to the chaos of the Abyss than the order of the Hells, and it shows in a wilder, fiercer temperament.',
          it: 'La loro stirpe è più vicina al caos dell’Abisso che all’ordine degli Inferi, e questo si nota in un temperamento più selvaggio e feroce.',
        },
        abilityBonuses: { str: 1 },
        source: 'original',
        traits: [
          { id: 'abyss-touched-tiefling-poison-resistance', name: { en: 'Abyssal Blood', it: 'Sangue Abissale' }, description: { en: 'You have resistance to poison damage.', it: 'Hai resistenza al danno da veleno.' } },
          { id: 'abyss-touched-tiefling-intimidating', name: { en: 'Fearsome Presence', it: 'Presenza Spaventosa' }, description: { en: 'You have proficiency in the Intimidation skill.', it: 'Sei competente nell’abilità Intimidire.' } },
        ],
      },
      {
        id: 'old-blood-tiefling',
        name: { en: 'Old-Blood Tiefling', it: 'Tiefling di Sangue Antico' },
        description: {
          en: 'Descended from a fiendish pact struck generations ago, old-blood tieflings carry faint, half-remembered echoes of eldritch knowledge.',
          it: 'Discendenti di un patto infernale stretto generazioni fa, i tiefling di sangue antico portano echi flebili e a metà dimenticati di una conoscenza ultraterrena.',
        },
        abilityBonuses: { wis: 1 },
        source: 'original',
        traits: [
          { id: 'old-blood-tiefling-arcana', name: { en: 'Inherited Lore', it: 'Sapienza Ereditata' }, description: { en: 'You have proficiency in the Arcana skill.', it: 'Sei competente nell’abilità Arcano.' } },
          { id: 'old-blood-tiefling-guidance', name: { en: 'Whispered Guidance', it: 'Guida Sussurrata' }, description: { en: 'You know the Guidance cantrip. Charisma is your spellcasting ability for it.', it: 'Conosci il trucchetto Guida. Il Carisma è la tua caratteristica da incantatore per esso.' } },
        ],
      },
    ],
  },
]

export const RACES_BY_ID: Record<string, Race> = Object.fromEntries(RACES.map((r) => [r.id, r]))

export function getRace(id: string): Race | undefined {
  return RACES_BY_ID[id]
}
