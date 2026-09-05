import type { CharacterClass } from '../../types/srd'

export const paladin: CharacterClass = {
  id: 'paladin',
  name: { en: 'Paladin', it: 'Paladino' },
  description: { en: 'A holy warrior bound to a sacred oath.', it: 'Un guerriero sacro legato a un giuramento solenne.' },
  hitDie: 10,
  primaryAbility: ['str', 'cha'],
  savingThrowProficiencies: ['wis', 'cha'],
  armorProficiencies: ['All armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: { count: 2, from: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'] },
  casterProgression: 'half',
  spellcastingAbility: 'cha',
  startingEquipment: [
    {
      options: [
        { itemIds: ['longsword', 'shield'], label: { en: 'A martial weapon and a shield', it: 'Un’arma marziale e uno scudo' } },
        { itemIds: ['longsword', 'battleaxe'], label: { en: 'Two martial weapons', it: 'Due armi marziali' } },
      ],
    },
    {
      options: [
        { itemIds: ['javelin', 'javelin', 'javelin', 'javelin', 'javelin'], label: { en: 'Five javelins', it: 'Cinque giavellotti' } },
        { itemIds: ['spear'], label: { en: 'Any simple melee weapon', it: 'Un’arma da mischia semplice a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['priests-pack'], label: { en: "A priest's pack", it: 'Uno zaino da sacerdote' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    {
      options: [{ itemIds: ['chain-mail', 'holy-symbol-amulet'], label: { en: 'Chain mail and a holy symbol', it: 'Una cotta di maglia e un simbolo sacro' } }],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'paladin-divine-sense',
      level: 1,
      name: { en: 'Divine Sense', it: 'Percezione Divina' },
      description: {
        en: 'As an action, until the end of your next turn you know the location of any celestial, fiend, or undead within 60 feet not behind total cover. Usable 1 + your Charisma modifier times per long rest.',
        it: 'Come azione, fino alla fine del tuo prossimo turno conosci la posizione di qualsiasi creatura celestiale, demoniaca o non morta entro 18 metri non completamente al riparo. Utilizzabile 1 + il tuo modificatore di Carisma volte per riposo lungo.',
      },
    },
    {
      id: 'paladin-lay-on-hands',
      level: 1,
      name: { en: 'Lay on Hands', it: 'Imposizione delle Mani' },
      description: {
        en: 'You have a pool of healing power (paladin level × 5 hit points, replenished on a long rest). As an action, touch a creature to restore hit points from the pool, or expend 5 hit points to cure one disease or neutralize one poison. No effect on undead or constructs.',
        it: 'Hai una riserva di potere curativo (livello da paladino × 5 punti ferita, ripristinata con un riposo lungo). Come azione, tocchi una creatura per ripristinare punti ferita dalla riserva, oppure spendi 5 punti ferita per curare una malattia o neutralizzare un veleno. Nessun effetto su non morti o costrutti.',
      },
    },
    {
      id: 'paladin-fighting-style',
      level: 2,
      name: { en: 'Fighting Style', it: 'Stile di Combattimento' },
      description: { en: 'You adopt a style such as Defense, Dueling, Great Weapon Fighting, or Protection (see Fighter).', it: 'Adotti uno stile come Difesa, Duello, Combattere con Armi Pesanti o Protezione (vedi Guerriero).' },
    },
    {
      id: 'paladin-spellcasting',
      level: 2,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You prepare a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum one). Charisma is your spellcasting ability; you can use a holy symbol as a spellcasting focus.',
        it: 'Prepari un numero di incantesimi da paladino pari al tuo modificatore di Carisma + metà del tuo livello da paladino, arrotondato per difetto (minimo uno). Il Carisma è la tua caratteristica da incantatore; puoi usare un simbolo sacro come focus da incantatore.',
      },
    },
    {
      id: 'paladin-divine-smite',
      level: 2,
      name: { en: 'Divine Smite', it: 'Punizione Divina' },
      description: {
        en: 'When you hit with a melee weapon attack, you can expend a spell slot to deal extra radiant damage: 2d8 for a 1st-level slot plus 1d8 per slot level above 1st (max 5d8), +1d8 if the target is undead or a fiend.',
        it: 'Quando colpisci con un attacco in mischia, puoi spendere uno slot incantesimo per infliggere danno radioso extra: 2d8 per uno slot di 1° livello più 1d8 per ogni livello di slot superiore al 1° (massimo 5d8), +1d8 se il bersaglio è non morto o demoniaco.',
      },
    },
    {
      id: 'paladin-divine-health',
      level: 3,
      name: { en: 'Divine Health', it: 'Salute Divina' },
      description: { en: 'You are immune to disease.', it: 'Sei immune alle malattie.' },
    },
    {
      id: 'paladin-sacred-oath',
      level: 3,
      name: { en: 'Sacred Oath', it: 'Giuramento Solenne' },
      description: {
        en: 'You swear an oath, such as the Oath of Devotion, granting oath spells (always prepared) and Channel Divinity options at 3rd level and again at 7th, 15th, and 20th level.',
        it: 'Presti un giuramento, come il Giuramento di Devozione, che concede incantesimi del giuramento (sempre preparati) e opzioni di Incanalare Divinità al 3° livello e di nuovo al 7°, 15° e 20°.',
      },
    },
    {
      id: 'paladin-devotion-channel-divinity',
      level: 3,
      name: { en: 'Oath of Devotion: Channel Divinity', it: 'Giuramento di Devozione: Incanalare Divinità' },
      description: {
        en: 'Sacred Weapon: as an action, imbue a weapon you hold with positive energy for 1 minute, adding your Charisma modifier to its attack rolls (minimum +1) and making it magical. Turn the Unholy: fiends and undead within 30 feet must succeed on a Wisdom save or be turned for 1 minute or until they take damage.',
        it: 'Arma Sacra: come azione, imbevi un’arma che impugni di energia positiva per 1 minuto, aggiungendo il tuo modificatore di Carisma ai suoi tiri per colpire (minimo +1) e rendendola magica. Ricacciare gli Empi: demoni e non morti entro 9 metri devono superare un tiro salvezza su Saggezza o essere ricacciati per 1 minuto o finché non subiscono danno.',
      },
    },
    {
      id: 'paladin-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'paladin-extra-attack',
      level: 5,
      name: { en: 'Extra Attack', it: 'Attacco Extra' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.', it: 'Puoi attaccare due volte, invece di una, ogni volta che intraprendi l’azione Attacco nel tuo turno.' },
    },
  ],
}
