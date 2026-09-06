import { useTranslation } from 'react-i18next'
import { BACKGROUNDS } from '../../../data/backgrounds'
import type { Character } from '../../../types/character'
import { backgroundImage } from '../../../lib/images'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

export function BackgroundStep({ draft, patch }: StepProps) {
  const { t, i18n } = useTranslation()
  const background = BACKGROUNDS.find((b) => b.id === draft.backgroundId)
  const localized = (text: { en: string; it?: string }) => (i18n.language === 'it' ? text.it ?? text.en : text.en)

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.background.title')}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {BACKGROUNDS.map((b) => {
          const selected = b.id === draft.backgroundId
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => patch({ backgroundId: b.id })}
              className={
                'text-left rounded-lg border p-4 transition-colors flex gap-3 ' +
                (selected
                  ? 'border-red-800 bg-red-50 dark:bg-red-950'
                  : 'border-stone-200 dark:border-stone-700 hover:border-stone-400')
              }
            >
              <img
                src={backgroundImage(b.id)}
                alt=""
                aria-hidden="true"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-stone-300 dark:border-stone-600"
              />
              <div>
                <div className="font-semibold">
                  {localized(b.name)}
                  {b.source === 'original' && (
                    <span className="ml-2 text-xs font-normal text-stone-400">({t('wizard.background.original')})</span>
                  )}
                </div>
                <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">{localized(b.description)}</div>
              </div>
            </button>
          )
        })}
      </div>

      {background && (
        <div className="mt-6 rounded-lg border border-stone-200 dark:border-stone-700 p-4 space-y-2 text-sm">
          <div>
            <span className="text-stone-500 dark:text-stone-400">{t('wizard.background.skillProficiencies')}: </span>
            {background.skillProficiencies.map((s) => t(`skills.${s}`)).join(', ')}
          </div>
          <div>{localized(background.equipment)}</div>
          <div>
            <span className="font-semibold">
              {t('wizard.background.feature')}: {localized(background.feature.name)}.
            </span>{' '}
            {localized(background.feature.description)}
          </div>
        </div>
      )}
    </div>
  )
}
