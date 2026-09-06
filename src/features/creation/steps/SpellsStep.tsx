import { useTranslation } from 'react-i18next'
import type { Character } from '../../../types/character'
import { getClass } from '../../../data/classes'
import { spellsForClass } from '../../../data/spells'
import { abilityModifier } from '../../../lib/rules'
import { getLevel1SpellRule, requiredSpellCount } from '../../../lib/spellcasting'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

export function SpellsStep({ draft, patch }: StepProps) {
  const { t, i18n } = useTranslation()
  const localized = (text: { en: string; it?: string }) => (i18n.language === 'it' ? text.it ?? text.en : text.en)
  const cls = getClass(draft.classId)

  if (!cls) return null

  const rule = getLevel1SpellRule(cls.id)

  if (!rule) {
    return (
      <div>
        <h2 className="text-xl font-heading font-bold mb-4">{t('wizard.spells.title')}</h2>
        <p className="text-sm text-stone-500 dark:text-stone-400">{t('wizard.spells.noSpellsYet')}</p>
      </div>
    )
  }

  const abilityMod = abilityModifier(draft.abilities[rule.ability])
  const requiredSpells = requiredSpellCount(rule, abilityMod)
  const cantripPool = spellsForClass(cls.id).filter((s) => s.level === 0)
  const spellPool = spellsForClass(cls.id).filter((s) => s.level === 1)

  const chosenCantrips = draft.knownSpellIds.filter((id) => cantripPool.some((c) => c.id === id))
  const chosenSpells = draft.knownSpellIds.filter((id) => spellPool.some((s) => s.id === id))

  const toggle = (id: string, pool: typeof cantripPool, chosen: string[], max: number) => {
    const isChosen = chosen.includes(id)
    if (!isChosen && chosen.length >= max) return
    const otherIds = draft.knownSpellIds.filter((sid) => !pool.some((s) => s.id === sid))
    const newChosen = isChosen ? chosen.filter((sid) => sid !== id) : [...chosen, id]
    patch({ knownSpellIds: [...otherIds, ...newChosen] })
  }

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-2">{t('wizard.spells.title')}</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">{t('wizard.spells.subtitle')}</p>

      <div className="mb-6">
        <div className="font-medium mb-2">
          {t('wizard.spells.cantrips')} ({chosenCantrips.length}/{rule.cantrips})
        </div>
        <div className="grid gap-2 sm:grid-cols-2 max-h-64 overflow-y-auto pr-1">
          {cantripPool.map((spell) => {
            const checked = chosenCantrips.includes(spell.id)
            return (
              <label
                key={spell.id}
                className="flex items-start gap-2 rounded-lg border border-stone-200 dark:border-stone-700 p-2 text-sm cursor-pointer hover:border-stone-400"
              >
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={checked}
                  onChange={() => toggle(spell.id, cantripPool, chosenCantrips, rule.cantrips)}
                />
                <span className="font-semibold">{localized(spell.name)}</span>
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <div className="font-medium mb-2">
          {t('wizard.spells.level1')} ({chosenSpells.length}/{requiredSpells})
        </div>
        <div className="grid gap-2 sm:grid-cols-2 max-h-64 overflow-y-auto pr-1">
          {spellPool.map((spell) => {
            const checked = chosenSpells.includes(spell.id)
            return (
              <label
                key={spell.id}
                className="flex items-start gap-2 rounded-lg border border-stone-200 dark:border-stone-700 p-2 text-sm cursor-pointer hover:border-stone-400"
              >
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={checked}
                  onChange={() => toggle(spell.id, spellPool, chosenSpells, requiredSpells)}
                />
                <span className="font-semibold">{localized(spell.name)}</span>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}
