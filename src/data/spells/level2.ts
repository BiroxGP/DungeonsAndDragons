import type { Spell } from '../../types/srd'

export const LEVEL_2_SPELLS: Spell[] = [
  {
    id: 'acid-arrow', name: { en: 'Acid Arrow', it: 'Freccia Acida' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: '90 feet', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['wizard'],
    description: {
      en: 'Ranged spell attack; on a hit, 4d4 acid damage immediately and 2d4 more at the end of its next turn (half damage immediately, none later, on a miss).',
      it: 'Attacco con incantesimo a distanza; se colpisce, 4d4 danni da acido immediatamente e altri 2d4 alla fine del suo prossimo turno (metà danno immediato, nessuno successivo, in caso di mancato colpo).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'aid', name: { en: 'Aid', it: 'Aiuto' }, level: 2, school: 'Abjuration',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: '8 hours',
    classes: ['cleric', 'paladin'],
    description: { en: 'Up to three creatures each gain +5 to hit point maximum and current hit points for the duration.', it: 'Fino a tre creature ottengono ciascuna +5 al massimo dei punti ferita e ai punti ferita attuali per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'alter-self', name: { en: 'Alter Self', it: 'Alterare Sé Stesso' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: 'Concentration, up to 1 hour',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Choose one: grow gills/webbing (swim speed, breathe underwater), change your appearance, or grow natural weapons (1d6 unarmed strikes, +1 to hit/damage, count as magical). Can switch options as an action.',
      it: 'Scegline una: fai crescere branchie/membrane (velocità di nuoto, respiri sott’acqua), cambi il tuo aspetto, oppure fai crescere armi naturali (colpi senz’armi da 1d6, +1 a colpire/danno, contano come magici). Puoi cambiare opzione come azione.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'animal-messenger', name: { en: 'Animal Messenger', it: 'Messaggero Animale' }, level: 2, school: 'Enchantment (ritual)',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: '24 hours',
    classes: ['bard', 'druid', 'ranger'],
    description: {
      en: 'A Tiny beast delivers a 25-word message to a described recipient at a specified location, traveling ~25-50 miles/day.',
      it: 'Una bestia minuscola recapita un messaggio di 25 parole a un destinatario descritto in un luogo specificato, viaggiando circa 40-80 km al giorno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'arcane-lock', name: { en: 'Arcane Lock', it: 'Serratura Arcana' }, level: 2, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Until dispelled',
    classes: ['wizard'],
    description: {
      en: 'A touched door/chest/etc. becomes locked for you and creatures you designate; +10 DC to break or pick.',
      it: 'Una porta/un baule/ecc. toccati vengono chiusi a chiave per te e le creature che designi; +10 alla CD per sfondarli o scassinarli.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'arcanists-magic-aura', name: { en: "Arcanist's Magic Aura", it: 'Aura Magica dell’Arcanista' }, level: 2, school: 'Illusion',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '24 hours',
    classes: ['wizard'],
    description: {
      en: 'Place a false aura on a creature or object so divination spells reveal false magical properties or creature type.',
      it: 'Poni una falsa aura su una creatura o un oggetto in modo che gli incantesimi di divinazione rivelino false proprietà magiche o un falso tipo di creatura.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'augury', name: { en: 'Augury', it: 'Auspicio' }, level: 2, school: 'Divination (ritual)',
    castingTime: '1 minute', range: 'Self', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['cleric'],
    description: {
      en: 'Receive an omen (weal, woe, both, or neither) about the results of a course of action you plan within the next 30 minutes.',
      it: 'Ricevi un presagio (bene, male, entrambi o nessuno) sui risultati di un corso d’azione che pianifichi entro i prossimi 30 minuti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'barkskin', name: { en: 'Barkskin', it: 'Pelle di Corteccia' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Concentration, up to 1 hour',
    classes: ['druid', 'ranger'],
    description: { en: 'A willing creature’s AC can’t be less than 16, regardless of armor worn, for the duration.', it: 'La CA di una creatura consenziente non può essere inferiore a 16, indipendentemente dall’armatura indossata, per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'blindness-deafness', name: { en: 'Blindness/Deafness', it: 'Cecità/Sordità' }, level: 2, school: 'Necromancy',
    castingTime: '1 action', range: '30 feet', components: 'V', duration: '1 minute',
    classes: ['bard', 'cleric', 'sorcerer', 'wizard'],
    description: {
      en: 'A creature must succeed on a Constitution save or be blinded or deafened (your choice) for the duration; it can re-save at the end of each of its turns.',
      it: 'Una creatura deve superare un tiro salvezza su Costituzione o essere accecata o assordata (a tua scelta) per la durata; può ripetere il tiro salvezza alla fine di ognuno dei suoi turni.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'blur', name: { en: 'Blur', it: 'Confusione della Vista' }, level: 2, school: 'Illusion',
    castingTime: '1 action', range: 'Self', components: 'V', duration: 'Concentration, up to 1 minute',
    classes: ['sorcerer', 'wizard'],
    description: { en: 'Your form wavers; attackers have disadvantage against you unless they don’t rely on sight.', it: 'La tua forma ondeggia; gli attaccanti hanno svantaggio contro di te a meno che non facciano affidamento sulla vista.' },
    source: 'SRD5.1',
  },
  {
    id: 'branding-smite', name: { en: 'Branding Smite', it: 'Colpo Marchiante' }, level: 2, school: 'Evocation',
    castingTime: '1 bonus action', range: 'Self', components: 'V', duration: 'Concentration, up to 1 minute',
    classes: ['paladin'],
    description: {
      en: 'Your next weapon hit before the spell ends deals an extra 2d6 radiant damage, makes the target visible if invisible, and it sheds dim light and can’t turn invisible until the spell ends.',
      it: 'Il tuo prossimo colpo con arma prima che l’incantesimo termini infligge 2d6 danni radiosi extra, rende visibile il bersaglio se invisibile, e questo diffonde penombra e non può diventare invisibile finché l’incantesimo non termina.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'calm-emotions', name: { en: 'Calm Emotions', it: 'Calmare le Emozioni' }, level: 2, school: 'Enchantment',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: 'Concentration, up to 1 minute',
    classes: ['bard'],
    description: {
      en: 'Each humanoid in a 20-foot-radius sphere makes a Charisma save; on a failure, suppress charmed/frightened effects on it, or make it indifferent toward creatures of your choice.',
      it: 'Ogni umanoide in una sfera dal raggio di 6 metri effettua un tiro salvezza su Carisma; in caso di fallimento, sopprimi gli effetti di fascino/spavento su di esso, oppure lo rendi indifferente verso creature a tua scelta.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'continual-flame', name: { en: 'Continual Flame', it: 'Fiamma Perenne' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Until dispelled',
    classes: ['cleric', 'wizard'],
    description: { en: 'A torch-bright, heatless flame springs from an object you touch; can be covered but not smothered.', it: 'Una fiamma priva di calore, luminosa come una torcia, scaturisce da un oggetto che tocchi; può essere coperta ma non soffocata.' },
    source: 'SRD5.1',
  },
  {
    id: 'darkness', name: { en: 'Darkness', it: 'Oscurità' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: '60 feet', components: 'V, M', duration: 'Concentration, up to 10 minutes',
    classes: ['sorcerer', 'warlock', 'wizard'],
    description: { en: 'Magical darkness fills a 15-foot-radius sphere, spreading around corners; darkvision can’t see through it.', it: 'Un’oscurità magica riempie una sfera dal raggio di 4,5 metri, diffondendosi attorno agli angoli; la scurovisione non riesce a vedere attraverso di essa.' },
    source: 'SRD5.1',
  },
  {
    id: 'darkvision', name: { en: 'Darkvision', it: 'Scurovisione' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '8 hours',
    classes: ['druid', 'ranger', 'sorcerer', 'wizard'],
    description: { en: 'A willing creature gains darkvision out to 60 feet for the duration.', it: 'Una creatura consenziente ottiene scurovisione fino a 18 metri per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'detect-thoughts', name: { en: 'Detect Thoughts', it: 'Percepire i Pensieri' }, level: 2, school: 'Divination',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: {
      en: 'Read the surface thoughts of one creature within 30 feet each turn; probing deeper forces a Wisdom save or reveals emotional state and a prominent concern.',
      it: 'Leggi i pensieri superficiali di una creatura entro 9 metri ogni turno; scavare più a fondo costringe a un tiro salvezza su Saggezza o rivela lo stato emotivo e una preoccupazione preminente.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'enhance-ability', name: { en: 'Enhance Ability', it: 'Potenziare Caratteristica' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Concentration, up to 1 hour',
    classes: ['bard', 'cleric', 'druid', 'sorcerer'],
    description: {
      en: 'Grant a touched creature advantage on checks of one chosen ability (Bear’s Endurance also grants 2d6 temp HP; Cat’s Grace also negates fall damage under 20 ft).',
      it: 'Concedi a una creatura toccata vantaggio alle prove di una caratteristica scelta (Resistenza dell’Orso concede anche 2d6 pf temporanei; Grazia del Gatto annulla anche il danno da caduta sotto i 6 metri).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'enlarge-reduce', name: { en: 'Enlarge/Reduce', it: 'Ingrandire/Rimpicciolire' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: '30 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'A creature or object doubles (advantage on Str checks/saves, weapons +1d4 damage) or halves (disadvantage, weapons -1d4 damage) in size for the duration.',
      it: 'Una creatura o un oggetto raddoppia (vantaggio a prove/salvezze su Forza, armi +1d4 danno) o si dimezza (svantaggio, armi -1d4 danno) di taglia per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'enthrall', name: { en: 'Enthrall', it: 'Ammaliare' }, level: 2, school: 'Enchantment',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: '1 minute',
    classes: ['bard'],
    description: {
      en: 'Creatures that can hear you make a Wisdom save or have disadvantage on Perception checks to notice anyone but you until the spell ends.',
      it: 'Le creature che possono sentirti effettuano un tiro salvezza su Saggezza o hanno svantaggio alle prove di Percezione per notare chiunque tranne te finché l’incantesimo non termina.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'find-steed', name: { en: 'Find Steed', it: 'Trova Destriero' }, level: 2, school: 'Conjuration',
    castingTime: '10 minutes', range: '30 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['paladin'],
    description: {
      en: 'Summon a spirit steed (warhorse, pony, camel, elk, or mastiff form) bonded to you as a loyal mount; you can telepathically communicate with it within a mile.',
      it: 'Evochi un destriero spirituale (in forma di destriero da guerra, pony, cammello, alce o mastino) legato a te come cavalcatura fedele; puoi comunicare telepaticamente con esso entro 1,6 km.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'find-traps', name: { en: 'Find Traps', it: 'Trova Trappole' }, level: 2, school: 'Divination',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['cleric', 'druid', 'ranger'],
    description: {
      en: 'Sense the presence of any trap within line of sight and range, learning its general danger but not location.',
      it: 'Percepisci la presenza di qualsiasi trappola entro linea di vista e gittata, scoprendone il pericolo generale ma non la posizione.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'flame-blade', name: { en: 'Flame Blade', it: 'Lama di Fiamma' }, level: 2, school: 'Evocation',
    castingTime: '1 bonus action', range: 'Self', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['druid'],
    description: { en: 'A fiery scimitar-shaped blade appears in your hand; melee spell attack, 3d6 fire damage on a hit, shedding light.', it: 'Una lama fiammeggiante a forma di scimitarra appare nella tua mano; attacco con incantesimo in mischia, 3d6 danni da fuoco se colpisce, e diffonde luce.' },
    source: 'SRD5.1',
  },
  {
    id: 'flaming-sphere', name: { en: 'Flaming Sphere', it: 'Sfera Fiammeggiante' }, level: 2, school: 'Conjuration',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['druid', 'wizard'],
    description: {
      en: 'A 5-foot sphere of fire you can move 30 feet as a bonus action; creatures ending their turn within 5 feet make a Dexterity save, taking 2d6 fire damage on a failure (half on success).',
      it: 'Una sfera di fuoco di 1,5 metri che puoi muovere di 9 metri come azione bonus; le creature che finiscono il turno entro 1,5 metri effettuano un tiro salvezza su Destrezza, subendo 2d6 danni da fuoco in caso di fallimento (la metà in caso di successo).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'gentle-repose', name: { en: 'Gentle Repose', it: 'Dolce Riposo' }, level: 2, school: 'Necromancy (ritual)',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '10 days',
    classes: ['cleric', 'wizard'],
    description: {
      en: 'A touched corpse is protected from decay and can’t become undead; time under this effect doesn’t count toward raise dead’s time limit.',
      it: 'Un cadavere toccato è protetto dalla decomposizione e non può diventare un non morto; il tempo sotto questo effetto non conta ai fini del limite di tempo di resurrezione.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'gust-of-wind', name: { en: 'Gust of Wind', it: 'Raffica di Vento' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: 'Self (60-foot line)', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['druid', 'sorcerer', 'wizard'],
    description: {
      en: 'A 60-by-10-foot line of strong wind; creatures starting their turn there make a Strength save or are pushed 15 feet away. Disperses gas and extinguishes small flames.',
      it: 'Una linea di vento forte lunga 18 metri e larga 3; le creature che iniziano il turno lì effettuano un tiro salvezza su Forza o vengono spinte a 4,5 metri di distanza. Disperde i gas e spegne le piccole fiamme.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'heat-metal', name: { en: 'Heat Metal', it: 'Arroventare Metallo' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['druid'],
    description: {
      en: 'A manufactured metal object glows red-hot, dealing 2d8 fire damage to anyone touching it; repeatable each turn as a bonus action.',
      it: 'Un oggetto di metallo lavorato diventa incandescente, infliggendo 2d8 danni da fuoco a chiunque lo tocchi; ripetibile ogni turno come azione bonus.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'hold-person', name: { en: 'Hold Person', it: 'Immobilizzare Persone' }, level: 2, school: 'Enchantment',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['bard', 'cleric', 'druid', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A humanoid must succeed on a Wisdom save or be paralyzed for the duration, repeating the save at the end of each of its turns.',
      it: 'Un umanoide deve superare un tiro salvezza su Saggezza o essere paralizzato per la durata, ripetendo il tiro salvezza alla fine di ognuno dei suoi turni.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'invisibility', name: { en: 'Invisibility', it: 'Invisibilità' }, level: 2, school: 'Illusion',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Concentration, up to 1 hour',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A touched creature becomes invisible, along with its worn/carried gear, until the spell ends or it attacks or casts a spell.',
      it: 'Una creatura toccata diventa invisibile, insieme al suo equipaggiamento indossato/trasportato, finché l’incantesimo non termina o attacca o lancia un incantesimo.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'knock', name: { en: 'Knock', it: 'Scasso' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: '60 feet', components: 'V', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'A locked/stuck/barred object opens (one lock only, if multiple); an arcane lock is suppressed for 10 minutes. A loud knock is audible up to 300 feet.',
      it: 'Un oggetto chiuso a chiave/incastrato/sbarrato si apre (solo una serratura, se multiple); una serratura arcana viene soppressa per 10 minuti. Un forte colpo è udibile fino a 90 metri.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'lesser-restoration', name: { en: 'Lesser Restoration', it: 'Ripristino Inferiore' }, level: 2, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: 'Instantaneous',
    classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger'],
    description: {
      en: 'End one disease or one condition (blinded, deafened, paralyzed, or poisoned) afflicting a touched creature.',
      it: 'Termina una malattia o una condizione (accecato, assordato, paralizzato o avvelenato) che affligge una creatura toccata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'levitate', name: { en: 'Levitate', it: 'Levitazione' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'A creature or object (up to 500 lb, unwilling gets a Constitution save) rises up to 20 feet and hovers for the duration.',
      it: 'Una creatura o un oggetto (fino a 225 kg, se non consenziente effettua un tiro salvezza su Costituzione) sale fino a 6 metri e fluttua per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'locate-animals-or-plants', name: { en: 'Locate Animals or Plants', it: 'Localizzare Animali o Piante' }, level: 2, school: 'Divination (ritual)',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['bard', 'druid', 'ranger'],
    description: {
      en: 'Learn the direction and distance to the closest beast or plant of a kind you name, within 5 miles.',
      it: 'Scopri la direzione e la distanza della bestia o pianta più vicina di un tipo che nomini, entro 8 km.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'locate-object', name: { en: 'Locate Object', it: 'Localizzare Oggetti' }, level: 2, school: 'Divination',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'wizard'],
    description: {
      en: 'Sense the direction to a named or described object familiar to you, within 1,000 feet, unless blocked by lead.',
      it: 'Percepisci la direzione verso un oggetto nominato o descritto a te familiare, entro 300 metri, a meno che non sia bloccato dal piombo.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'magic-mouth', name: { en: 'Magic Mouth', it: 'Bocca Magica' }, level: 2, school: 'Illusion (ritual)',
    castingTime: '1 minute', range: '30 feet', components: 'V, S, M', duration: 'Until dispelled',
    classes: ['wizard'],
    description: {
      en: 'Implant a 25-word message in an object that a magical mouth speaks in your voice when a trigger condition you set occurs.',
      it: 'Impianti un messaggio di 25 parole in un oggetto che una bocca magica pronuncia con la tua voce quando si verifica una condizione scatenante che imposti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'magic-weapon', name: { en: 'Magic Weapon', it: 'Arma Magica' }, level: 2, school: 'Transmutation',
    castingTime: '1 bonus action', range: 'Touch', components: 'V, S', duration: 'Concentration, up to 1 hour',
    classes: ['paladin', 'wizard'],
    description: {
      en: 'A nonmagical weapon you touch becomes magical with a +1 bonus to attack and damage rolls for the duration.',
      it: 'Un’arma non magica che tocchi diventa magica con un bonus di +1 ai tiri per colpire e per il danno per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'mirror-image', name: { en: 'Mirror Image', it: 'Immagine Speculare' }, level: 2, school: 'Illusion',
    castingTime: '1 action', range: 'Self', components: 'V, S', duration: '1 minute',
    classes: ['sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'Three illusory duplicates appear; each attack against you has a chance (based on remaining duplicates) to hit a duplicate (AC 10 + Dex mod) instead, destroying it.',
      it: 'Appaiono tre duplicati illusori; ogni attacco contro di te ha una probabilità (basata sui duplicati rimanenti) di colpire un duplicato (CA 10 + modificatore di Destrezza) invece di te, distruggendolo.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'misty-step', name: { en: 'Misty Step', it: 'Passo Nebbioso' }, level: 2, school: 'Conjuration',
    castingTime: '1 bonus action', range: 'Self', components: 'V', duration: 'Instantaneous',
    classes: ['sorcerer', 'warlock', 'wizard'],
    description: { en: 'Teleport up to 30 feet to an unoccupied space you can see, surrounded briefly by silvery mist.', it: 'Ti teletrasporti fino a 9 metri in uno spazio libero che puoi vedere, avvolto brevemente da nebbia argentea.' },
    source: 'SRD5.1',
  },
  {
    id: 'moonbeam', name: { en: 'Moonbeam', it: 'Raggio di Luna' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S, M', duration: 'Concentration, up to 1 minute',
    classes: ['druid'],
    description: {
      en: 'A 5-foot-radius, 40-foot-tall cylinder of dim light; creatures entering or starting their turn there make a Constitution save, taking 2d10 radiant damage on a failure (half on success). Movable 60 feet as an action.',
      it: 'Un cilindro di penombra dal raggio di 1,5 metri e alto 12 metri; le creature che vi entrano o iniziano il turno lì effettuano un tiro salvezza su Costituzione, subendo 2d10 danni radiosi in caso di fallimento (la metà in caso di successo). Spostabile di 18 metri come azione.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'pass-without-trace', name: { en: 'Pass without Trace', it: 'Passare Senza Traccia' }, level: 2, school: 'Abjuration',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: 'Concentration, up to 1 hour',
    classes: ['druid', 'ranger'],
    description: {
      en: 'Each creature you choose within 30 feet gains +10 to Stealth checks and leaves no tracks, for the duration.',
      it: 'Ogni creatura che scegli entro 9 metri ottiene +10 alle prove di Furtività e non lascia tracce, per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'prayer-of-healing', name: { en: 'Prayer of Healing', it: 'Preghiera di Guarigione' }, level: 2, school: 'Evocation',
    castingTime: '10 minutes', range: '30 feet', components: 'V', duration: 'Instantaneous',
    classes: ['cleric'],
    description: {
      en: 'Up to six creatures you can see each regain 2d8 + your spellcasting ability modifier hit points. No effect on undead or constructs.',
      it: 'Fino a sei creature che puoi vedere recuperano ciascuna 2d8 + il tuo modificatore di caratteristica da incantatore punti ferita. Nessun effetto su non morti o costrutti.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'protection-from-poison', name: { en: 'Protection from Poison', it: 'Protezione dai Veleni' }, level: 2, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S', duration: '1 hour',
    classes: ['cleric', 'druid', 'paladin', 'ranger'],
    description: {
      en: 'Neutralize one poison affecting a touched creature; for the duration it has advantage on saves against poison and resistance to poison damage.',
      it: 'Neutralizzi un veleno che affligge una creatura toccata; per la durata ha vantaggio ai tiri salvezza contro il veleno e resistenza al danno da veleno.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'ray-of-enfeeblement', name: { en: 'Ray of Enfeeblement', it: 'Raggio di Indebolimento' }, level: 2, school: 'Necromancy',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: 'Concentration, up to 1 minute',
    classes: ['warlock', 'wizard'],
    description: {
      en: 'Ranged spell attack; on a hit, the target’s Strength-based weapon attacks deal only half damage until the spell ends (Constitution save at the end of each of its turns to end it).',
      it: 'Attacco con incantesimo a distanza; se colpisce, gli attacchi con armi basati sulla Forza del bersaglio infliggono solo metà danno finché l’incantesimo non termina (tiro salvezza su Costituzione alla fine di ognuno dei suoi turni per terminarlo).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'rope-trick', name: { en: 'Rope Trick', it: 'Trucco della Corda' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '1 hour',
    classes: ['wizard'],
    description: {
      en: 'A rope rises into the air with an invisible extradimensional entrance at the top, holding up to 8 Medium creatures.',
      it: 'Una corda si solleva in aria con un ingresso extradimensionale invisibile in cima, capace di contenere fino a 8 creature di taglia Media.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'scorching-ray', name: { en: 'Scorching Ray', it: 'Raggio Ustionante' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Instantaneous',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Create three rays of fire, hurled at one or several targets; ranged spell attack per ray, 2d6 fire damage on a hit.',
      it: 'Crei tre raggi di fuoco, scagliati contro uno o più bersagli; attacco con incantesimo a distanza per ogni raggio, 2d6 danni da fuoco se colpisce.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'see-invisibility', name: { en: 'See Invisibility', it: 'Vedere l’Invisibile' }, level: 2, school: 'Divination',
    castingTime: '1 action', range: 'Self', components: 'V, S, M', duration: '1 hour',
    classes: ['bard', 'sorcerer', 'wizard'],
    description: { en: 'See invisible creatures/objects as if visible, and see into the Ethereal Plane, for the duration.', it: 'Vedi creature/oggetti invisibili come se fossero visibili, e vedi nel Piano Etereo, per la durata.' },
    source: 'SRD5.1',
  },
  {
    id: 'shatter', name: { en: 'Shatter', it: 'Frantumare' }, level: 2, school: 'Evocation',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Instantaneous',
    classes: ['bard', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'Each creature in a 10-foot-radius sphere makes a Constitution save, taking 3d8 thunder damage on a failure (half on success; disadvantage for inorganic creatures).',
      it: 'Ogni creatura in una sfera dal raggio di 3 metri effettua un tiro salvezza su Costituzione, subendo 3d8 danni da tuono in caso di fallimento (la metà in caso di successo; svantaggio per le creature inorganiche).',
    },
    source: 'SRD5.1',
  },
  {
    id: 'silence', name: { en: 'Silence', it: 'Silenzio' }, level: 2, school: 'Illusion (ritual)',
    castingTime: '1 action', range: '120 feet', components: 'V, S', duration: 'Concentration, up to 10 minutes',
    classes: ['bard', 'cleric', 'ranger'],
    description: {
      en: 'No sound can be created or pass through a 20-foot-radius sphere; creatures inside are deafened, and verbal spell components are impossible there.',
      it: 'Nessun suono può essere creato o passare attraverso una sfera dal raggio di 6 metri; le creature all’interno sono assordate, e le componenti verbali degli incantesimi sono impossibili lì.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'spider-climb', name: { en: 'Spider Climb', it: 'Scalata del Ragno' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: 'Concentration, up to 1 hour',
    classes: ['sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A willing creature can move on vertical surfaces and ceilings hands-free, gaining a climbing speed equal to its walking speed.',
      it: 'Una creatura consenziente può muoversi su superfici verticali e soffitti a mani libere, ottenendo una velocità di scalata pari alla sua velocità normale.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'spike-growth', name: { en: 'Spike Growth', it: 'Crescita di Spuntoni' }, level: 2, school: 'Transmutation',
    castingTime: '1 action', range: '150 feet', components: 'V, S, M', duration: 'Concentration, up to 10 minutes',
    classes: ['druid', 'ranger'],
    description: {
      en: 'The ground in a 20-foot radius sprouts camouflaged spikes: difficult terrain dealing 2d4 piercing damage per 5 feet traveled.',
      it: 'Il terreno in un raggio di 6 metri fa spuntare spuntoni camuffati: terreno difficile che infligge 2d4 danni perforanti ogni 1,5 metri percorsi.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'spiritual-weapon', name: { en: 'Spiritual Weapon', it: 'Arma Spirituale' }, level: 2, school: 'Evocation',
    castingTime: '1 bonus action', range: '60 feet', components: 'V, S', duration: '1 minute',
    classes: ['cleric'],
    description: {
      en: 'A floating spectral weapon appears; melee spell attack, 1d8 + your spellcasting ability modifier force damage. Move it 20 feet and repeat the attack as a bonus action on later turns.',
      it: 'Un’arma spettrale fluttuante appare; attacco con incantesimo in mischia, 1d8 + il tuo modificatore di caratteristica da incantatore danni da forza. Muovila di 6 metri e ripeti l’attacco come azione bonus nei turni successivi.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'suggestion', name: { en: 'Suggestion', it: 'Suggestione' }, level: 2, school: 'Enchantment',
    castingTime: '1 action', range: '30 feet', components: 'V, M', duration: 'Concentration, up to 8 hours',
    classes: ['bard', 'druid', 'sorcerer', 'warlock', 'wizard'],
    description: {
      en: 'A creature that can hear/understand you must succeed on a Wisdom save or pursue a reasonable course of action you describe for the duration.',
      it: 'Una creatura che può sentirti/comprenderti deve superare un tiro salvezza su Saggezza o intraprendere un ragionevole corso d’azione che descrivi, per la durata.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'warding-bond', name: { en: 'Warding Bond', it: 'Legame Protettivo' }, level: 2, school: 'Abjuration',
    castingTime: '1 action', range: 'Touch', components: 'V, S, M', duration: '1 hour',
    classes: ['cleric'],
    description: {
      en: 'A touched creature gains +1 AC/saves and resistance to all damage while within 60 feet of you; you take the same damage it takes.',
      it: 'Una creatura toccata ottiene +1 a CA/tiri salvezza e resistenza a tutti i danni mentre è entro 18 metri da te; tu subisci lo stesso danno che subisce lei.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'web', name: { en: 'Web', it: 'Ragnatela' }, level: 2, school: 'Conjuration',
    castingTime: '1 action', range: '60 feet', components: 'V, S, M', duration: 'Concentration, up to 1 hour',
    classes: ['sorcerer', 'wizard'],
    description: {
      en: 'Thick webbing fills a 20-foot cube (difficult terrain, lightly obscured); creatures there make a Dexterity save or are restrained until they break free.',
      it: 'Una fitta ragnatela riempie un cubo di 6 metri (terreno difficile, leggermente oscurato); le creature lì presenti effettuano un tiro salvezza su Destrezza o vengono bloccate finché non si liberano.',
    },
    source: 'SRD5.1',
  },
  {
    id: 'zone-of-truth', name: { en: 'Zone of Truth', it: 'Zona di Verità' }, level: 2, school: 'Enchantment',
    castingTime: '1 action', range: '60 feet', components: 'V, S', duration: '10 minutes',
    classes: ['bard', 'cleric', 'paladin'],
    description: {
      en: 'Creatures entering a 15-foot-radius sphere make a Charisma save or can’t speak a deliberate lie while inside it.',
      it: 'Le creature che entrano in una sfera dal raggio di 4,5 metri effettuano un tiro salvezza su Carisma o non possono pronunciare una bugia deliberata mentre sono al suo interno.',
    },
    source: 'SRD5.1',
  },
]
