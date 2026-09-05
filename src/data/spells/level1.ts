import type { Spell } from '../../types/srd'

export const LEVEL_1_SPELLS: Spell[] = [
  {
    id: 'alarm', name: { en: 'Alarm', it: 'Allarme' }, level: 1, school: 'Abjuration (ritual)',
    castingTime: '1 minute', range: '30 feet', components: 'V, S, M', duration: '8 hours',
    classes: ['ranger', 'wizard'],
    description: {
      en: 'Ward a door, window, or area (up to a 20-foot cube) against intrusion; an alarm (mental ping or audible bell) alerts you when a creature you haven’t excluded touches or enters it.',
      it: 'Proteggi una porta, una finestra o un’area (fino a un cubo di 6 metri) da intrusioni; un allarme (un segnale mentale o una campanella udibile) ti avvisa quando una creatura non esclusa la tocca o vi entra.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'animal-friendship', name: { en: 'Animal Friendship', it: 'Amicizia con gli Animali' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: '24 hours',
    classes: ['bard', 'druid', 'ranger'],
    description: {
      en: 'Convince a beast (Intelligence 3 or lower) you mean no harm: it must succeed on a Wisdom save or be charmed by you for the duration. Ends if you or a companion harms it.',
      it: 'Convinci una bestia (Intelligenza 3 o inferiore) che non le vuoi fare del male: deve superare un tiro salvezza su Saggezza o essere affascinata da te per la durata. Termina se tu o un compagno le fate del male.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'bane', name: { en: 'Bane', it: 'Maledizione' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['bard', 'cleric'],
    description: {
      en: 'Up to 3 creatures must make a Charisma save; on a failure, whenever a target makes an attack roll or save before the spell ends it must subtract a d4 from the roll.',
      it: 'Fino a 3 creature devono effettuare un tiro salvezza su Carisma; in caso di fallimento, ogni volta che un bersaglio effettua un tiro per colpire o un tiro salvezza prima che l’incantesimo termini deve sottrarre un d4 dal tiro.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'bless', name: { en: 'Bless', it: 'Benedizione' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['cleric', 'paladin'],
    description: {
      en: 'Up to 3 creatures of your choice add 1d4 to attack rolls and saving throws made before the spell ends.',
      it: 'Fino a 3 creature a tua scelta aggiungono 1d4 ai tiri per colpire e ai tiri salvezza effettuati prima che l’incantesimo termini.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'burning-hands', name: { en: 'Burning Hands', it: 'Mani Ustionanti' }, level: 1, school: 'Evocation',
    castingTime: '1 action', range: 'Self (15-foot cone)', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Each creature in a 15-foot cone makes a Dexterity save, taking 3d6 fire damage on a failure (half on a success); ignites flammable objects.',
      it: 'Ogni creatura in un cono di 4,5 metri effettua un tiro salvezza su Destrezza, subendo 3d6 danni da fuoco in caso di fallimento (la metà in caso di successo); incendia gli oggetti infiammabili.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'charm-person', name: { en: 'Charm Person', it: 'Charme su Persone' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '30 feet', components: 'V, S', duration: '1 hour',
    classes: ['bard', 'druid', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A humanoid must succeed on a Wisdom save (with advantage if you’re fighting it) or be charmed by you until the spell ends or you/your companions harm it. It knows it was charmed once the spell ends.',
      it: 'Un umanoide deve superare un tiro salvezza su Saggezza (con vantaggio se lo stai combattendo) o essere affascinato da te finché l’incantesimo non termina o tu/i tuoi compagni gli fate del male. Sa di essere stato affascinato una volta che l’incantesimo termina.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'color-spray', name: { en: 'Color Spray', it: 'Raggio Colorato' }, level: 1, school: 'Illusion',
    castingTime: '1 action', range: 'Self (15-foot cone)', components: 'V, S, M', duration: '1 round',
    classes: ['sorcerer'],
    description: {
      en: 'Roll 6d10; creatures in the cone, lowest current HP first, are blinded until the spell ends, using up the rolled total.',
      it: 'Tira 6d10; le creature nel cono, a partire da quella con meno punti ferita attuali, vengono accecate finché l’incantesimo non termina, consumando il totale ottenuto.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'command', name: { en: 'Command', it: 'Comando' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '60 feet', components: 'V', duration: '1 round',
    classes: ['cleric', 'paladin'],
    description: {
      en: 'Speak a one-word command (Approach, Drop, Flee, Grovel, Halt, or similar) to a creature you can see; it must succeed on a Wisdom save or follow the command on its next turn.',
      it: 'Pronunci un comando di una sola parola (Avvicinati, Lascia, Fuggi, Prostrati, Fermati o simili) a una creatura che puoi vedere; deve superare un tiro salvezza su Saggezza o seguire il comando nel suo prossimo turno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'comprehend-languages', name: { en: 'Comprehend Languages', it: 'Comprendere le Lingue' }, level: 1, school: 'Divination (ritual)',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: '1 hour',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'Understand the literal meaning of any spoken language you hear, and any written language you touch, for the duration.',
      it: 'Comprendi il significato letterale di qualsiasi lingua parlata tu senta, e di qualsiasi lingua scritta tu tocchi, per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'create-or-destroy-water', name: { en: 'Create or Destroy Water', it: 'Creare o Distruggere Acqua' }, level: 1, school: 'Transmutation',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['cleric', 'druid'],
    description: {
      en: 'Create up to 10 gallons of clean water, or destroy up to 10 gallons of water / fog in a 30-foot cube.',
      it: 'Crei fino a 40 litri di acqua pulita, oppure distruggi fino a 40 litri di acqua o nebbia in un cubo di 9 metri.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'cure-wounds', name: { en: 'Cure Wounds', it: 'Curare le Ferite' }, level: 1, school: 'Evocation',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Instantaneous',
    classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger'],
    description: {
      en: 'A creature you touch regains 1d8 + your spellcasting ability modifier hit points. No effect on undead or constructs.',
      it: 'Una creatura che tocchi recupera 1d8 + il tuo modificatore di caratteristica da incantatore punti ferita. Nessun effetto su non morti o costrutti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'detect-evil-and-good', name: { en: 'Detect Evil and Good', it: 'Individuazione del Bene e del Male' }, level: 1, school: 'Divination',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: 'Concentration, up to 10 minutes',
    classes: ['cleric', 'paladin'],
    description: {
      en: 'Sense the presence and location of aberrations, celestials, elementals, fey, fiends, or undead, and consecrated/desecrated places or objects, within 30 feet.',
      it: 'Percepisci la presenza e la posizione di aberrazioni, creature celestiali, elementali, fatati, demoni o non morti, e di luoghi od oggetti consacrati/sconsacrati, entro 9 metri.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'detect-magic', name: { en: 'Detect Magic', it: 'Individuazione della Magia' }, level: 1, school: 'Divination (ritual)',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: 'Concentration, up to 10 minutes',
    classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'wizard'],
    description: {
      en: 'Sense the presence of magic within 30 feet; use your action to see a faint aura around a magical creature or object and learn its school.',
      it: 'Percepisci la presenza di magia entro 9 metri; usa la tua azione per vedere una debole aura attorno a una creatura o un oggetto magico e scoprirne la scuola.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'detect-poison-and-disease', name: { en: 'Detect Poison and Disease', it: 'Individuazione di Veleni e Malattie' }, level: 1, school: 'Divination (ritual)',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['cleric', 'druid', 'paladin', 'ranger'],
    description: {
      en: 'Sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet, and identify the kind.',
      it: 'Percepisci la presenza e la posizione di veleni, creature velenose e malattie entro 9 metri, e ne identifichi il tipo.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'disguise-self', name: { en: 'Disguise Self', it: 'Traveste' }, level: 1, school: 'Illusion',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: '1 hour',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Change your appearance (including clothing/gear), up to 1 foot shorter or taller, any build; fails physical inspection (Investigation vs. your save DC).',
      it: 'Cambi il tuo aspetto (inclusi abiti/equipaggiamento), fino a 30 cm più basso o più alto, qualsiasi corporatura; non regge a un’ispezione fisica (Indagare contro la tua CD).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'divine-favor', name: { en: 'Divine Favor', it: 'Favore Divino' }, level: 1, school: 'Evocation',
    castingTime: '1 bonus action', range: 'Self', components: 'V, S', duration: 'Concentration, up to 1 minute',
    classes: ['paladin'],
    description: {
      en: 'Your weapon attacks deal an extra 1d4 radiant damage on a hit until the spell ends.',
      it: 'I tuoi attacchi con armi infliggono 1d4 danni radiosi extra se colpiscono, finché l’incantesimo non termina.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'entangle', name: { en: 'Entangle', it: 'Aggrovigliare' }, level: 1, school: 'Conjuration',
    castingTime: '1 action', range: '90 feet', components: 'V, S', duration: 'Concentration, up to 1 minute',
    classes: ['druid', 'ranger'],
    description: {
      en: 'Weeds and vines sprout in a 20-foot square, making it difficult terrain; creatures there must succeed on a Strength save or be restrained until they break free.',
      it: 'Erbacce e viticci spuntano in un quadrato di 6 metri, rendendolo terreno difficile; le creature lì presenti devono superare un tiro salvezza su Forza o essere bloccate finché non si liberano.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'expeditious-retreat', name: { en: 'Expeditious Retreat', it: 'Ritirata Rapida' }, level: 1, school: 'Transmutation',
    castingTime: '1 bonus action', range: 'Self', components: 'V, S', duration: 'Concentration, up to 10 minutes',
    classes: ['sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'As a bonus action each turn until the spell ends, you can take the Dash action.',
      it: 'Come azione bonus in ogni turno finché l’incantesimo non termina, puoi intraprendere l’azione Scattare.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'faerie-fire', name: { en: 'Faerie Fire', it: 'Fuoco Fatuo' }, level: 1, school: 'Evocation',
    castingTime: '1 action', range: '60 feet', components: 'V', duration: 'Concentration, up to 1 minute',
    classes: ['bard', 'druid'],
    description: {
      en: 'Objects in a 20-foot cube are outlined in light; creatures failing a Dexterity save are too. Attacks against affected targets have advantage, and they can’t benefit from being invisible.',
      it: 'Gli oggetti in un cubo di 6 metri vengono delineati da una luce; lo stesso accade alle creature che falliscono un tiro salvezza su Destrezza. Gli attacchi contro i bersagli affetti hanno vantaggio, e questi non possono beneficiare dell’invisibilità.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'false-life', name: { en: 'False Life', it: 'Falsa Vita' }, level: 1, school: 'Necromancy',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: '1 hour',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Gain 1d4 + 4 temporary hit points for the duration.',
      it: 'Ottieni 1d4 + 4 punti ferita temporanei per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'feather-fall', name: { en: 'Feather Fall', it: 'Caduta Piuma' }, level: 1, school: 'Transmutation',
    castingTime: '1 reaction', range: '60 feet', components: 'V, M', duration: '1 minute',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Up to five falling creatures within range descend at 60 feet per round and take no falling damage if they land before the spell ends.',
      it: 'Fino a cinque creature in caduta entro gittata discendono a 18 metri per round e non subiscono danno da caduta se atterrano prima che l’incantesimo termini.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'find-familiar', name: { en: 'Find Familiar', it: 'Trova Famiglio' }, level: 1, school: 'Conjuration (ritual)',
    castingTime: '1 hour', range: '10 feet', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['wizard'],
    description: {
      en: 'Summon a familiar spirit (a chosen small animal form) that obeys your commands, can deliver touch spells for you, and lets you see/hear through it as an action.',
      it: 'Evochi uno spirito famiglio (in una piccola forma animale a tua scelta) che obbedisce ai tuoi comandi, può recapitare incantesimi da tocco per te, e ti permette di vedere/sentire attraverso di esso come azione.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'floating-disk', name: { en: 'Floating Disk', it: 'Disco Fluttuante' }, level: 1, school: 'Conjuration (ritual)',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: '1 hour',
    classes: ['wizard'],
    description: {
      en: 'Create a horizontal 3-foot force disk that follows you within 20 feet and can hold up to 500 pounds.',
      it: 'Crei un disco di forza orizzontale di 1 metro che ti segue entro 6 metri e può reggere fino a 225 kg.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'fog-cloud', name: { en: 'Fog Cloud', it: 'Nube di Nebbia' }, level: 1, school: 'Conjuration',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Concentration, up to 1 hour',
    classes: ['druid', 'ranger', 'sorcerer', 'wizard'],
    description: {
      en: 'A 20-foot-radius sphere of fog heavily obscures its area, lasting until dispersed by strong wind or the spell ends.',
      it: 'Una sfera di nebbia dal raggio di 6 metri oscura pesantemente la sua area, durando finché non viene dispersa da un vento forte o l’incantesimo termina.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'goodberry', name: { en: 'Goodberry', it: 'Bacche Nutrienti' }, level: 1, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['druid', 'ranger'],
    description: {
      en: 'Up to ten berries appear; eating one restores 1 hit point and provides a day’s nourishment. Lose potency after 24 hours.',
      it: 'Appaiono fino a dieci bacche; mangiarne una ripristina 1 punto ferita e fornisce il sostentamento di un giorno. Perdono efficacia dopo 24 ore.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'grease', name: { en: 'Grease', it: 'Untume' }, level: 1, school: 'Conjuration',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: '1 minute',
    classes: ['wizard'],
    description: {
      en: 'A 10-foot square becomes difficult terrain; creatures there when it appears, or that enter/end their turn there, must succeed on a Dexterity save or fall prone.',
      it: 'Un quadrato di 3 metri diventa terreno difficile; le creature lì presenti quando appare, o che vi entrano/finiscono il turno, devono superare un tiro salvezza su Destrezza o cadere prone.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'guiding-bolt', name: { en: 'Guiding Bolt', it: 'Dardo di Guida' }, level: 1, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: '1 round',
    classes: ['cleric'],
    description: {
      en: 'Ranged spell attack; on a hit, 4d6 radiant damage, and the next attack against the target before the end of your next turn has advantage.',
      it: 'Attacco con incantesimo a distanza; se colpisce, 4d6 danni radiosi, e il prossimo attacco contro il bersaglio prima della fine del tuo prossimo turno ha vantaggio.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'healing-word', name: { en: 'Healing Word', it: 'Parola di Guarigione' }, level: 1, school: 'Evocation',
    castingTime: '1 bonus action', range: '60 feet', components: 'V', duration: 'Instantaneous',
    classes: ['bard', 'cleric', 'druid'],
    description: {
      en: 'A creature you can see regains 1d4 + your spellcasting ability modifier hit points. No effect on undead or constructs.',
      it: 'Una creatura che puoi vedere recupera 1d4 + il tuo modificatore di caratteristica da incantatore punti ferita. Nessun effetto su non morti o costrutti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'hellish-rebuke', name: { en: 'Hellish Rebuke', it: 'Rimprovero Infernale' }, level: 1, school: 'Evocation',
    castingTime: '1 reaction', range: '60 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['warlock'],
    description: {
      en: 'In response to taking damage, the creature that damaged you must succeed on a Dexterity save or take 2d10 fire damage (half on a success).',
      it: 'In risposta a un danno subito, la creatura che ti ha danneggiato deve superare un tiro salvezza su Destrezza o subire 2d10 danni da fuoco (la metà in caso di successo).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'heroism', name: { en: 'Heroism', it: 'Eroismo' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Concentration, up to 1 minute',
    classes: ['bard', 'paladin'],
    description: {
      en: 'A willing creature becomes immune to being frightened and gains temporary hit points equal to your spellcasting modifier at the start of each of its turns.',
      it: 'Una creatura consenziente diventa immune alla condizione spaventato e ottiene punti ferita temporanei pari al tuo modificatore da incantatore all’inizio di ognuno dei suoi turni.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'hideous-laughter', name: { en: 'Hideous Laughter', it: 'Risata Orrenda' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['bard'],
    description: {
      en: 'A creature (Intelligence 5+) must succeed on a Wisdom save or fall prone, incapacitated with laughter for the duration; it can re-save at the end of each turn or when it takes damage.',
      it: 'Una creatura (Intelligenza 5+) deve superare un tiro salvezza su Saggezza o cadere prona, incapacitata dalle risate per la durata; può ripetere il tiro salvezza alla fine di ogni turno o quando subisce danno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'hunters-mark', name: { en: "Hunter's Mark", it: 'Marchio del Cacciatore' }, level: 1, school: 'Divination',
    castingTime: '1 bonus action', range: '90 feet', components: 'V', duration: 'Concentration, up to 1 hour',
    classes: ['ranger'],
    description: {
      en: 'Mark a creature you can see: you deal an extra 1d6 damage to it with weapon attacks and have advantage on Perception/Survival checks to find it, for the duration.',
      it: 'Marchi una creatura che puoi vedere: le infliggi 1d6 danno extra con gli attacchi con armi e hai vantaggio alle prove di Percezione/Sopravvivenza per rintracciarla, per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'identify', name: { en: 'Identify', it: 'Identificare' }, level: 1, school: 'Divination (ritual)',
    castingTime: '1 minute', range: 'Touch', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['bard', 'wizard'],
    description: {
      en: 'Touching a magic item (or a creature), learn its properties, attunement requirement, and remaining charges, and any spells affecting it.',
      it: 'Toccando un oggetto magico (o una creatura), scopri le sue proprietà, il requisito di sintonizzazione e le cariche rimanenti, e qualsiasi incantesimo che lo influenzi.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'illusory-script', name: { en: 'Illusory Script', it: 'Scritto Illusorio' }, level: 1, school: 'Illusion (ritual)',
    castingTime: '1 minute', range: 'Touch', components: 'S, M', duration: '10 days',
    classes: ['bard', 'warlock', 'wizard'],
    description: {
      en: 'Written text appears as an illusion to anyone but you or those you designate — an unintelligible or entirely different message to others.',
      it: 'Il testo scritto appare come un’illusione a chiunque tranne te o coloro che designi — un messaggio incomprensibile o completamente diverso per gli altri.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'inflict-wounds', name: { en: 'Inflict Wounds', it: 'Infliggere Ferite' }, level: 1, school: 'Necromancy',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Instantaneous',
    classes: ['cleric'],
    description: { en: 'Melee spell attack; on a hit, 3d10 necrotic damage.', it: 'Attacco con incantesimo in mischia; se colpisce, 3d10 danni necrotici.' },
    source: 'SRD5.1',
  },
  {
    id: 'jump', name: { en: 'Jump', it: 'Salto' }, level: 1, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '1 minute',
    classes: ['druid', 'ranger', 'sorcerer', 'wizard'],
    description: { en: 'A creature’s jump distance is tripled until the spell ends.', it: 'La distanza di salto di una creatura è triplicata finché l’incantesimo non termina.' },
    source: 'SRD5.1',
  },
  {
    id: 'longstrider', name: { en: 'Longstrider', it: 'Falcata Lunga' }, level: 1, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '1 hour',
    classes: ['bard', 'druid', 'ranger', 'wizard'],
    description: { en: 'A creature’s speed increases by 10 feet until the spell ends.', it: 'La velocità di una creatura aumenta di 3 metri finché l’incantesimo non termina.' },
    source: 'SRD5.1',
  },
  {
    id: 'mage-armor', name: { en: 'Mage Armor', it: 'Armatura del Mago' }, level: 1, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '8 hours',
    classes: ['sorcerer', 'wizard'],
    description: { en: 'A willing unarmored creature’s base AC becomes 13 + Dexterity modifier for the duration.', it: 'La CA base di una creatura consenziente senza armatura diventa 13 + il modificatore di Destrezza per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'magic-missile', name: { en: 'Magic Missile', it: 'Missile Incantato' }, level: 1, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: { en: 'Create three glowing darts, each dealing 1d4+1 force damage, striking simultaneously (one target or several); no attack roll needed.', it: 'Crei tre dardi luminosi, ciascuno che infligge 1d4+1 danni da forza, che colpiscono simultaneamente (un bersaglio o più); non serve alcun tiro per colpire.' },
    source: 'SRD5.1',
  },
  {
    id: 'protection-from-evil-and-good', name: { en: 'Protection from Evil and Good', it: 'Protezione dal Bene e dal Male' }, level: 1, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['cleric', 'paladin', 'warlock', 'wizard'],
    description: {
      en: 'A willing creature is protected against aberrations, celestials, elementals, fey, fiends, and undead: they have disadvantage attacking it, and it can’t be charmed/frightened/possessed by them.',
      it: 'Una creatura consenziente è protetta contro aberrazioni, creature celestiali, elementali, fatati, demoni e non morti: questi hanno svantaggio ad attaccarla, e non può essere affascinata/spaventata/posseduta da loro.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'purify-food-and-drink', name: { en: 'Purify Food and Drink', it: 'Purificare Cibo e Bevande' }, level: 1, school: 'Transmutation (ritual)',
    castingTime: '1 action', range: '10 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['cleric', 'druid', 'paladin'],
    description: {
      en: 'All nonmagical food and drink in a 5-foot-radius sphere is purified and rendered free of poison and disease.',
      it: 'Tutto il cibo e le bevande non magici in una sfera dal raggio di 1,5 metri vengono purificati e resi privi di veleno e malattie.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'sanctuary', name: { en: 'Sanctuary', it: 'Santuario' }, level: 1, school: 'Abjuration',
    castingTime: '1 bonus action', range: '30 feet', components: 'V, S, M', duration: '1 minute',
    classes: ['cleric'],
    description: {
      en: 'Any creature targeting the warded creature with an attack or harmful spell must first succeed on a Wisdom save or choose a new target; doesn’t protect from area effects. Ends if the warded creature attacks or casts a harmful spell.',
      it: 'Qualsiasi creatura che bersagli la creatura protetta con un attacco o un incantesimo dannoso deve prima superare un tiro salvezza su Saggezza o scegliere un nuovo bersaglio; non protegge dagli effetti ad area. Termina se la creatura protetta attacca o lancia un incantesimo dannoso.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'shield', name: { en: 'Shield', it: 'Scudo' }, level: 1, school: 'Abjuration',
    castingTime: '1 reaction', range: 'Self', components: 'V, S', duration: '1 round',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'In response to being hit or targeted by magic missile, gain +5 AC (including against the triggering attack) until the start of your next turn, and immunity to magic missile.',
      it: 'In risposta a un colpo subito o a essere bersagliato da missile incantato, ottieni +5 CA (anche contro l’attacco scatenante) fino all’inizio del tuo prossimo turno, e immunità a missile incantato.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'shield-of-faith', name: { en: 'Shield of Faith', it: 'Scudo della Fede' }, level: 1, school: 'Abjuration',
    castingTime: '1 bonus action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['cleric', 'paladin'],
    description: { en: 'A creature of your choice gains a +2 bonus to AC for the duration.', it: 'Una creatura a tua scelta ottiene un bonus di +2 alla CA per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'silent-image', name: { en: 'Silent Image', it: 'Immagine Silente' }, level: 1, school: 'Illusion',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Create a purely visual image (no larger than a 15-foot cube) that you can move with your action; investigation check against your save DC reveals it as illusory.',
      it: 'Crei un’immagine puramente visiva (non più grande di un cubo di 4,5 metri) che puoi muovere con la tua azione; una prova di indagine contro la tua CD ne rivela la natura illusoria.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'sleep', name: { en: 'Sleep', it: 'Sonno' }, level: 1, school: 'Enchantment',
    castingTime: '1 action', range: '90 feet', components: 'V, S, M', duration: '1 minute',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Roll 5d8; creatures within 20 feet of a point, lowest current HP first, fall unconscious, using up the rolled total. Undead and creatures immune to charm are unaffected.',
      it: 'Tira 5d8; le creature entro 6 metri da un punto, a partire da quella con meno punti ferita attuali, cadono prive di sensi, consumando il totale ottenuto. Non morti e creature immuni al fascino non sono affetti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'speak-with-animals', name: { en: 'Speak with Animals', it: 'Parlare con gli Animali' }, level: 1, school: 'Divination (ritual)',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: '10 minutes',
    classes: ['bard', 'druid', 'ranger'],
    description: { en: 'Comprehend and verbally communicate with beasts for the duration.', it: 'Comprendi e comunichi verbalmente con le bestie per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'thunderwave', name: { en: 'Thunderwave', it: 'Onda Tonante' }, level: 1, school: 'Evocation',
    castingTime: '1 action', range: 'Self (15-foot cube)', components: 'V, S', duration: 'Instantaneous',
    classes: ['bard', 'druid', 'sorcerer', 'wizard'],
    description: {
      en: 'Each creature in a 15-foot cube from you makes a Constitution save, taking 2d8 thunder damage and being pushed 10 feet on a failure (half damage, no push on a success). Audible boom out to 300 feet.',
      it: 'Ogni creatura in un cubo di 4,5 metri da te effettua un tiro salvezza su Costituzione, subendo 2d8 danni da tuono ed essendo spinta di 3 metri in caso di fallimento (metà danno, nessuna spinta in caso di successo). Boato udibile fino a 90 metri.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'unseen-servant', name: { en: 'Unseen Servant', it: 'Servitore Invisibile' }, level: 1, school: 'Conjuration (ritual)',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: '1 hour',
    classes: ['bard', 'warlock', 'wizard'],
    description: {
      en: 'Create an invisible, mindless force (AC 10, 1 hp, Str 2) that performs simple tasks (fetching, cleaning, serving) on your command.',
      it: 'Crei una forza invisibile e priva di intelletto (CA 10, 1 pf, Forza 2) che svolge semplici compiti (portare oggetti, pulire, servire) su tuo comando.',
    },
    source: 'SRD5.1',
  },
]
