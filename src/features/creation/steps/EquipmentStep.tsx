import { useTranslation } from 'react-i18next'
import type { Character } from '../../../types/character'
import { getClass } from '../../../data/classes'
import { getBackground } from '../../../data/backgrounds'
import type { EquipmentSelections } from '../wizardSteps'

interface StepProps {
  draft: Character
  selections: EquipmentSelections
  onSelect: (groupIndex: number, optionIndex: number) => void
}

export function EquipmentStep({ draft, selections, onSelect }: StepProps) {
  const { t, i18n } = useTranslation()
  const cls = getClass(draft.classId)
  const background = getBackground(draft.backgroundId)
  const localized = (text?: { en: string; it?: string }) => (text ? (i18n.language === 'it' ? text.it ?? text.en : text.en) : '')

  if (!cls) return null

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.equipment.title')}</h2>

      {background && (
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
          {t('wizard.equipment.fromBackground')}: {localized(background.equipment)}
        </p>
      )}

      <div className="space-y-4">
        {cls.startingEquipment.map((group, groupIndex) => (
          <div key={groupIndex} className="rounded-lg border border-stone-200 dark:border-stone-700 p-3">
            <div className="flex flex-col gap-2">
              {group.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name={`equipment-group-${groupIndex}`}
                    checked={selections[groupIndex] === optionIndex}
                    onChange={() => onSelect(groupIndex, optionIndex)}
                  />
                  {localized(option.label)}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
