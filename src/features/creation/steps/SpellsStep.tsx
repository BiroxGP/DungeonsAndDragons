import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Character } from '../../../types/character'
import type { Spell } from '../../../types/srd'
import { getClass } from '../../../data/classes'
import { spellsForClass } from '../../../data/spells'
import { abilityModifier } from '../../../lib/rules'
import { getLevel1SpellRule, requiredSpellCount } from '../../../lib/spellcasting'
import { SpellIcon } from '../../../components/SpellIcon'
import { schoolKey } from '../../../lib/schoolColors'
import { schoolImage } from '../../../lib/images'

interface StepProps {
  draft: Character
  patch: (patch: Partial<Character>) => void
}

const SCHOOL_ORDER = [
  'abjuration',
  'conjuration',
  'divination',
  'enchantment',
  'evocation',
  'illusion',
  'necromancy',
  'transmutation',
]

export function SpellsStep({ draft, patch }: StepProps) {
  const { t, i18n } = useTranslation()
  const localized = (text: { en: string; it?: string }) => (i18n.language === 'it' ? text.it ?? text.en : text.en)
  const cls = getClass(draft.classId)
  const [filterSchool, setFilterSchool] = useState<string | null>(null)

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

  const availableSchools = SCHOOL_ORDER.filter((key) =>
    [...cantripPool, ...spellPool].some((s) => schoolKey(s.school) === key),
  )

  const toggle = (id: string, pool: Spell[], chosen: string[], max: number) => {
    const isChosen = chosen.includes(id)
    if (!isChosen && chosen.length >= max) return
    const otherIds = draft.knownSpellIds.filter((sid) => !pool.some((s) => s.id === sid))
    const newChosen = isChosen ? chosen.filter((sid) => sid !== id) : [...chosen, id]
    patch({ knownSpellIds: [...otherIds, ...newChosen] })
  }

  const renderPool = (pool: Spell[], chosen: string[], max: number) => {
    const visible = filterSchool ? pool.filter((s) => schoolKey(s.school) === filterSchool) : pool
    return (
      <div className="grid gap-2 max-h-96 overflow-y-auto pr-1">
        {visible.map((spell) => {
          const checked = chosen.includes(spell.id)
          const atCap = !checked && chosen.length >= max
          return (
            <label
              key={spell.id}
              className={
                'block rounded-lg border p-2 transition-colors ' +
                (checked
                  ? 'border-red-800 bg-red-50 dark:bg-red-950 cursor-pointer'
                  : atCap
                    ? 'border-stone-200 dark:border-stone-700 opacity-50 cursor-not-allowed'
                    : 'border-stone-200 dark:border-stone-700 cursor-pointer hover:border-stone-400')
              }
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={checked}
                disabled={atCap}
                onChange={() => toggle(spell.id, pool, chosen, max)}
              />
              <div className="flex items-center gap-3">
                <SpellIcon spellId={spell.id} school={spell.school} className="shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold text-sm">{localized(spell.name)}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    {t(`schools.${schoolKey(spell.school)}`)} · {spell.castingTime} · {spell.range} · {spell.components} · {spell.duration}
                  </div>
                </div>
              </div>
              {checked && (
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 pl-[44px]">{localized(spell.description)}</p>
              )}
            </label>
          )
        })}
        {visible.length === 0 && (
          <p className="text-sm text-stone-400 italic py-2">{t('wizard.spells.noneForSchool')}</p>
        )}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-heading font-bold mb-2">{t('wizard.spells.title')}</h2>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">{t('wizard.spells.subtitle')}</p>

      <div className="mb-5">
        <div className="text-sm font-medium mb-2">{t('wizard.spells.filterBySchool')}</div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilterSchool(null)}
            className={
              'rounded-full px-3 py-1 text-sm border ' +
              (filterSchool === null
                ? 'border-red-800 bg-red-800 text-white'
                : 'border-stone-300 dark:border-stone-600 hover:border-stone-400')
            }
          >
            {t('wizard.spells.allSchools')}
          </button>
          {availableSchools.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilterSchool(filterSchool === key ? null : key)}
              className={
                'flex items-center gap-1.5 rounded-full pl-1 pr-3 py-1 text-sm border ' +
                (filterSchool === key
                  ? 'border-red-800 bg-red-50 dark:bg-red-950'
                  : 'border-stone-300 dark:border-stone-600 hover:border-stone-400')
              }
            >
              <img src={schoolImage(key)} alt="" aria-hidden="true" className="w-6 h-6 rounded-full object-cover" />
              {t(`schools.${key}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="font-medium mb-2">
          {t('wizard.spells.cantrips')} ({chosenCantrips.length}/{rule.cantrips})
        </div>
        {renderPool(cantripPool, chosenCantrips, rule.cantrips)}
      </div>

      <div>
        <div className="font-medium mb-2">
          {t('wizard.spells.level1')} ({chosenSpells.length}/{requiredSpells})
        </div>
        {renderPool(spellPool, chosenSpells, requiredSpells)}
      </div>
    </div>
  )
}
