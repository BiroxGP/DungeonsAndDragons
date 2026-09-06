import type { AbilityKey } from '../types/content'

/**
 * SRD 5.1 level-1 spellcasting numbers per class. Paladin and Ranger don't
 * gain spellcasting until 2nd level, and this generator only builds 1st-level
 * characters, so they (and every non-caster) simply have no entry here.
 * `spellsToChoose` is either a fixed "spells known" count, or a formula for
 * classes that prepare from their full class list (Cleric/Druid/Wizard):
 * ability modifier + level, minimum 1.
 */
export interface Level1SpellRule {
  cantrips: number
  spellsToChoose: number | 'abilityModPlusLevel'
  ability: AbilityKey
}

export const LEVEL_1_SPELL_RULES: Record<string, Level1SpellRule> = {
  bard: { cantrips: 2, spellsToChoose: 4, ability: 'cha' },
  cleric: { cantrips: 3, spellsToChoose: 'abilityModPlusLevel', ability: 'wis' },
  druid: { cantrips: 2, spellsToChoose: 'abilityModPlusLevel', ability: 'wis' },
  sorcerer: { cantrips: 4, spellsToChoose: 2, ability: 'cha' },
  warlock: { cantrips: 2, spellsToChoose: 2, ability: 'cha' },
  wizard: { cantrips: 3, spellsToChoose: 6, ability: 'int' },
}

export function getLevel1SpellRule(classId: string): Level1SpellRule | undefined {
  return LEVEL_1_SPELL_RULES[classId]
}

/** Resolves how many level-1 spells a rule allows, given the caster's ability modifier. */
export function requiredSpellCount(rule: Level1SpellRule, abilityMod: number): number {
  return rule.spellsToChoose === 'abilityModPlusLevel' ? Math.max(1, abilityMod + 1) : rule.spellsToChoose
}
