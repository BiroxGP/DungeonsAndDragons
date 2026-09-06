import type { Background } from '../types/srd'

/**
 * SRD 5.1 publishes exactly one sample background (Acolyte, source: 'SRD5.1')
 * — Criminal, Folk Hero, Noble, Sage, etc. are PHB-only and not part of the
 * open content, so they can't be transcribed here. The rest (source:
 * 'original') are original backgrounds written for this project using only
 * SRD-legal building blocks (the skill list, generic equipment, an invented
 * feature) via the "Customizing a Background" rule (SRD 5.1, p.59) — not a
 * reproduction of any WotC book's specific background text.
 */
export const BACKGROUNDS: Background[] = [
  {
    id: 'acolyte',
    name: { en: 'Acolyte', it: 'Accolito' },
    description: {
      en: 'You have spent your life in the service of a temple to a specific god or pantheon, acting as an intermediary between the realm of the holy and the mortal world.',
      it: 'Hai passato la tua vita al servizio di un tempio dedicato a uno specifico dio o pantheon, fungendo da intermediario tra il regno del sacro e il mondo mortale.',
    },
    skillProficiencies: ['insight', 'religion'],
    toolProficiencies: [],
    languages: 2,
    equipment: {
      en: 'A holy symbol, a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp.',
      it: 'Un simbolo sacro, un libro di preghiere o una ruota di preghiera, 5 bastoncini di incenso, paramenti, un set di abiti comuni e una borsa contenente 15 mo.',
    },
    feature: {
      id: 'acolyte-shelter-of-the-faithful',
      name: { en: 'Shelter of the Faithful', it: 'Rifugio dei Fedeli' },
      description: {
        en: 'You command the respect of those who share your faith, and you can perform its religious ceremonies. You and your companions can expect free healing and care at a temple, shrine, or other established presence of your faith (though you must provide material components for spells yourself), and those who share your religion support you, alone, at a modest lifestyle.',
        it: 'Comandi il rispetto di chi condivide la tua fede, e puoi officiare le sue cerimonie religiose. Tu e i tuoi compagni potete aspettarvi cure e assistenza gratuite presso un tempio, un santuario o un’altra presenza consolidata della tua fede (sebbene tu debba procurarti da solo le componenti materiali per gli incantesimi), e chi condivide la tua religione ti sostiene, da solo, con un tenore di vita modesto.',
      },
    },
    source: 'SRD5.1',
  },
  {
    id: 'war-veteran',
    name: { en: 'War Veteran', it: 'Veterano di Guerra' },
    description: {
      en: 'You served in the ranks of an army, militia, or mercenary company, and battle has shaped who you are.',
      it: 'Hai prestato servizio nei ranghi di un esercito, di una milizia o di una compagnia di mercenari, e la battaglia ha plasmato ciò che sei.',
    },
    skillProficiencies: ['athletics', 'intimidation'],
    toolProficiencies: [],
    languages: 0,
    equipment: {
      en: "An insignia of rank, a trophy taken from a fallen enemy (a dagger, a broken blade, or a piece of a banner), a set of bone dice or a deck of cards, a set of common clothes, and a pouch containing 10 gp.",
      it: 'Un distintivo di grado, un trofeo strappato a un nemico caduto (un pugnale, una lama spezzata o un brandello di stendardo), un set di dadi d’osso o un mazzo di carte, un set di abiti comuni e una borsa contenente 10 mo.',
    },
    feature: {
      id: 'war-veteran-brotherhood-in-arms',
      name: { en: 'Brotherhood in Arms', it: 'Cameratismo tra le Armi' },
      description: {
        en: 'You can find shelter, food, and basic supplies among soldiers and veterans of the army or company you served with, and you can recognize military insignia well enough to identify the rank and allegiance of most soldiers you meet.',
        it: 'Puoi trovare rifugio, cibo e rifornimenti di base tra i soldati e i veterani dell’esercito o della compagnia in cui hai prestato servizio, e riconosci i distintivi militari abbastanza bene da identificare grado e appartenenza della maggior parte dei soldati che incontri.',
      },
    },
    source: 'original',
  },
  {
    id: 'child-of-the-streets',
    name: { en: 'Child of the Streets', it: 'Figlio della Strada' },
    description: {
      en: 'You grew up on the streets of a city, learning to survive by your wits, your speed, and your knowledge of its hidden corners.',
      it: 'Sei cresciuto per le strade di una città, imparando a sopravvivere grazie all’ingegno, alla velocità e alla conoscenza dei suoi angoli nascosti.',
    },
    skillProficiencies: ['sleightOfHand', 'stealth'],
    toolProficiencies: [],
    languages: 0,
    equipment: {
      en: 'A small knife, a map of the city you grew up in, a keepsake to remember your parents by, a set of dark common clothes including a hood, and a pouch containing 10 gp.',
      it: 'Un piccolo coltello, una mappa della città in cui sei cresciuto, un ricordo dei tuoi genitori, un set di abiti comuni scuri con un cappuccio e una borsa contenente 10 mo.',
    },
    feature: {
      id: 'child-of-the-streets-underworld-contacts',
      name: { en: 'Underworld Contacts', it: 'Contatti nel Sottobosco' },
      description: {
        en: 'You know a coded sign language used by beggars, vagabonds, and thieves, letting you find a local contact who can pass along messages or point you toward fences and hideouts in almost any settlement.',
        it: 'Conosci un linguaggio di segni in codice usato da mendicanti, vagabondi e ladri, che ti permette di trovare un contatto locale in grado di far girare messaggi o indirizzarti verso ricettatori e nascondigli in quasi ogni insediamento.',
      },
    },
    source: 'original',
  },
  {
    id: 'minor-house-heir',
    name: { en: 'Heir of a Minor House', it: 'Erede di un Casato Minore' },
    description: {
      en: 'You were born into a family of lesser nobility or old wealth, raised amid etiquette, privilege, and quiet expectation.',
      it: 'Sei nato in una famiglia di piccola nobiltà o di antica ricchezza, cresciuto tra etichetta, privilegi e silenziose aspettative.',
    },
    skillProficiencies: ['history', 'persuasion'],
    toolProficiencies: [],
    languages: 1,
    equipment: {
      en: "A signet ring bearing your family's crest, a fine set of clothes, a scroll recording your family's lineage, and a purse containing 25 gp.",
      it: 'Un anello con sigillo recante lo stemma della tua famiglia, un raffinato set di abiti, una pergamena che riporta la genealogia della tua famiglia e una borsa contenente 25 mo.',
    },
    feature: {
      id: 'minor-house-heir-rank-and-recognition',
      name: { en: 'Rank and Recognition', it: 'Rango e Riconoscimento' },
      description: {
        en: 'Common folk and lesser nobles treat you with deference, assuming you speak for your family. You can usually secure an audience with a local noble or official, and you are welcomed into polite society as a matter of course.',
        it: 'Il popolo comune e i nobili minori ti trattano con deferenza, presumendo che tu parli a nome della tua famiglia. Puoi solitamente ottenere un’udienza con un nobile o un funzionario locale, e sei accolto nell’alta società come una cosa naturale.',
      },
    },
    source: 'original',
  },
  {
    id: 'wandering-scholar',
    name: { en: 'Wandering Scholar', it: 'Studioso Itinerante' },
    description: {
      en: 'You have spent years pursuing knowledge across libraries, ruins, and universities, chasing questions that others left unanswered.',
      it: 'Hai passato anni a inseguire la conoscenza tra biblioteche, rovine e università, rincorrendo domande che altri hanno lasciato senza risposta.',
    },
    skillProficiencies: ['arcana', 'history'],
    toolProficiencies: [],
    languages: 2,
    equipment: {
      en: 'A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet answered, a set of common clothes, and a pouch containing 10 gp.',
      it: 'Una boccetta di inchiostro nero, una penna d’oca, un piccolo coltello, una lettera di un collega defunto che pone una domanda a cui non hai ancora risposto, un set di abiti comuni e una borsa contenente 10 mo.',
    },
    feature: {
      id: 'wandering-scholar-researcher',
      name: { en: 'Researcher', it: 'Ricercatore' },
      description: {
        en: "When you attempt to recall a piece of lore you don't know, you often know where and from whom you can obtain it — usually a library, scriptorium, university, or a sage or loremaster with knowledge of the subject.",
        it: 'Quando tenti di ricordare una nozione che non conosci, spesso sai dove e da chi puoi ottenerla — di solito una biblioteca, uno scriptorium, un’università, o un sapiente esperto dell’argomento.',
      },
    },
    source: 'original',
  },
  {
    id: 'village-hero',
    name: { en: 'Village Hero', it: 'Eroe del Villaggio' },
    description: {
      en: 'You come from humble farming or herding stock, and some deed of courage or skill has already made your name known back home.',
      it: 'Provieni da umili origini contadine o pastorali, e qualche gesto di coraggio o abilità ha già reso noto il tuo nome in patria.',
    },
    skillProficiencies: ['animalHandling', 'survival'],
    toolProficiencies: [],
    languages: 0,
    equipment: {
      en: 'A set of artisan’s tools or a shepherd’s crook (your choice), a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gp.',
      it: 'Un set di strumenti da artigiano oppure un bastone da pastore (a tua scelta), una pala, una pentola di ferro, un set di abiti comuni e una borsa contenente 10 mo.',
    },
    feature: {
      id: 'village-hero-rustic-hospitality',
      name: { en: 'Rustic Hospitality', it: 'Ospitalità Rurale' },
      description: {
        en: "Since you come from the ranks of common folk, you fit in among them with ease. Simple folk will shield you from the law or from anyone else searching for you, though they won't risk their lives for you.",
        it: 'Poiché provieni dalle fila della gente comune, ti integri tra loro con facilità. La gente semplice ti proteggerà dalla legge o da chiunque altro ti stia cercando, sebbene non rischi la vita per te.',
      },
    },
    source: 'original',
  },
  {
    id: 'traveling-performer',
    name: { en: 'Traveling Performer', it: 'Artista Girovago' },
    description: {
      en: 'You have traveled from town to town entertaining crowds with music, tales, tricks, or daring feats, living off the coin of an appreciative audience.',
      it: 'Hai viaggiato di città in città intrattenendo la folla con musica, racconti, trucchi o imprese ardite, vivendo delle monete di un pubblico riconoscente.',
    },
    skillProficiencies: ['acrobatics', 'performance'],
    toolProficiencies: [],
    languages: 0,
    equipment: {
      en: 'A musical instrument of your choice, the favor of an admirer (a love letter, a lock of hair, or a trinket), a costume, a set of common clothes, and a pouch containing 15 gp.',
      it: 'Uno strumento musicale a tua scelta, il pegno di un ammiratore (una lettera d’amore, una ciocca di capelli o un ninnolo), un costume, un set di abiti comuni e una borsa contenente 15 mo.',
    },
    feature: {
      id: 'traveling-performer-a-familiar-face',
      name: { en: 'A Familiar Face', it: 'Volto Noto' },
      description: {
        en: "You can always find a place to perform in exchange for modest food and lodging, and your reputation precedes you: in any town where you've performed before, you and your companions gain free admission to other performances there.",
        it: 'Riesci sempre a trovare un posto dove esibirti in cambio di vitto e alloggio modesti, e la tua fama ti precede: in ogni città in cui ti sei già esibito, tu e i tuoi compagni ottenete l’ingresso gratuito ad altre esibizioni.',
      },
    },
    source: 'original',
  },
  {
    id: 'wilderness-scout',
    name: { en: 'Wilderness Scout', it: 'Esploratore delle Terre Selvagge' },
    description: {
      en: 'You grew up far from settled lands, among forests, mountains, or plains, learning to read the wild before you learned to read a book.',
      it: 'Sei cresciuto lontano dalle terre abitate, tra foreste, montagne o pianure, imparando a leggere la natura selvaggia prima ancora di imparare a leggere un libro.',
    },
    skillProficiencies: ['athletics', 'survival'],
    toolProficiencies: [],
    languages: 1,
    equipment: {
      en: 'A staff, a hunting trap, a trophy from an animal you killed, a set of traveler’s clothes, and a pouch containing 10 gp.',
      it: 'Un bastone, una tagliola da caccia, un trofeo di un animale che hai ucciso, un set di abiti da viaggio e una borsa contenente 10 mo.',
    },
    feature: {
      id: 'wilderness-scout-wanderer',
      name: { en: 'Wanderer', it: 'Vagabondo' },
      description: {
        en: 'You have an excellent memory for maps and geography, and you can always find food and fresh water for yourself and up to five other people each day, provided the land offers berries, small game, water, and so on.',
        it: 'Hai un’eccellente memoria per mappe e geografia, e riesci sempre a procurarti cibo e acqua fresca per te e fino a cinque altre persone ogni giorno, a patto che la terra offra bacche, piccola selvaggina, acqua e simili.',
      },
    },
    source: 'original',
  },
  {
    id: 'traveling-merchant',
    name: { en: 'Traveling Merchant', it: 'Mercante di Passaggio' },
    description: {
      en: 'You have spent years on the road buying, selling, and trading, and you know the value of goods, favors, and a good reputation.',
      it: 'Hai passato anni sulla strada a comprare, vendere e commerciare, e conosci il valore delle merci, dei favori e di una buona reputazione.',
    },
    skillProficiencies: ['insight', 'persuasion'],
    toolProficiencies: [],
    languages: 1,
    equipment: {
      en: 'A merchant’s scale, a ledger recording your trades, a set of traveler’s clothes, and a pouch containing 20 gp.',
      it: 'Una bilancia da mercante, un registro delle tue transazioni, un set di abiti da viaggio e una borsa contenente 20 mo.',
    },
    feature: {
      id: 'traveling-merchant-trade-network',
      name: { en: 'Trade Network', it: 'Rete Commerciale' },
      description: {
        en: 'You are known and trusted among merchants and guildsfolk along the routes you travel. You can typically rely on them for a place to stay, and you can buy and sell common goods at fair market prices while traveling.',
        it: 'Sei conosciuto e godi di fiducia tra mercanti e membri delle gilde lungo le rotte che percorri. Puoi solitamente contare su di loro per un posto dove alloggiare, e puoi comprare e vendere merci comuni a prezzi di mercato equi durante i tuoi viaggi.',
      },
    },
    source: 'original',
  },
]

export const BACKGROUNDS_BY_ID: Record<string, Background> = Object.fromEntries(BACKGROUNDS.map((b) => [b.id, b]))

export function getBackground(id: string): Background | undefined {
  return BACKGROUNDS_BY_ID[id]
}
