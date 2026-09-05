import type { CharacterClass } from '../../types/srd'

export const fighter: CharacterClass = {
  id: 'fighter',
  name: { en: 'Fighter', it: 'Guerriero' },
  description: { en: 'A master of martial combat, skilled with a variety of weapons and armor.', it: 'Un maestro del combattimento marziale, abile con una vasta gamma di armi e armature.' },
  hitDie: 10,
  primaryAbility: ['str', 'dex'],
  savingThrowProficiencies: ['str', 'con'],
  armorProficiencies: ['All armor', 'Shields'],
  weaponProficiencies: ['Simple weapons', 'Martial weapons'],
  toolProficiencies: [],
  skillChoices: {
    count: 2,
    from: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
  },
  casterProgression: 'none',
  startingEquipment: [
    {
      options: [
        { itemIds: ['chain-mail'], label: { en: 'Chain mail', it: 'Una cotta di maglia' } },
        { itemIds: ['leather', 'longbow'], label: { en: 'Leather armor, longbow, and 20 arrows', it: 'Un’armatura di cuoio, un arco lungo e 20 frecce' } },
      ],
    },
    {
      options: [
        { itemIds: ['longsword', 'shield'], label: { en: 'A martial weapon and a shield', it: 'Un’arma marziale e uno scudo' } },
        { itemIds: ['longsword', 'battleaxe'], label: { en: 'Two martial weapons', it: 'Due armi marziali' } },
      ],
    },
    {
      options: [
        { itemIds: ['light-crossbow'], label: { en: 'A light crossbow and 20 bolts', it: 'Una balestra leggera e 20 quadrelli' } },
        { itemIds: ['handaxe', 'handaxe'], label: { en: 'Two handaxes', it: 'Due asce da mano' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack", it: 'Uno zaino da esploratore di dungeon' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'fighter-fighting-style',
      level: 1,
      name: { en: 'Fighting Style', it: 'Stile di Combattimento' },
      description: {
        en: 'You adopt a style of fighting: Archery (+2 to ranged attack rolls), Defense (+1 AC while wearing armor), Dueling (+2 damage with a one-handed melee weapon and no other weapons), Great Weapon Fighting (reroll 1s and 2s on two-handed melee weapon damage dice), Protection (impose disadvantage on an attack against an ally within 5 feet, using your reaction and a shield), or Two-Weapon Fighting (add your ability modifier to the second attack’s damage).',
        it: 'Adotti uno stile di combattimento: Arco (+2 ai tiri per colpire a distanza), Difesa (+1 CA mentre indossi un’armatura), Duello (+2 al danno con un’arma da mischia a una mano senza altre armi), Combattere con Armi Pesanti (ritira gli 1 e i 2 sui dadi da danno delle armi a due mani), Protezione (impone svantaggio a un attacco contro un alleato entro 1,5 metri, usando la tua reazione e uno scudo), o Combattere con Due Armi (aggiungi il tuo modificatore di caratteristica al danno del secondo attacco).',
      },
    },
    {
      id: 'fighter-second-wind',
      level: 1,
      name: { en: 'Second Wind', it: 'Secondo Fiato' },
      description: { en: 'As a bonus action, regain 1d10 + your fighter level hit points. Usable once per short or long rest.', it: 'Come azione bonus, recuperi 1d10 + il tuo livello da guerriero punti ferita. Utilizzabile una volta per riposo breve o lungo.' },
    },
    {
      id: 'fighter-action-surge',
      level: 2,
      name: { en: 'Action Surge', it: 'Scatto di Azione' },
      description: { en: 'On your turn, you can take one additional action. Usable once per short or long rest (twice per rest at 17th level).', it: 'Nel tuo turno, puoi intraprendere un’azione aggiuntiva. Utilizzabile una volta per riposo breve o lungo (due volte per riposo al 17° livello).' },
    },
    {
      id: 'fighter-martial-archetype',
      level: 3,
      name: { en: 'Martial Archetype', it: 'Archetipo Marziale' },
      description: {
        en: 'You choose an archetype, such as Champion, granting features at 3rd, 7th, 10th, 15th, and 18th level.',
        it: 'Scegli un archetipo, come il Campione, che concede capacità al 3°, 7°, 10°, 15° e 18° livello.',
      },
    },
    {
      id: 'fighter-champion-improved-critical',
      level: 3,
      name: { en: 'Champion: Improved Critical', it: 'Campione: Critico Migliorato' },
      description: { en: 'Your weapon attacks score a critical hit on a roll of 19 or 20.', it: 'I tuoi attacchi con armi ottengono un colpo critico con un tiro di 19 o 20.' },
    },
    {
      id: 'fighter-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 6th, 8th, 12th, 14th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 6°, 8°, 12°, 14°, 16° e 19° livello.' },
    },
    {
      id: 'fighter-extra-attack',
      level: 5,
      name: { en: 'Extra Attack', it: 'Attacco Extra' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn (three attacks at 11th level, four at 20th).', it: 'Puoi attaccare due volte, invece di una, ogni volta che intraprendi l’azione Attacco nel tuo turno (tre attacchi all’11° livello, quattro al 20°).' },
    },
  ],
}
