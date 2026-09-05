import { useTranslation } from 'react-i18next'
import type { Character } from '../../types/character'
import { ABILITY_KEYS, SKILL_ABILITY, type SkillKey } from '../../types/content'
import { getRace } from '../../data/races'
import { getClass } from '../../data/classes'
import { getBackground } from '../../data/backgrounds'
import { getSpell } from '../../data/spells'
import { formatModifier } from '../../lib/rules'
import { useDerivedStats } from './useDerivedStats'
import { SheetField } from '../../components/SheetField'
import { Button } from '../../components/Button'

interface CharacterSheetProps {
  character: Character
}

export function CharacterSheet({ character }: CharacterSheetProps) {
  const { t, i18n } = useTranslation()
  const localized = (text?: { en: string; it?: string }) => (text ? (i18n.language === 'it' ? text.it ?? text.en : text.en) : '')

  const race = getRace(character.raceId)
  const subrace = race?.subraces?.find((sr) => sr.id === character.subraceId)
  const cls = getClass(character.classId)
  const background = getBackground(character.backgroundId)
  const stats = useDerivedStats(character)

  if (!race || !cls || !background) return null

  const allTraits = [
    ...race.traits,
    ...(subrace?.traits ?? []),
    ...cls.traits.filter((trait) => (trait.level ?? 1) <= character.level),
  ]

  const knownSpells = character.knownSpellIds.map((id) => getSpell(id)).filter(Boolean)

  return (
    <div className="max-w-4xl mx-auto w-full px-6 py-6 print:px-0 print:py-0">
      <div className="flex items-start justify-between mb-4 print:hidden">
        <div />
        <Button variant="secondary" onClick={() => window.print()}>
          🖨 {t('common.print')}
        </Button>
      </div>

      <header className="mb-4 border-b border-stone-300 dark:border-stone-600 pb-3 print:border-black">
        <h1 className="font-heading text-2xl font-bold print:text-black">{character.name}</h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 print:text-black">
          {localized(race.name)} {localized(subrace?.name)} · {localized(cls.name)} · {localized(background.name)} ·{' '}
          {t('common.level')} {character.level}
          {character.playerName && ` · ${character.playerName}`}
        </p>
      </header>

      <section className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
        <SheetField label={t('wizard.review.armorClass')} value={stats.armorClass} />
        <SheetField label="Initiative" value={formatModifier(stats.initiative)} />
        <SheetField label={t('wizard.race.speed')} value={`${stats.speed} ft.`} />
        <SheetField label={t('wizard.review.hitPoints')} value={`${character.currentHp} / ${character.maxHp}`} />
        <SheetField label={t('wizard.review.proficiencyBonus')} value={formatModifier(stats.proficiencyBonus)} />
        <SheetField label="Carrying Capacity" value={`${stats.carryingCapacity} lb.`} />
      </section>

      <section className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
        {ABILITY_KEYS.map((key) => (
          <div key={key} className="rounded-lg border border-stone-200 dark:border-stone-700 p-2 text-center print:border-black">
            <div className="text-xs uppercase text-stone-500 dark:text-stone-400 print:text-black">{t(`abilities.${key}`)}</div>
            <div className="text-xl font-bold print:text-black">{stats.finalAbilities[key]}</div>
            <div className="text-xs print:text-black">{formatModifier(stats.modifiers[key])}</div>
          </div>
        ))}
      </section>

      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        <section>
          <h2 className="font-heading font-bold mb-2 print:text-black">{t('wizard.class.savingThrows')}</h2>
          <ul className="space-y-1 text-sm">
            {ABILITY_KEYS.map((key) => (
              <li key={key} className="flex items-center justify-between print:text-black">
                <span>
                  <span className={stats.savingThrows[key].proficient ? 'font-semibold' : ''}>
                    {stats.savingThrows[key].proficient ? '●' : '○'}
                  </span>{' '}
                  {t(`abilities.${key}`)}
                </span>
                <span>{formatModifier(stats.savingThrows[key].modifier)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold mb-2 print:text-black">{t('wizard.steps.skills')}</h2>
          <ul className="space-y-1 text-sm">
            {(Object.keys(SKILL_ABILITY) as SkillKey[]).map((skill) => (
              <li key={skill} className="flex items-center justify-between print:text-black">
                <span>
                  <span className={stats.skills[skill].proficient ? 'font-semibold' : ''}>
                    {stats.skills[skill].expertise ? '◆' : stats.skills[skill].proficient ? '●' : '○'}
                  </span>{' '}
                  {t(`skills.${skill}`)}
                </span>
                <span>{formatModifier(stats.skills[skill].modifier)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {cls.casterProgression !== 'none' && (
        <section className="mb-6">
          <h2 className="font-heading font-bold mb-2 print:text-black">Spellcasting</h2>
          <div className="flex gap-4 text-sm mb-2">
            <span>Spell save DC: {stats.spellSaveDc}</span>
            <span>Spell attack: {formatModifier(stats.spellAttackBonus ?? 0)}</span>
          </div>
          {stats.pactMagic ? (
            <div className="text-sm mb-2">
              Pact slots: {stats.pactMagic.slots} × level {stats.pactMagic.slotLevel}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 text-sm mb-2">
              {stats.spellSlots.map((count, i) => (
                <span key={i} className="rounded border border-stone-300 dark:border-stone-600 px-2 py-0.5 print:border-black">
                  Lv{i + 1}: {count}
                </span>
              ))}
            </div>
          )}
          <ul className="text-sm space-y-1">
            {knownSpells.map((spell) => (
              <li key={spell!.id}>
                <span className="font-semibold">{localized(spell!.name)}</span>{' '}
                <span className="text-stone-500 dark:text-stone-400 print:text-black">
                  ({spell!.level === 0 ? 'Cantrip' : `Lv${spell!.level}`})
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-6">
        <h2 className="font-heading font-bold mb-2 print:text-black">{t('wizard.race.traits')}</h2>
        <ul className="space-y-1 text-sm">
          {allTraits.map((trait) => (
            <li key={trait.id} className="print:text-black">
              <span className="font-semibold">{localized(trait.name)}.</span> {localized(trait.description)}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-heading font-bold mb-2 print:text-black">Inventory</h2>
        <p className="text-sm whitespace-pre-wrap print:text-black">{character.inventory || background.equipment.en}</p>
      </section>

      {character.backstory && (
        <section className="mb-6">
          <h2 className="font-heading font-bold mb-2 print:text-black">{t('wizard.details.backstory')}</h2>
          <p className="text-sm whitespace-pre-wrap print:text-black">{character.backstory}</p>
        </section>
      )}
    </div>
  )
}
