import type { CharacterClass } from '../../types/srd'

export const barbarian: CharacterClass = {
  id: 'barbarian',
  name: { en: 'Barbarian', it: 'Barbaro' },
  description: {
    en: 'A fierce warrior of primitive background who can enter a battle rage.',
    it: 'Un fiero guerriero di origini primitive capace di entrare in una furia di battaglia.',
  },
  hitDie: 12,
  primaryAbility: ['str'],
  savingThrowProficiencies: ['str', 'con'],
  armorProficiencies: ['Light armor', 'Medium armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: {
    count: 2,
    from: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
  },
  casterProgression: 'none',
  startingEquipment: [
    {
      options: [
        { itemIds: ['greataxe'], label: { en: 'A greataxe', it: 'Un’ascia bipenne' } },
        { itemIds: ['longsword'], label: { en: 'Any martial melee weapon', it: 'Un’arma da mischia marziale a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['handaxe', 'handaxe'], label: { en: 'Two handaxes', it: 'Due asce da mano' } },
        { itemIds: ['spear'], label: { en: 'Any simple weapon', it: 'Un’arma semplice a scelta' } },
      ],
    },
    {
      options: [{ itemIds: ['explorers-pack', 'javelin', 'javelin', 'javelin', 'javelin'], label: { en: "An explorer's pack and four javelins", it: 'Uno zaino da esploratore e quattro giavellotti' } }],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'barbarian-rage',
      level: 1,
      name: { en: 'Rage', it: 'Ira' },
      description: {
        en: 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, if you aren’t wearing heavy armor: you have advantage on Strength checks and Strength saving throws; when you make a melee weapon attack using Strength, you gain a bonus to the damage roll (+2 at 1st level); and you have resistance to bludgeoning, piercing, and slashing damage. You can’t cast spells or concentrate on them while raging. Your rage lasts 1 minute and ends early if you’re knocked unconscious or if your turn ends without attacking a hostile creature or taking damage since your last turn; you can also end it as a bonus action. You can rage twice at 1st level, and must finish a long rest to regain uses once you run out.',
        it: 'In battaglia combatti con ferocia primordiale. Nel tuo turno, puoi entrare in ira come azione bonus. Mentre sei in ira, se non indossi un’armatura pesante: hai vantaggio alle prove di Forza e ai tiri salvezza su Forza; quando effettui un attacco in mischia usando la Forza, ottieni un bonus al tiro per il danno (+2 al 1° livello); e hai resistenza al danno contundente, perforante e tagliente. Non puoi lanciare incantesimi né concentrarti su di essi mentre sei in ira. La tua ira dura 1 minuto e termina prima se vieni messo fuori combattimento o se il tuo turno finisce senza che tu abbia attaccato una creatura ostile o subito danno dal tuo ultimo turno; puoi anche terminarla come azione bonus. Puoi entrare in ira due volte al 1° livello, e devi completare un riposo lungo per recuperare gli usi una volta esauriti.',
      },
    },
    {
      id: 'barbarian-unarmored-defense',
      level: 1,
      name: { en: 'Unarmored Defense', it: 'Difesa Senza Armatura' },
      description: {
        en: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
        it: 'Quando non indossi alcuna armatura, la tua Classe Armatura è pari a 10 + il tuo modificatore di Destrezza + il tuo modificatore di Costituzione. Puoi usare uno scudo e beneficiarne comunque.',
      },
    },
    {
      id: 'barbarian-reckless-attack',
      level: 2,
      name: { en: 'Reckless Attack', it: 'Attacco Sconsiderato' },
      description: {
        en: 'When you make your first attack on your turn, you can decide to attack recklessly, giving you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.',
        it: 'Quando effettui il tuo primo attacco nel turno, puoi decidere di attaccare in modo sconsiderato, ottenendo vantaggio ai tiri per colpire in mischia che usano la Forza in questo turno, ma i tiri per colpire contro di te hanno vantaggio fino al tuo prossimo turno.',
      },
    },
    {
      id: 'barbarian-danger-sense',
      level: 2,
      name: { en: 'Danger Sense', it: 'Senso del Pericolo' },
      description: {
        en: 'You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells, as long as you aren’t blinded, deafened, or incapacitated.',
        it: 'Hai vantaggio ai tiri salvezza su Destrezza contro effetti che puoi vedere, come trappole e incantesimi, purché tu non sia accecato, assordato o incapacitato.',
      },
    },
    {
      id: 'barbarian-primal-path',
      level: 3,
      name: { en: 'Primal Path', it: 'Cammino Primordiale' },
      description: {
        en: 'You choose a path that shapes the nature of your rage, such as the Path of the Berserker, granting features at 3rd, 6th, 10th, and 14th level.',
        it: 'Scegli un cammino che plasma la natura della tua ira, come il Cammino del Berserker, che concede capacità al 3°, 6°, 10° e 14° livello.',
      },
    },
    {
      id: 'barbarian-berserker-frenzy',
      level: 3,
      name: { en: 'Path of the Berserker: Frenzy', it: 'Cammino del Berserker: Furia' },
      description: {
        en: 'When you rage, you can go into a frenzy. While frenzied, you can make a single melee weapon attack as a bonus action on each of your turns. When your rage ends, you suffer one level of exhaustion.',
        it: 'Quando entri in ira, puoi entrare in furia. Mentre sei in furia, puoi effettuare un singolo attacco in mischia come azione bonus in ognuno dei tuoi turni. Quando la tua ira termina, subisci un livello di sfinimento.',
      },
    },
    {
      id: 'barbarian-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: {
        en: 'You can increase one ability score by 2, or two ability scores by 1 each (max 20). This repeats at 8th, 12th, 16th, and 19th level.',
        it: 'Puoi aumentare una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.',
      },
    },
    {
      id: 'barbarian-extra-attack',
      level: 5,
      name: { en: 'Extra Attack', it: 'Attacco Extra' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.', it: 'Puoi attaccare due volte, invece di una, ogni volta che intraprendi l’azione Attacco nel tuo turno.' },
    },
    {
      id: 'barbarian-fast-movement',
      level: 5,
      name: { en: 'Fast Movement', it: 'Movimento Rapido' },
      description: { en: 'Your speed increases by 10 feet while you aren’t wearing heavy armor.', it: 'La tua velocità aumenta di 3 metri quando non indossi un’armatura pesante.' },
    },
  ],
}
