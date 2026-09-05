import { useMemo } from 'react'
import type { Character } from '../../types/character'
import { ABILITY_KEYS, SKILL_ABILITY, type AbilityKey, type SkillKey } from '../../types/content'
import { getRace } from '../../data/races'
import { getClass } from '../../data/classes'
import { abilityModifier, proficiencyBonus, carryingCapacity } from '../../lib/rules'
import { spellSlotsFor, PACT_MAGIC } from '../../lib/spellSlots'

export interface DerivedStats {
  finalAbilities: Record<AbilityKey, number>
  modifiers: Record<AbilityKey, number>
  proficiencyBonus: number
  savingThrows: Record<AbilityKey, { modifier: number; proficient: boolean }>
  skills: Record<SkillKey, { modifier: number; proficient: boolean; expertise: boolean }>
  armorClass: number
  initiative: number
  speed: number
  carryingCapacity: number
  spellSlots: number[]
  pactMagic: { slots: number; slotLevel: number } | null
  spellSaveDc: number | null
  spellAttackBonus: number | null
}

/** Computes every derived character stat once, so the sheet and play mode read from a single source of truth. */
export function useDerivedStats(character: Character): DerivedStats {
  return useMemo(() => {
    const race = getRace(character.raceId)
    const subrace = race?.subraces?.find((sr) => sr.id === character.subraceId)
    const cls = getClass(character.classId)
    const level = character.level

    const finalAbilities = Object.fromEntries(
      ABILITY_KEYS.map((key) => {
        const base = character.abilities[key]
        const raceBonus = (race?.abilityBonuses[key] ?? 0) + (subrace?.abilityBonuses[key] ?? 0)
        return [key, base + raceBonus]
      }),
    ) as Record<AbilityKey, number>

    const modifiers = Object.fromEntries(ABILITY_KEYS.map((key) => [key, abilityModifier(finalAbilities[key])])) as Record<
      AbilityKey,
      number
    >

    const profBonus = proficiencyBonus(level)

    const savingThrows = Object.fromEntries(
      ABILITY_KEYS.map((key) => {
        const proficient = cls?.savingThrowProficiencies.includes(key) ?? false
        return [key, { modifier: modifiers[key] + (proficient ? profBonus : 0), proficient }]
      }),
    ) as Record<AbilityKey, { modifier: number; proficient: boolean }>

    const skills = Object.fromEntries(
      (Object.keys(SKILL_ABILITY) as SkillKey[]).map((skill) => {
        const state = character.skills[skill]
        const proficient = Boolean(state?.proficient)
        const expertise = Boolean(state?.expertise)
        const abilityMod = modifiers[SKILL_ABILITY[skill]]
        const bonus = proficient ? profBonus * (expertise ? 2 : 1) : 0
        return [skill, { modifier: abilityMod + bonus, proficient, expertise }]
      }),
    ) as Record<SkillKey, { modifier: number; proficient: boolean; expertise: boolean }>

    const armorClass = 10 + modifiers.dex
    const initiative = modifiers.dex
    const speed = race?.speed ?? 30

    const spellSlots = cls ? spellSlotsFor(cls.casterProgression, level) : []
    const pactMagic = cls?.casterProgression === 'pact' ? PACT_MAGIC[Math.min(20, level)] : null
    const spellSaveDc = cls?.spellcastingAbility ? 8 + profBonus + modifiers[cls.spellcastingAbility] : null
    const spellAttackBonus = cls?.spellcastingAbility ? profBonus + modifiers[cls.spellcastingAbility] : null

    return {
      finalAbilities,
      modifiers,
      proficiencyBonus: profBonus,
      savingThrows,
      skills,
      armorClass,
      initiative,
      speed,
      carryingCapacity: carryingCapacity(finalAbilities.str),
      spellSlots,
      pactMagic,
      spellSaveDc,
      spellAttackBonus,
    }
  }, [character])
}
