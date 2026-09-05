import { useMemo } from 'react'
import type { Character } from '../../types/character'
import { getRace } from '../../data/races'
import { getClass } from '../../data/classes'
import { getBackground } from '../../data/backgrounds'
import { totalPointBuySpent, POINT_BUY_BUDGET, STANDARD_ARRAY } from '../../lib/rules'

export const WIZARD_STEP_IDS = ['race', 'class', 'background', 'abilities', 'skills', 'details', 'review'] as const
export type WizardStepId = (typeof WIZARD_STEP_IDS)[number]

/**
 * Computes step validity once, from the draft character, so it can be
 * shared by the step bar and the Next button instead of being
 * recalculated independently in multiple components.
 */
export function useWizardValidity(draft: Character) {
  return useMemo(() => {
    const race = getRace(draft.raceId)
    const cls = getClass(draft.classId)
    const background = getBackground(draft.backgroundId)

    const raceValid = Boolean(race) && (!race?.subraces?.length || Boolean(draft.subraceId))
    const classValid = Boolean(cls)
    const backgroundValid = Boolean(background)

    const abilityValues = Object.values(draft.abilities) as number[]
    const abilitiesValid =
      draft.abilityMethod === 'manual'
        ? abilityValues.every((v) => v >= 3 && v <= 20)
        : draft.abilityMethod === 'pointBuy'
          ? totalPointBuySpent(draft.abilities) === POINT_BUY_BUDGET
          : [...abilityValues].sort().join(',') === [...STANDARD_ARRAY].sort().join(',')

    const requiredSkillCount = cls?.skillChoices.count ?? 0
    const chosenSkillCount = Object.values(draft.skills).filter((s) => s?.proficient).length
    const skillsValid = chosenSkillCount === requiredSkillCount

    const detailsValid = draft.name.trim().length > 0

    const invalid: Record<WizardStepId, boolean> = {
      race: !raceValid,
      class: !classValid,
      background: !backgroundValid,
      abilities: !abilitiesValid,
      skills: !skillsValid,
      details: !detailsValid,
      review: false,
    }

    return {
      invalid,
      invalidList: WIZARD_STEP_IDS.map((id) => invalid[id]),
      isComplete: !invalid.race && !invalid.class && !invalid.background && !invalid.abilities && !invalid.skills && !invalid.details,
    }
  }, [draft])
}
