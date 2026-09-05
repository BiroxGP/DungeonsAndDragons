import type { SkillKey } from './content'

export const CHARACTER_SCHEMA_VERSION = 1

export type AbilityGenerationMethod = 'standardArray' | 'pointBuy' | 'manual'

export interface CharacterAbilities {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export interface CharacterSkillState {
  proficient: boolean
  expertise: boolean
}

export interface SpellSlotTrack {
  level: number
  max: number
  used: number
}

/**
 * A character is either the editable "template" the player built in the
 * wizard, or a "play copy" spun off from one to track HP/XP/resources
 * during sessions without ever mutating the template. This mirrors
 * MagicoMondo's clone-for-play idea but with an explicit discriminator
 * instead of a name regex.
 */
export type CharacterKind = 'template' | 'playCopy'

export interface Character {
  schemaVersion: typeof CHARACTER_SCHEMA_VERSION
  id: string
  kind: CharacterKind
  sourceCharacterId?: string

  name: string
  playerName: string
  raceId: string
  subraceId?: string
  classId: string
  backgroundId: string
  level: number
  alignment: string
  age: string
  appearance: string
  backstory: string
  notes: string

  abilityMethod: AbilityGenerationMethod
  abilities: CharacterAbilities

  skills: Partial<Record<SkillKey, CharacterSkillState>>
  languages: string[]
  featIds: string[]
  inventory: string
  equipmentItemIds: string[]
  gold: number

  knownSpellIds: string[]
  preparedSpellIds: string[]
  spellSlots: SpellSlotTrack[]

  maxHp: number
  currentHp: number
  temporaryHp: number
  experiencePoints: number

  createdAt: number
  updatedAt: number
}

export function createCharacter(name = 'Nuovo Personaggio / New Character'): Character {
  const now = Date.now()
  return {
    schemaVersion: CHARACTER_SCHEMA_VERSION,
    id: `char_${now}_${Math.random().toString(36).slice(2, 9)}`,
    kind: 'template',
    name,
    playerName: '',
    raceId: '',
    classId: '',
    backgroundId: '',
    level: 1,
    alignment: '',
    age: '',
    appearance: '',
    backstory: '',
    notes: '',
    abilityMethod: 'standardArray',
    abilities: { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 },
    skills: {},
    languages: ['Common'],
    featIds: [],
    inventory: '',
    equipmentItemIds: [],
    gold: 0,
    knownSpellIds: [],
    preparedSpellIds: [],
    spellSlots: [],
    maxHp: 0,
    currentHp: 0,
    temporaryHp: 0,
    experiencePoints: 0,
    createdAt: now,
    updatedAt: now,
  }
}
