import { useTranslation } from 'react-i18next'
import type { Character } from '../../../types/character'
import type { SkillKey } from '../../../types/content'
import { getClass } from '../../../data/classes'
import { getBackground } from '../../../data/backgrounds'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

export function SkillsStep({ draft, patch }: StepProps) {
  const { t } = useTranslation()
  const cls = getClass(draft.classId)
  const background = getBackground(draft.backgroundId)
  const backgroundSkills = new Set(background?.skillProficiencies ?? [])

  if (!cls) return null

  const chosenCount = Object.values(draft.skills).filter((s) => s?.proficient).length

  const toggleSkill = (skill: SkillKey) => {
    if (backgroundSkills.has(skill)) return
    const isChosen = draft.skills[skill]?.proficient
    if (!isChosen && chosenCount >= cls.skillChoices.count) return
    patch({
      skills: {
        ...draft.skills,
        [skill]: { proficient: !isChosen, expertise: false },
      },
    })
  }

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-2">{t('wizard.skills.title')}</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
        {t('wizard.skills.chooseCount', { count: cls.skillChoices.count })} ({chosenCount}/{cls.skillChoices.count})
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {cls.skillChoices.from.map((skill) => {
          const fromBackground = backgroundSkills.has(skill)
          const checked = fromBackground || Boolean(draft.skills[skill]?.proficient)
          return (
            <label
              key={skill}
              className={
                'flex items-center gap-2 rounded-lg border p-2 text-sm ' +
                (fromBackground
                  ? 'border-stone-200 dark:border-stone-700 opacity-60 cursor-not-allowed'
                  : 'border-stone-200 dark:border-stone-700 cursor-pointer hover:border-stone-400')
              }
            >
              <input type="checkbox" checked={checked} disabled={fromBackground} onChange={() => toggleSkill(skill)} />
              {t(`skills.${skill}`)}
              {fromBackground && <span className="text-xs text-stone-400">({t('wizard.skills.fromBackground')})</span>}
            </label>
          )
        })}
      </div>
    </div>
  )
}
