import type { CharacterClass } from '../../types/srd'

export const monk: CharacterClass = {
  id: 'monk',
  name: { en: 'Monk', it: 'Monaco' },
  description: { en: 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.', it: 'Un maestro di arti marziali, che sfrutta il potere del corpo nella ricerca della perfezione fisica e spirituale.' },
  hitDie: 8,
  primaryAbility: ['dex', 'wis'],
  savingThrowProficiencies: ['str', 'dex'],
  armorProficiencies: [],
  weaponProficiencies: ['Simple weapons', 'Shortswords'],
  toolProficiencies: ["One type of artisan's tools or one musical instrument"],
  skillChoices: { count: 2, from: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'] },
  casterProgression: 'none',
  startingEquipment: [
    {
      options: [
        { itemIds: ['shortsword'], label: { en: 'A shortsword', it: 'Una spada corta' } },
        { itemIds: ['spear'], label: { en: 'Any simple weapon', it: 'Un’arma semplice a scelta' } },
      ],
    },
    {
      options: [
        { itemIds: ['dungeoneers-pack'], label: { en: "A dungeoneer's pack", it: 'Uno zaino da esploratore di dungeon' } },
        { itemIds: ['explorers-pack'], label: { en: "An explorer's pack", it: 'Uno zaino da esploratore' } },
      ],
    },
    { options: [{ itemIds: ['dart'], label: { en: '10 darts', it: '10 dardi' } }] },
  ],
  source: 'SRD5.1',
  traits: [
    {
      id: 'monk-unarmored-defense',
      level: 1,
      name: { en: 'Unarmored Defense', it: 'Difesa Senza Armatura' },
      description: { en: 'While wearing no armor and no shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.', it: 'Quando non indossi armatura né scudo, la tua CA è pari a 10 + il tuo modificatore di Destrezza + il tuo modificatore di Saggezza.' },
    },
    {
      id: 'monk-martial-arts',
      level: 1,
      name: { en: 'Martial Arts', it: 'Arti Marziali' },
      description: {
        en: 'While unarmed or wielding only monk weapons and not wearing armor or a shield: you can use Dexterity instead of Strength for attack and damage rolls; you can roll a d4 in place of normal unarmed/monk weapon damage (increasing at higher levels); and when you take the Attack action, you can make one unarmed strike as a bonus action.',
        it: 'Quando sei disarmato o impugni solo armi da monaco e non indossi armatura né scudo: puoi usare la Destrezza invece della Forza per i tiri per colpire e per il danno; puoi tirare un d4 al posto del normale danno a mani nude/arma da monaco (che aumenta ai livelli superiori); e quando intraprendi l’azione Attacco, puoi effettuare un colpo senz’armi come azione bonus.',
      },
    },
    {
      id: 'monk-ki',
      level: 2,
      name: { en: 'Ki', it: 'Ki' },
      description: {
        en: 'You gain ki points (equal to your monk level) to fuel ki features, starting with Flurry of Blows (spend 1 ki after the Attack action to make two unarmed strikes as a bonus action), Patient Defense (spend 1 ki to Dodge as a bonus action), and Step of the Wind (spend 1 ki to Disengage or Dash as a bonus action, doubling jump distance). Ki save DC = 8 + proficiency bonus + Wisdom modifier.',
        it: 'Ottieni punti ki (pari al tuo livello da monaco) per alimentare capacità basate sul ki, a partire da Raffica di Colpi (spendi 1 ki dopo l’azione Attacco per effettuare due colpi senz’armi come azione bonus), Difesa Paziente (spendi 1 ki per Schivare come azione bonus) e Passo del Vento (spendi 1 ki per Disimpegnarti o Scattare come azione bonus, raddoppiando la distanza di salto). CD del ki = 8 + bonus di competenza + modificatore di Saggezza.',
      },
    },
    {
      id: 'monk-unarmored-movement',
      level: 2,
      name: { en: 'Unarmored Movement', it: 'Movimento Senza Armatura' },
      description: { en: 'Your speed increases by 10 feet while not wearing armor or a shield, increasing further at higher monk levels.', it: 'La tua velocità aumenta di 3 metri quando non indossi armatura né scudo, e aumenta ulteriormente ai livelli da monaco successivi.' },
    },
    {
      id: 'monk-monastic-tradition',
      level: 3,
      name: { en: 'Monastic Tradition', it: 'Tradizione Monastica' },
      description: { en: 'You commit to a tradition, such as the Way of the Open Hand, granting features at 3rd, 6th, 11th, and 17th level.', it: 'Ti dedichi a una tradizione, come la Via della Mano Aperta, che concede capacità al 3°, 6°, 11° e 17° livello.' },
    },
    {
      id: 'monk-open-hand-technique',
      level: 3,
      name: { en: 'Way of the Open Hand: Open Hand Technique', it: 'Via della Mano Aperta: Tecnica della Mano Aperta' },
      description: {
        en: 'Whenever you hit with an attack granted by Flurry of Blows, you can impose one of: the target must succeed on a Dexterity save or be knocked prone; the target must succeed on a Strength save or be pushed 15 feet; or the target can’t take reactions until the end of your next turn.',
        it: 'Ogni volta che colpisci con un attacco concesso da Raffica di Colpi, puoi imporre una delle seguenti: il bersaglio deve superare un tiro salvezza su Destrezza o cadere prono; il bersaglio deve superare un tiro salvezza su Forza o essere spinto di 4,5 metri; oppure il bersaglio non può effettuare reazioni fino alla fine del tuo prossimo turno.',
      },
    },
    {
      id: 'monk-deflect-missiles',
      level: 3,
      name: { en: 'Deflect Missiles', it: 'Deviare Proiettili' },
      description: {
        en: 'You can use your reaction to reduce ranged weapon attack damage by 1d10 + your Dexterity modifier + your monk level. If reduced to 0, you can catch the missile and spend 1 ki to make a ranged attack with it.',
        it: 'Puoi usare la tua reazione per ridurre il danno di un attacco con arma a distanza di 1d10 + il tuo modificatore di Destrezza + il tuo livello da monaco. Se il danno si riduce a 0, puoi afferrare il proiettile e spendere 1 ki per effettuare un attacco a distanza con esso.',
      },
    },
    {
      id: 'monk-asi-4',
      level: 4,
      name: { en: 'Ability Score Improvement', it: 'Aumento di Caratteristica' },
      description: { en: 'Increase one ability score by 2, or two scores by 1 each (max 20). Repeats at 8th, 12th, 16th, and 19th level.', it: 'Aumenta una caratteristica di 2, oppure due caratteristiche di 1 ciascuna (massimo 20). Si ripete al 8°, 12°, 16° e 19° livello.' },
    },
    {
      id: 'monk-slow-fall',
      level: 4,
      name: { en: 'Slow Fall', it: 'Caduta Rallentata' },
      description: { en: 'You can use your reaction when you fall to reduce falling damage by an amount equal to five times your monk level.', it: 'Puoi usare la tua reazione quando cadi per ridurre il danno da caduta di un ammontare pari a cinque volte il tuo livello da monaco.' },
    },
    {
      id: 'monk-extra-attack',
      level: 5,
      name: { en: 'Extra Attack', it: 'Attacco Extra' },
      description: { en: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.', it: 'Puoi attaccare due volte, invece di una, ogni volta che intraprendi l’azione Attacco nel tuo turno.' },
    },
    {
      id: 'monk-stunning-strike',
      level: 5,
      name: { en: 'Stunning Strike', it: 'Colpo Stordente' },
      description: {
        en: 'When you hit a creature with a melee weapon attack, you can spend 1 ki point to force a Constitution save; on a failure the target is stunned until the end of your next turn.',
        it: 'Quando colpisci una creatura con un attacco in mischia, puoi spendere 1 punto ki per costringerla a un tiro salvezza su Costituzione; in caso di fallimento il bersaglio è stordito fino alla fine del tuo prossimo turno.',
      },
    },
  ],
}
