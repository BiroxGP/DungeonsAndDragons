import { useTranslation } from 'react-i18next'
import type { Character } from '../../../types/character'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

const inputClass = 'w-full rounded border border-stone-300 dark:border-stone-600 bg-transparent px-2 py-1'

export function DetailsStep({ draft, patch }: StepProps) {
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.details.title')}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="block text-sm mb-1">{t('wizard.details.name')}</span>
          <input className={inputClass} value={draft.name} onChange={(e) => patch({ name: e.target.value })} />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">{t('wizard.details.playerName')}</span>
          <input className={inputClass} value={draft.playerName} onChange={(e) => patch({ playerName: e.target.value })} />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">{t('wizard.details.alignment')}</span>
          <input className={inputClass} value={draft.alignment} onChange={(e) => patch({ alignment: e.target.value })} />
        </label>
        <label className="block">
          <span className="block text-sm mb-1">{t('wizard.details.age')}</span>
          <input className={inputClass} value={draft.age} onChange={(e) => patch({ age: e.target.value })} />
        </label>
        <label className="block sm:col-span-2">
          <span className="block text-sm mb-1">{t('wizard.details.appearance')}</span>
          <textarea
            className={inputClass}
            rows={2}
            value={draft.appearance}
            onChange={(e) => patch({ appearance: e.target.value })}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="block text-sm mb-1">{t('wizard.details.backstory')}</span>
          <textarea
            className={inputClass}
            rows={4}
            value={draft.backstory}
            onChange={(e) => patch({ backstory: e.target.value })}
          />
        </label>
      </div>
    </div>
  )
}
