import type { AbilityKey, LocalizedText, SkillKey } from './content'

export interface Trait {
  id: string
  name: LocalizedText
  description: LocalizedText
  /** Minimum character level this trait becomes active, for class features. */
  level?: number
}

export interface Race {
  id: string
  name: LocalizedText
  description: LocalizedText
  abilityBonuses: Partial<Record<AbilityKey, number>>
  speed: number
  size: 'small' | 'medium'
  languages: string[]
  traits: Trait[]
  subraces?: Subrace[]
  source: 'SRD5.1'
}

export interface Subrace {
  id: string
  name: LocalizedText
  description: LocalizedText
  abilityBonuses: Partial<Record<AbilityKey, number>>
  traits: Trait[]
}

export type CasterProgression = 'none' | 'full' | 'half' | 'third' | 'pact'

export interface CharacterClass {
  id: string
  name: LocalizedText
  description: LocalizedText
  hitDie: 6 | 8 | 10 | 12
  primaryAbility: AbilityKey[]
  savingThrowProficiencies: AbilityKey[]
  armorProficiencies: string[]
  weaponProficiencies: string[]
  toolProficiencies: string[]
  skillChoices: { count: number; from: SkillKey[] }
  casterProgression: CasterProgression
  spellcastingAbility?: AbilityKey
  traits: Trait[]
  source: 'SRD5.1'
}

export interface Background {
  id: string
  name: LocalizedText
  description: LocalizedText
  skillProficiencies: SkillKey[]
  toolProficiencies: string[]
  languages: number
  equipment: LocalizedText
  feature: Trait
  source: 'SRD5.1'
}

export interface Feat {
  id: string
  name: LocalizedText
  description: LocalizedText
  prerequisite?: LocalizedText
  source: 'SRD5.1'
}

export type ItemCategory = 'weapon' | 'armor' | 'gear' | 'tool' | 'pack'

export interface Item {
  id: string
  name: LocalizedText
  category: ItemCategory
  description?: LocalizedText
  cost?: string
  weight?: number
  properties?: string[]
  /** For weapons/armor: raw damage/AC text as printed in the SRD. */
  stats?: string
  source: 'SRD5.1'
}

export interface Spell {
  id: string
  name: LocalizedText
  description: LocalizedText
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  school: string
  castingTime: string
  range: string
  components: string
  duration: string
  classes: string[]
  source: 'SRD5.1'
}
