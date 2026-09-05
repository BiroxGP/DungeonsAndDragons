import { useTranslation } from 'react-i18next'
import type { Character } from '../../../types/character'
import { getRace } from '../../../data/races'
import { getClass } from '../../../data/classes'
import { getBackground } from '../../../data/backgrounds'
import { ABILITY_KEYS, type AbilityKey } from '../../../types/content'
import { abilityModifier, formatModifier, hitPointsForLevel, proficiencyBonus } from '../../../lib/rules'
import { Button } from '../../../components/Button'

interface StepProps {
  draft: Character
  onFinish: (maxHp: number) => void
}

function raceBonusFor(draft: Character, key: AbilityKey): number {
  const race = getRace(draft.raceId)
  if (!race) return 0
  const base = race.abilityBonuses[key] ?? 0
  const subrace = race.subraces?.find((sr) => sr.id === draft.subraceId)
  return base + (subrace?.abilityBonuses[key] ?? 0)
}

export function ReviewStep({ draft, onFinish }: StepProps) {
  const { t, i18n } = useTranslation()
  const race = getRace(draft.raceId)
  const cls = getClass(draft.classId)
  const background = getBackground(draft.backgroundId)
  const localized = (text?: { en: string; it?: string }) => (text ? (i18n.language === 'it' ? text.it ?? text.en : text.en) : '')

  if (!race || !cls || !background) return null

  const finalAbilities = Object.fromEntries(
    ABILITY_KEYS.map((k) => [k, draft.abilities[k] + raceBonusFor(draft, k)]),
  ) as Record<AbilityKey, number>

  const conMod = abilityModifier(finalAbilities.con)
  const dexMod = abilityModifier(finalAbilities.dex)
  const maxHp = hitPointsForLevel(cls.hitDie, draft.level, conMod)
  const armorClass = 10 + dexMod
  const profBonus = proficiencyBonus(draft.level)

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.review.title')}</h2>

      <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-4 mb-4">
        <div className="text-lg font-semibold">{draft.name || '—'}</div>
        <div className="text-sm text-stone-500 dark:text-stone-400">
          {localized(race.name)} {localized(race.subraces?.find((sr) => sr.id === draft.subraceId)?.name)} · {localized(cls.name)} ·{' '}
          {localized(background.name)} · {t('common.level')} {draft.level}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 mb-4">
        <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-3 text-center">
          <div className="text-xs text-stone-500 dark:text-stone-400">{t('wizard.review.hitPoints')}</div>
          <div className="text-2xl font-bold">{maxHp}</div>
        </div>
        <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-3 text-center">
          <div className="text-xs text-stone-500 dark:text-stone-400">{t('wizard.review.armorClass')}</div>
          <div className="text-2xl font-bold">{armorClass}</div>
        </div>
        <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-3 text-center">
          <div className="text-xs text-stone-500 dark:text-stone-400">{t('wizard.review.proficiencyBonus')}</div>
          <div className="text-2xl font-bold">{formatModifier(profBonus)}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="font-medium mb-2">{t('wizard.review.abilityScores')}</div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
          {ABILITY_KEYS.map((key) => (
            <div key={key} className="rounded-lg border border-stone-200 dark:border-stone-700 p-2">
              <div className="text-xs uppercase text-stone-500 dark:text-stone-400">{key}</div>
              <div className="text-lg font-bold">{finalAbilities[key]}</div>
              <div className="text-xs">{formatModifier(abilityModifier(finalAbilities[key]))}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 text-sm">
        <span className="text-stone-500 dark:text-stone-400">{t('wizard.skills.title')}: </span>
        {Object.keys(draft.skills)
          .filter((s) => draft.skills[s as keyof typeof draft.skills]?.proficient)
          .concat(background.skillProficiencies)
          .filter((v, i, arr) => arr.indexOf(v) === i)
          .map((s) => t(`skills.${s}`))
          .join(', ')}
      </div>

      <Button onClick={() => onFinish(maxHp)}>{t('wizard.review.createCharacter')}</Button>
    </div>
  )
}
