import type { CharacterClass } from '../../types/srd'

export const bard: CharacterClass = {
  id: 'bard',
  name: { en: 'Bard', it: 'Bardo' },
  description: {
    en: 'An inspiring magician whose power echoes the music of creation.',
    it: 'Un mago ispiratore il cui potere fa eco alla musica della creazione.',
  },
  hitDie: 8,
  primaryAbility: ['cha'],
  savingThrowProficiencies: ['dex', 'cha'],
  armorProficiencies: ['Light armor'],
  weaponProficiencies: ['Simple weapons', 'Hand crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
  toolProficiencies: ['Three musical instruments of your choice'],
  skillChoices: {
    count: 3,
    from: [
      'acrobatics', 'animalHandling', 'arcana', 'athletics', 'deception', 'history', 'insight',
      'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion',
      'religion', 'sleightOfHand', 'stealth', 'survival',
    ],
  },
  casterProgression: 'full',
  spellcastingAbility: 'cha',
  startingEquipment: [
    {
      options: [
        { itemIds: ['rapier'], label: { en: 'A rapier', it: 'Uno stocco' } },
        { itemIds: ['longsword'], label: { en: 'A longsword', it: 'Una spada lunga' } },
        { itemIds: ['dagger'], label: { en: 'Any simple weapon', it: 'Un’arma semplice a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['diplomats-pack'], label: { en: "A diplomat's pack", it: 'Uno zaino da diplomatico' } },
        { itemIds: ['entertainers-pack'], label: { en: "An entertainer's pack", it: 'Uno zaino da intrattenitore' } },
      ],
    },
    {
      options: [
        { itemIds: ['musical-instrument-lute'], label: { en: 'A lute', it: 'Un liuto' } },
        { itemIds: ['musical-instrument-lute'], label: { en: 'Any other musical instrument', it: 'Un altro strumento musicale a scelta' } },
      ],
    },
    {
      options: [{ itemIds: ['leather', 'dagger'], label: { en: 'Leather armor and a dagger', it: 'Un’armatura di cuoio e un pugnale' } }],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'bard-spellcasting',
      level: 1,
      name: { en: 'Spellcasting', it: 'Lancio di Incantesimi' },
      description: {
        en: 'You know 2 cantrips and 4 1st-level spells from the bard spell list, gaining more as shown on the Bard table. Charisma is your spellcasting ability. You can cast a bard spell you know as a ritual if it has the ritual tag, and use a musical instrument as a spellcasting focus.',
        it: 'Conosci 2 trucchetti e 4 incantesimi di 1° livello dalla lista incantesimi del bardo, ottenendone altri come mostrato nella tabella del Bardo. Il Carisma è la tua caratteristica da incantatore. Puoi lanciare come rituale un incantesimo del bardo che conosci se ha il descrittore rituale, e usare uno strumento musicale come focus da incantatore.',
      },
    },
    {
      id: 'bard-bardic-inspiration',
      level: 1,
      name: { en: 'Bardic Inspiration', it: 'Ispirazione Bardica' },
      description: {
        en: 'As a bonus action, choose one creature other than yourself within 60 feet who can hear you. That creature gains a Bardic Inspiration die (a d6) it can add to one ability check, attack roll, or saving throw within the next 10 minutes. Usable a number of times equal to your Charisma modifier (minimum once), regained on a long rest. The die becomes a d8 at 5th level, d10 at 10th, and d12 at 15th.',
        it: 'Come azione bonus, scegli una creatura diversa da te entro 18 metri che possa sentirti. Quella creatura ottiene un dado da Ispirazione Bardica (un d6) che può aggiungere a una prova di caratteristica, un tiro per colpire o un tiro salvezza entro i prossimi 10 minuti. Utilizzabile un numero di volte pari al tuo modificatore di Carisma (minimo una), recuperato con un riposo lungo. Il dado diventa un d8 al 5° livello, un d10 al 10° e un d12 al 15°.',
      },
    },
    {
      id: 'bard-jack-of-all-trades',
      level: 2,
      name: { en: 'Jack of All Trades', it: 'Tuttofare' },
      description: { en: 'You can add half your proficiency bonus, rounded down, to any ability check that doesn’t already include your proficiency bonus.', it: 'Puoi aggiungere metà del tuo bonus di competenza, arrotondato per difetto, a qualsiasi prova di caratteristica che non includa già il tuo bonus di competenza.' },
    },
    {
      id: 'bard-song-of-rest',
      level: 2,
      name: { en: 'Song of Rest', it: 'Canto del Riposo' },
      description: { en: 'During a short rest, if you or allies who hear your performance regain hit points by spending Hit Dice, each of those creatures regains an extra 1d6 hit points (more at higher levels).', it: 'Durante un riposo breve, se tu o gli alleati che ascoltano la tua esibizione recuperate punti ferita spendendo Dadi Vita, ciascuna di quelle creature recupera 1d6 punti ferita extra (di più ai livelli superiori).' },
    },
    {
      id: 'bard-college',
      level: 3,
      name: { en: 'Bard College', it: 'Collegio Bardico' },
      description: { en: 'You delve into a bard college, such as the College of Lore, granting features at 3rd, 6th, and 14th level.', it: 'Ti addentri in un collegio bardico, come il Collegio della Conoscenza, che concede capacità al 3°, 6° e 14° livello.' },
    },
    {
      id: 'bard-lore-bonus-proficiencies',
      level: 3,
      name: { en: 'College of Lore: Bonus Proficiencies', it: 'Collegio della Conoscenza: Competenze Bonus' },
      description: { en: 'You gain proficiency with three skills of your choice.', it: 'Ottieni competenza in tre abilità a tua scelta.' },
    },
    {
      id: 'bard-lore-cutting-words',
      level: 3,
      name: { en: 'College of Lore: Cutting Words', it: 'Collegio della Conoscenza: Parole Taglienti' },
      description: {
        en: 'When a creature you can see within 60 feet makes an attack roll, ability check, or damage roll, you can use your reaction to expend a Bardic Inspiration die and subtract the roll from the creature’s result.',
        it: 'Quando una creatura che puoi vedere entro 18 metri effettua un tiro per colpire, una prova di caratteristica o un tiro per il danno, puoi usare la tua reazione per spendere un dado da Ispirazione Bardica e sottrarre il risultato dal tiro della creatura.',
      },
    },
    {
      id: 'bard-expertise',
      level: 3,
      name: { en: 'Expertise', it: 'Maestria' },
      description: { en: 'Choose two of your skill proficiencies; your proficiency bonus is doubled for checks using them. Choose two more at 10th level.', it: 'Scegli due delle tue competenze nelle abilità; il tuo bonus di competenza è raddoppiato per le prove che le usano. Scegline altre due al 10° livello.' },
    },
    {
      id: 'bard-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'bard-font-of-inspiration',
      level: 5,
      name: { en: 'Font of Inspiration', it: 'Fonte di Ispirazione' },
      description: { en: 'You regain all expended uses of Bardic Inspiration when you finish a short or long rest.', it: 'Recuperi tutti gli usi spesi di Ispirazione Bardica quando completi un riposo breve o lungo.' },
    },
  ],
}
