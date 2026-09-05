import type { Spell } from '../../types/srd'
import { CANTRIPS } from './cantrips'
import { LEVEL_1_SPELLS } from './level1'
import { LEVEL_2_SPELLS } from './level2'
import { LEVEL_3_SPELLS } from './level3'
import { LEVEL_4_SPELLS } from './level4'
import { LEVEL_5_SPELLS } from './level5'
import { LEVEL_6_SPELLS } from './level6'
import { LEVEL_7_SPELLS } from './level7'
import { LEVEL_8_SPELLS } from './level8'
import { LEVEL_9_SPELLS } from './level9'

export const SPELLS: Spell[] = [
  ...CANTRIPS,
  ...LEVEL_1_SPELLS,
  ...LEVEL_2_SPELLS,
  ...LEVEL_3_SPELLS,
  ...LEVEL_4_SPELLS,
  ...LEVEL_5_SPELLS,
  ...LEVEL_6_SPELLS,
  ...LEVEL_7_SPELLS,
  ...LEVEL_8_SPELLS,
  ...LEVEL_9_SPELLS,
]

export const SPELLS_BY_ID: Record<string, Spell> = Object.fromEntries(SPELLS.map((s) => [s.id, s]))

export function getSpell(id: string): Spell | undefined {
  return SPELLS_BY_ID[id]
}

export function spellsForClass(classId: string): Spell[] {
  return SPELLS.filter((s) => s.classes.includes(classId))
}

export function spellsByLevel(level: Spell['level']): Spell[] {
  return SPELLS.filter((s) => s.level === level)
}
