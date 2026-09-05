import type { AbilityKey } from '../types/content'
import type { CharacterAbilities } from '../types/character'

export function abilityModifier(score: number): number {
  return Math.floor((score - 10) / 2)
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`
}

export function proficiencyBonus(level: number): number {
  return 2 + Math.floor((Math.max(1, level) - 1) / 4)
}

/** SRD 5.1 standard array: 15, 14, 13, 12, 10, 8 assigned across the six abilities. */
export const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8]

/** SRD 5.1 point-buy cost table (Player's Basic Rules). Score -> point cost. */
const POINT_BUY_COST: Record<number, number> = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
}

export const POINT_BUY_BUDGET = 27
export const POINT_BUY_MIN = 8
export const POINT_BUY_MAX = 15

export function pointBuyCost(score: number): number {
  return POINT_BUY_COST[score] ?? Number.POSITIVE_INFINITY
}

export function totalPointBuySpent(abilities: CharacterAbilities): number {
  return (Object.values(abilities) as number[]).reduce((sum, score) => sum + pointBuyCost(score), 0)
}

/** XP thresholds by character level, SRD 5.1 "Beyond 1st Level" table. */
export const XP_THRESHOLDS: Record<number, number> = {
  1: 0,
  2: 300,
  3: 900,
  4: 2700,
  5: 6500,
  6: 14000,
  7: 23000,
  8: 34000,
  9: 48000,
  10: 64000,
  11: 85000,
  12: 100000,
  13: 120000,
  14: 140000,
  15: 165000,
  16: 195000,
  17: 225000,
  18: 265000,
  19: 305000,
  20: 355000,
}

export function levelForXp(xp: number): number {
  let level = 1
  for (let l = 1; l <= 20; l++) {
    if (xp >= XP_THRESHOLDS[l]) level = l
  }
  return level
}

export function hitPointsForLevel(hitDie: number, level: number, conModifier: number, average = true): number {
  const first = hitDie + conModifier
  if (level <= 1) return Math.max(1, first)
  const perLevelAverage = Math.floor(hitDie / 2) + 1
  const rest = average
    ? (level - 1) * (perLevelAverage + conModifier)
    : 0
  return Math.max(level, first + rest)
}

export function abilityScoreForKey(abilities: CharacterAbilities, key: AbilityKey): number {
  return abilities[key]
}
