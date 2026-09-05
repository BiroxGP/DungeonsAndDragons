import type { CharacterClass } from '../../types/srd'
import { barbarian } from './barbarian'
import { bard } from './bard'
import { cleric } from './cleric'
import { druid } from './druid'
import { fighter } from './fighter'
import { monk } from './monk'
import { paladin } from './paladin'
import { ranger } from './ranger'
import { rogue } from './rogue'
import { sorcerer } from './sorcerer'
import { warlock } from './warlock'
import { wizard } from './wizard'

export const CLASSES: CharacterClass[] = [
  barbarian, bard, cleric, druid, fighter, monk,
  paladin, ranger, rogue, sorcerer, warlock, wizard,
]

export const CLASSES_BY_ID: Record<string, CharacterClass> = Object.fromEntries(
  CLASSES.map((c) => [c.id, c]),
)

export function getClass(id: string): CharacterClass | undefined {
  return CLASSES_BY_ID[id]
}
