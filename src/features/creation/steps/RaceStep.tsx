import { useTranslation } from 'react-i18next'
import { RACES } from '../../../data/races'
import type { Character } from '../../../types/character'
import { raceImage } from '../../../lib/images'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

export function RaceStep({ draft, patch }: StepProps) {
  const { t, i18n } = useTranslation()
  const race = RACES.find((r) => r.id === draft.raceId)
  const localized = (text: { en: string; it?: string }) => (i18n.language === 'it' ? text.it ?? text.en : text.en)

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.race.title')}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {RACES.map((r) => {
          const selected = r.id === draft.raceId
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => patch({ raceId: r.id, subraceId: undefined })}
              className={
                'text-left rounded-lg border p-4 transition-colors flex gap-3 ' +
                (selected
                  ? 'border-red-800 bg-red-50 dark:bg-red-950'
                  : 'border-stone-200 dark:border-stone-700 hover:border-stone-400')
              }
            >
              <img
                src={raceImage(r.id)}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-stone-300 dark:border-stone-600"
              />
              <div>
                <div className="font-semibold">{localized(r.name)}</div>
                <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">{localized(r.description)}</div>
              </div>
            </button>
          )
        })}
      </div>

      {race && (
        <div className="mt-6 rounded-lg border border-stone-200 dark:border-stone-700 p-4 space-y-3">
          {race.subraces?.length ? (
            <div>
              <div className="font-medium mb-2">{t('wizard.race.subrace')}</div>
              <div className="flex flex-wrap gap-2">
                {race.subraces.map((sr) => (
                  <button
                    key={sr.id}
                    type="button"
                    onClick={() => patch({ subraceId: sr.id })}
                    className={
                      'rounded-full px-3 py-1 text-sm border ' +
                      (draft.subraceId === sr.id
                        ? 'border-red-800 bg-red-800 text-white'
                        : 'border-stone-300 dark:border-stone-600')
                    }
                  >
                    {localized(sr.name)}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-stone-500 dark:text-stone-400">{t('wizard.race.speed')}: </span>
              {race.speed} ft.
            </div>
            <div>
              <span className="text-stone-500 dark:text-stone-400">{t('wizard.race.size')}: </span>
              {race.size === 'small' ? 'Small' : 'Medium'}
            </div>
          </div>

          <div>
            <div className="font-medium mb-1">{t('wizard.race.traits')}</div>
            <ul className="space-y-1 text-sm">
              {[...race.traits, ...(race.subraces?.find((sr) => sr.id === draft.subraceId)?.traits ?? [])].map((trait) => (
                <li key={trait.id}>
                  <span className="font-semibold">{localized(trait.name)}.</span> {localized(trait.description)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
