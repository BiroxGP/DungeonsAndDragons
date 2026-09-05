import type { Spell } from '../../types/srd'

export const CANTRIPS: Spell[] = [
  {
    id: 'acid-splash', name: { en: 'Acid Splash', it: 'Spruzzo Acido' }, level: 0, school: 'Conjuration',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'You hurl a bubble of acid at one creature, or two creatures within 5 feet of each other. A target must succeed on a Dexterity save or take 1d6 acid damage (2d6 at 5th level, 3d6 at 11th, 4d6 at 17th).',
      it: 'Scagli una bolla di acido contro una creatura, o due creature entro 1,5 metri l’una dall’altra. Il bersaglio deve superare un tiro salvezza su Destrezza o subire 1d6 danni da acido (2d6 al 5° livello, 3d6 all’11°, 4d6 al 17°).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'chill-touch', name: { en: 'Chill Touch', it: 'Tocco Gelido' }, level: 0, school: 'Necromancy',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: '1 round',
    classes: ['sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A ghostly skeletal hand assails a creature. Ranged spell attack; on a hit, 1d8 necrotic damage (scaling with level) and the target can’t regain hit points until your next turn. Against undead, it also has disadvantage on attacks against you until the end of your next turn.',
      it: 'Una spettrale mano scheletrica assale una creatura. Attacco con incantesimo a distanza; se colpisce, 1d8 danni necrotici (che aumentano col livello) e il bersaglio non può recuperare punti ferita fino al tuo prossimo turno. Contro i non morti, ha anche svantaggio agli attacchi contro di te fino alla fine del tuo prossimo turno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'dancing-lights', name: { en: 'Dancing Lights', it: 'Luci Danzanti' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Create up to four torch-sized lights (or combine into one Medium humanoid shape) that hover and shed dim light; move them up to 60 feet as a bonus action.',
      it: 'Crei fino a quattro luci delle dimensioni di una torcia (o le unisci in un’unica forma umanoide di taglia Media) che fluttuano e diffondono penombra; le muovi fino a 18 metri come azione bonus.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'druidcraft', name: { en: 'Druidcraft', it: 'Arte Druidica' }, level: 0, school: 'Transmutation',
    castingTime: '1 action', range: '30 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['druid'],
    description: {
      en: 'Create a minor nature effect: predict the weather for 24 hours, make a flower bloom, create a harmless sensory effect, or light/snuff a small flame.',
      it: 'Crei un piccolo effetto naturale: prevedi il tempo per le prossime 24 ore, fai sbocciare un fiore, crei un innocuo effetto sensoriale, oppure accendi/spegni una piccola fiamma.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'eldritch-blast', name: { en: 'Eldritch Blast', it: 'Scoppio Occulto' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['warlock'],
    description: {
      en: 'A beam of crackling energy. Ranged spell attack; on a hit, 1d10 force damage. Creates an additional beam at 5th, 11th, and 17th level (can target the same or different creatures).',
      it: 'Un raggio di energia crepitante. Attacco con incantesimo a distanza; se colpisce, 1d10 danni da forza. Crea un raggio aggiuntivo al 5°, 11° e 17° livello (può bersagliare la stessa creatura o creature diverse).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'fire-bolt', name: { en: 'Fire Bolt', it: 'Dardo di Fuoco' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Hurl a mote of fire. Ranged spell attack; on a hit, 1d10 fire damage (scaling with level), igniting flammable objects.',
      it: 'Scagli un frammento di fuoco. Attacco con incantesimo a distanza; se colpisce, 1d10 danni da fuoco (che aumentano col livello), incendiando gli oggetti infiammabili.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'guidance', name: { en: 'Guidance', it: 'Guida' }, level: 0, school: 'Divination',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Concentration, up to 1 minute',
    classes: ['cleric', 'druid'],
    description: {
      en: 'Touch a willing creature; once before the spell ends it can add 1d4 to one ability check of its choice.',
      it: 'Tocchi una creatura consenziente; una volta prima che l’incantesimo termini, può aggiungere 1d4 a una prova di caratteristica a sua scelta.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'light', name: { en: 'Light', it: 'Luce' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: 'Touch', components: 'V, M', duration: '1 hour',
    classes: ['bard', 'cleric', 'sorcerer', 'wizard'],
    description: {
      en: 'Touch an object; it sheds bright light in a 20-foot radius and dim light for an additional 20 feet, in a color of your choice, until dismissed.',
      it: 'Tocchi un oggetto; questo diffonde luce intensa in un raggio di 6 metri e penombra per altri 6 metri, in un colore a tua scelta, finché non lo dissolvi.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'mage-hand', name: { en: 'Mage Hand', it: 'Manomagica' }, level: 0, school: 'Conjuration',
    castingTime: '1 action', range: '30 feet', components: 'V, S', duration: '1 minute',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A spectral hand appears and can manipulate objects, open unlocked doors/containers, or carry up to 10 pounds, at your command.',
      it: 'Appare una mano spettrale che può manipolare oggetti, aprire porte/contenitori non chiusi a chiave, o trasportare fino a 4,5 kg, su tuo comando.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'mending', name: { en: 'Mending', it: 'Riparare' }, level: 0, school: 'Transmutation',
    castingTime: '1 minute', range: 'Touch', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['bard', 'cleric', 'druid', 'sorcerer', 'wizard'],
    description: {
      en: 'Repairs a single break or tear (no larger than 1 foot) in an object you touch, leaving no trace of damage.',
      it: 'Ripara una singola rottura o strappo (non più grande di 30 cm) in un oggetto che tocchi, senza lasciare traccia del danno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'message', name: { en: 'Message', it: 'Messaggio' }, level: 0, school: 'Transmutation',
    castingTime: '1 action', range: '120 feet', components: 'V, S, M', duration: '1 round',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Whisper a message to a creature you point at within range; only it hears you and can reply in a whisper only you hear.',
      it: 'Sussurri un messaggio a una creatura che indichi entro gittata; solo lei ti sente e può rispondere con un sussurro che solo tu senti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'minor-illusion', name: { en: 'Minor Illusion', it: 'Illusione Minore' }, level: 0, school: 'Illusion',
    castingTime: '1 action', range: '30 feet', components: 'S, M', duration: '1 minute',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'Create a sound or an image of an object (no larger than a 5-foot cube) within range for the duration; investigation check against your DC reveals it as illusory.',
      it: 'Crei un suono o l’immagine di un oggetto (non più grande di un cubo di 1,5 metri) entro gittata per la durata; una prova di indagine contro la tua CD ne rivela la natura illusoria.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'poison-spray', name: { en: 'Poison Spray', it: 'Spruzzo Velenoso' }, level: 0, school: 'Conjuration',
    castingTime: '1 action', range: '10 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['druid', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'Project a puff of noxious gas at a creature; it must succeed on a Constitution save or take 1d12 poison damage (scaling with level).',
      it: 'Proietti una folata di gas nocivo contro una creatura; questa deve superare un tiro salvezza su Costituzione o subire 1d12 danni da veleno (che aumentano col livello).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'prestidigitation', name: { en: 'Prestidigitation', it: 'Prestidigitazione' }, level: 0, school: 'Transmutation',
    castingTime: '1 action', range: '10 feet', components: 'V, S', duration: 'Up to 1 hour',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A minor magic trick: a harmless sensory effect, light/snuff a small flame, clean or soil an object, chill/warm/flavor food, mark a surface, or create a tiny trinket/illusion. Up to three non-instantaneous effects active at once.',
      it: 'Un piccolo trucco magico: un innocuo effetto sensoriale, accendere/spegnere una piccola fiamma, pulire o sporcare un oggetto, raffreddare/scaldare/insaporire del cibo, marcare una superficie, oppure creare un piccolo ninnolo/illusione. Fino a tre effetti non istantanei attivi contemporaneamente.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'produce-flame', name: { en: 'Produce Flame', it: 'Produrre Fiamma' }, level: 0, school: 'Conjuration',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: '10 minutes',
    classes: ['druid'],
    description: {
      en: 'A flickering flame appears in your hand, shedding light, and can be hurled at a creature within 30 feet (ranged spell attack, 1d8 fire damage, scaling with level), ending the spell.',
      it: 'Una fiamma tremolante appare nella tua mano, illuminando l’area, e può essere scagliata contro una creatura entro 9 metri (attacco con incantesimo a distanza, 1d8 danni da fuoco, che aumentano col livello), terminando l’incantesimo.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'ray-of-frost', name: { en: 'Ray of Frost', it: 'Raggio di Gelo' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'A frigid beam. Ranged spell attack; on a hit, 1d8 cold damage (scaling with level) and the target’s speed is reduced by 10 feet until your next turn.',
      it: 'Un raggio gelido. Attacco con incantesimo a distanza; se colpisce, 1d8 danni da freddo (che aumentano col livello) e la velocità del bersaglio si riduce di 3 metri fino al tuo prossimo turno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'resistance', name: { en: 'Resistance', it: 'Resistenza' }, level: 0, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['cleric', 'druid'],
    description: {
      en: 'Touch a willing creature; once before the spell ends it can add 1d4 to one saving throw of its choice.',
      it: 'Tocchi una creatura consenziente; una volta prima che l’incantesimo termini, può aggiungere 1d4 a un tiro salvezza a sua scelta.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'sacred-flame', name: { en: 'Sacred Flame', it: 'Fiamma Sacra' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['cleric'],
    description: {
      en: 'Flame-like radiance descends on a creature (no cover benefit for the save); it must succeed on a Dexterity save or take 1d8 radiant damage (scaling with level).',
      it: 'Un fulgore simile a una fiamma scende su una creatura (che non beneficia di copertura per il tiro salvezza); deve superare un tiro salvezza su Destrezza o subire 1d8 danni radiosi (che aumentano col livello).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'shillelagh', name: { en: 'Shillelagh', it: 'Randello Incantato' }, level: 0, school: 'Transmutation',
    castingTime: '1 bonus action', range: 'Touch', components: 'V, S, M', duration: '1 minute',
    classes: ['druid'],
    description: {
      en: 'Imbue a club or quarterstaff so you can use your spellcasting ability instead of Strength for its attack/damage rolls, and its damage die becomes a d8; it also counts as magical.',
      it: 'Imbevi un randello o un bastone ferrato in modo da poter usare la tua caratteristica da incantatore invece della Forza per i suoi tiri per colpire e per il danno, e il suo dado da danno diventa un d8; conta inoltre come magico.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'shocking-grasp', name: { en: 'Shocking Grasp', it: 'Tocco Elettrico' }, level: 0, school: 'Evocation',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Melee spell attack (advantage if the target wears metal armor); on a hit, 1d8 lightning damage (scaling with level) and the target can’t take reactions until the start of its next turn.',
      it: 'Attacco con incantesimo in mischia (vantaggio se il bersaglio indossa un’armatura metallica); se colpisce, 1d8 danni da fulmine (che aumentano col livello) e il bersaglio non può effettuare reazioni fino all’inizio del suo prossimo turno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'spare-the-dying', name: { en: 'Spare the Dying', it: 'Salvare dalla Morte' }, level: 0, school: 'Necromancy',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Instantaneous',
    classes: ['cleric'],
    description: {
      en: 'Touch a living creature with 0 hit points; it becomes stable. No effect on undead or constructs.',
      it: 'Tocchi una creatura vivente con 0 punti ferita; questa si stabilizza. Nessun effetto su non morti o costrutti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'thaumaturgy', name: { en: 'Thaumaturgy', it: 'Taumaturgia' }, level: 0, school: 'Transmutation',
    castingTime: '1 action', range: '30 feet', components: 'V', duration: 'Up to 1 minute',
    classes: ['cleric'],
    description: {
      en: 'Manifest a minor wonder: boom your voice, flicker flames, cause tremors, create a sound, slam/open a door, or alter your eyes. Up to three 1-minute effects active at once.',
      it: 'Manifesti un piccolo prodigio: amplifichi la tua voce, fai tremolare le fiamme, provochi tremori, crei un suono, sbatti/apri una porta, oppure alteri i tuoi occhi. Fino a tre effetti da 1 minuto attivi contemporaneamente.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'true-strike', name: { en: 'True Strike', it: 'Vero Colpo' }, level: 0, school: 'Divination',
    castingTime: '1 action', range: '30 feet', components: 'S', duration: 'Concentration, up to 1 round',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'Point at a target; on your next turn you gain advantage on your first attack roll against it, provided the spell hasn’t ended.',
      it: 'Punti un bersaglio; nel tuo prossimo turno ottieni vantaggio al tuo primo tiro per colpire contro di esso, purché l’incantesimo non sia terminato.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'vicious-mockery', name: { en: 'Vicious Mockery', it: 'Scherno Crudele' }, level: 0, school: 'Enchantment',
    castingTime: '1 action', range: '60 feet', components: 'V', duration: 'Instantaneous',
    classes: ['bard'],
    description: {
      en: 'A string of insults; the target must succeed on a Wisdom save or take 1d4 psychic damage (scaling with level) and have disadvantage on its next attack roll before the end of its next turn.',
      it: 'Una raffica di insulti; il bersaglio deve superare un tiro salvezza su Saggezza o subire 1d4 danni psichici (che aumentano col livello) e avere svantaggio al suo prossimo tiro per colpire prima della fine del suo prossimo turno.',
    },
    source: 'SRD5.1',
  },
]
