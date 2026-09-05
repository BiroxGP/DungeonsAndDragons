import { useTranslation } from 'react-i18next'
import type { Character, CharacterAbilities, AbilityGenerationMethod } from '../../../types/character'
import { ABILITY_KEYS, type AbilityKey } from '../../../types/content'
import { getRace } from '../../../data/races'
import {
  STANDARD_ARRAY,
  POINT_BUY_BUDGET,
  POINT_BUY_MIN,
  POINT_BUY_MAX,
  pointBuyCost,
  totalPointBuySpent,
  abilityModifier,
  formatModifier,
} from '../../../lib/rules'
import { Button } from '../../../components/Button'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

const METHODS: AbilityGenerationMethod[] = ['standardArray', 'pointBuy', 'manual']

function raceBonusFor(draft: Character, key: AbilityKey): number {
  const race = getRace(draft.raceId)
  if (!race) return 0
  const base = race.abilityBonuses[key] ?? 0
  const subrace = race.subraces?.find((sr) => sr.id === draft.subraceId)
  const sub = subrace?.abilityBonuses[key] ?? 0
  return base + sub
}

export function AbilitiesStep({ draft, patch }: StepProps) {
  const { t } = useTranslation()
  const abilities = draft.abilities

  const setAbility = (key: AbilityKey, value: number) => {
    patch({ abilities: { ...abilities, [key]: value } })
  }

  const setMethod = (method: AbilityGenerationMethod) => {
    const reset: CharacterAbilities =
      method === 'pointBuy'
        ? { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 }
        : method === 'standardArray'
          ? { str: 8, dex: 8, con: 8, int: 8, wis: 8, cha: 8 }
          : { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 }
    patch({ abilityMethod: method, abilities: reset })
  }

  const usedStandardValues = ABILITY_KEYS.map((k) => abilities[k])
  const pointsSpent = totalPointBuySpent(abilities)

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.abilities.title')}</h2>

      <div className="flex gap-2 mb-4">
        {METHODS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMethod(m)}
            className={
              'rounded-full px-3 py-1 text-sm border ' +
              (draft.abilityMethod === m ? 'border-red-800 bg-red-800 text-white' : 'border-stone-300 dark:border-stone-600')
            }
          >
            {t(`wizard.abilities.${m}`)}
          </button>
        ))}
      </div>

      {draft.abilityMethod === 'pointBuy' && (
        <div className="mb-3 text-sm">
          {t('wizard.abilities.pointsSpent')}: {pointsSpent} / {POINT_BUY_BUDGET}
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        {ABILITY_KEYS.map((key) => {
          const score = abilities[key]
          const bonus = raceBonusFor(draft, key)
          const total = score + bonus
          return (
            <div key={key} className="rounded-lg border border-stone-200 dark:border-stone-700 p-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{t(`abilities.${key}`)}</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">
                  {t('wizard.abilities.totalWithRace')}: {total} ({formatModifier(abilityModifier(total))})
                </div>
              </div>

              {draft.abilityMethod === 'standardArray' && (
                <select
                  value={score}
                  onChange={(e) => setAbility(key, Number(e.target.value))}
                  className="rounded border border-stone-300 dark:border-stone-600 bg-transparent px-2 py-1"
                >
                  {STANDARD_ARRAY.map((v) => (
                    <option key={v} value={v} disabled={usedStandardValues.includes(v) && v !== score}>
                      {v}
                    </option>
                  ))}
                </select>
              )}

              {draft.abilityMethod === 'pointBuy' && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    className="px-2 py-0.5"
                    disabled={score <= POINT_BUY_MIN}
                    onClick={() => setAbility(key, score - 1)}
                  >
                    −
                  </Button>
                  <span className="w-6 text-center">{score}</span>
                  <Button
                    variant="secondary"
                    className="px-2 py-0.5"
                    disabled={score >= POINT_BUY_MAX || pointsSpent + (pointBuyCost(score + 1) - pointBuyCost(score)) > POINT_BUY_BUDGET}
                    onClick={() => setAbility(key, score + 1)}
                  >
                    +
                  </Button>
                </div>
              )}

              {draft.abilityMethod === 'manual' && (
                <input
                  type="number"
                  min={3}
                  max={20}
                  value={score}
                  onChange={(e) => setAbility(key, Number(e.target.value))}
                  className="w-16 rounded border border-stone-300 dark:border-stone-600 bg-transparent px-2 py-1"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
