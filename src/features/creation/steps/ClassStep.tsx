import { useTranslation } from 'react-i18next'
import { CLASSES } from '../../../data/classes'
import type { Character } from '../../../types/character'
import { classImage } from '../../../lib/images'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

const SAVE_LABELS: Record<string, string> = { str: 'STR', dex: 'DEX', con: 'CON', int: 'INT', wis: 'WIS', cha: 'CHA' }

export function ClassStep({ draft, patch }: StepProps) {
  const { t, i18n } = useTranslation()
  const cls = CLASSES.find((c) => c.id === draft.classId)
  const localized = (text: { en: string; it?: string }) => (i18n.language === 'it' ? text.it ?? text.en : text.en)

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.class.title')}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {CLASSES.map((c) => {
          const selected = c.id === draft.classId
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => patch({ classId: c.id, skills: {}, knownSpellIds: [] })}
              className={
                'text-left rounded-lg border p-4 transition-colors flex gap-3 ' +
                (selected
                  ? 'border-red-800 bg-red-50 dark:bg-red-950'
                  : 'border-stone-200 dark:border-stone-700 hover:border-stone-400')
              }
            >
              <img
                src={classImage(c.id)}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-stone-300 dark:border-stone-600"
              />
              <div>
                <div className="font-semibold">{localized(c.name)}</div>
                <div className="text-sm text-stone-500 dark:text-stone-400 mt-1">{localized(c.description)}</div>
              </div>
            </button>
          )
        })}
      </div>

      {cls && (
        <div className="mt-6 rounded-lg border border-stone-200 dark:border-stone-700 p-4 space-y-2 text-sm">
          <div>
            <span className="text-stone-500 dark:text-stone-400">{t('wizard.class.hitDie')}: </span>d{cls.hitDie}
          </div>
          <div>
            <span className="text-stone-500 dark:text-stone-400">{t('wizard.class.primaryAbility')}: </span>
            {cls.primaryAbility.map((a) => SAVE_LABELS[a]).join(' / ')}
          </div>
          <div>
            <span className="text-stone-500 dark:text-stone-400">{t('wizard.class.savingThrows')}: </span>
            {cls.savingThrowProficiencies.map((a) => SAVE_LABELS[a]).join(', ')}
          </div>
          {cls.casterProgression !== 'none' && (
            <div>
              <span className="text-stone-500 dark:text-stone-400">{t('wizard.class.casterProgression')}: </span>
              {cls.casterProgression} ({SAVE_LABELS[cls.spellcastingAbility ?? '']})
            </div>
          )}
          <ul className="space-y-1 pt-2">
            {cls.traits
              .filter((trait) => (trait.level ?? 1) <= draft.level)
              .map((trait) => (
                <li key={trait.id}>
                  <span className="font-semibold">
                    {localized(trait.name)} ({t('common.level')} {trait.level ?? 1}).
                  </span>{' '}
                  {localized(trait.description)}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
