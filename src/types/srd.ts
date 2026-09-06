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
  /** 'SRD5.1' = transcribed from the official open document. 'original' =
   * written for this project — SRD 5.1 only publishes one subrace per race
   * (and none at all for Human, Dragonborn, Half-Elf, Half-Orc, Tiefling). */
  source: 'SRD5.1' | 'original'
}

export type CasterProgression = 'none' | 'full' | 'half' | 'third' | 'pact'

/**
 * One option within a starting-equipment choice group, e.g. "(a) a martial
 * weapon and a shield". `itemIds` may repeat an id to represent quantity
 * (e.g. two daggers). A generic SRD category like "any simple weapon" is
 * resolved to one representative item — this is a character generator, not
 * a full equipment-picker for every weapon in the category.
 */
export interface EquipmentOption {
  itemIds: string[]
  label: LocalizedText
}

export interface EquipmentChoiceGroup {
  options: EquipmentOption[]
}

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
  startingEquipment: EquipmentChoiceGroup[]
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
  /**
   * 'SRD5.1' = transcribed from the official open document. 'original' =
   * written for this project (SRD 5.1 only publishes one background,
   * Acolyte); mechanically SRD-legal but not official WotC text.
   */
  source: 'SRD5.1' | 'original'
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
