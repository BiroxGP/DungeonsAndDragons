import { useTranslation } from 'react-i18next'
import type { Character } from '../../types/character'
import { getRace } from '../../data/races'
import { getClass } from '../../data/classes'
import { useCharacterStore } from '../../store/characterStore'
import { useDerivedStats } from '../sheet/useDerivedStats'
import { hitPointsForLevel, levelForXp, abilityModifier } from '../../lib/rules'
import { spellSlotsFor, PACT_MAGIC } from '../../lib/spellSlots'
import { Button } from '../../components/Button'
import { classImage } from '../../lib/images'

interface PlayModeProps {
  character: Character
}

const inputClass = 'w-full rounded border border-stone-300 dark:border-stone-600 bg-transparent px-2 py-1'

export function PlayMode({ character }: PlayModeProps) {
  const { t } = useTranslation()
  const updateCharacter = useCharacterStore((state) => state.updateCharacter)
  const race = getRace(character.raceId)
  const cls = getClass(character.classId)
  const stats = useDerivedStats(character)

  if (!race || !cls) return null

  const patch = (p: Partial<Character>) => updateCharacter(character.id, p)

  const setHp = (value: number) => patch({ currentHp: Math.max(0, Math.min(character.maxHp, value)) })
  const setTempHp = (value: number) => patch({ temporaryHp: Math.max(0, value) })

  const longRest = () => {
    patch({
      currentHp: character.maxHp,
      temporaryHp: 0,
      spellSlots: character.spellSlots.map((s) => ({ ...s, used: 0 })),
    })
  }

  const shortRest = () => {
    if (cls.casterProgression === 'pact') {
      patch({ spellSlots: character.spellSlots.map((s) => ({ ...s, used: 0 })) })
    }
  }

  const useSlot = (level: number, delta: number) => {
    patch({
      spellSlots: character.spellSlots.map((s) =>
        s.level === level ? { ...s, used: Math.max(0, Math.min(s.max, s.used + delta)) } : s,
      ),
    })
  }

  const availableLevel = levelForXp(character.experiencePoints)
  const canLevelUp = availableLevel > character.level

  const levelUp = () => {
    const newLevel = character.level + 1
    const conMod = abilityModifier(character.abilities.con + (race.abilityBonuses.con ?? 0))
    const oldMaxHp = hitPointsForLevel(cls.hitDie, character.level, conMod)
    const newMaxHp = hitPointsForLevel(cls.hitDie, newLevel, conMod)
    const hpGain = newMaxHp - oldMaxHp
    const newSlots =
      cls.casterProgression === 'pact'
        ? (() => {
            const pact = PACT_MAGIC[Math.min(20, newLevel)]
            return pact.slots > 0 ? [{ level: pact.slotLevel, max: pact.slots, used: 0 }] : []
          })()
        : spellSlotsFor(cls.casterProgression, newLevel).map((max, i) => ({
            level: i + 1,
            max,
            used: Math.min(character.spellSlots[i]?.used ?? 0, max),
          }))
    patch({
      level: newLevel,
      maxHp: newMaxHp,
      currentHp: character.currentHp + hpGain,
      spellSlots: newSlots,
    })
  }

  return (
    <div className="max-w-3xl mx-auto w-full px-6 py-6">
      <header className="mb-4 border-b border-stone-300 dark:border-stone-600 pb-3 flex items-center gap-3">
        <img
          src={classImage(cls.id)}
          alt=""
          aria-hidden="true"
          className="w-14 h-14 rounded-full object-cover shrink-0 border border-stone-300 dark:border-stone-600"
        />
        <div>
          <h1 className="font-heading text-2xl font-bold">{character.name}</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {race.name.en} · {cls.name.en} · {t('common.level')} {character.level}
          </p>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-3 mb-6">
        <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-3">
          <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">{t('wizard.review.hitPoints')}</div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className={inputClass}
              value={character.currentHp}
              onChange={(e) => setHp(Number(e.target.value))}
            />
            <span>/ {character.maxHp}</span>
          </div>
        </div>
        <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-3">
          <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">Temporary HP</div>
          <input
            type="number"
            className={inputClass}
            value={character.temporaryHp}
            onChange={(e) => setTempHp(Number(e.target.value))}
          />
        </div>
        <div className="rounded-lg border border-stone-200 dark:border-stone-700 p-3">
          <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">{t('wizard.review.armorClass')}</div>
          <div className="text-xl font-bold">{stats.armorClass}</div>
        </div>
      </section>

      <div className="flex gap-2 mb-6">
        <Button variant="secondary" onClick={shortRest}>
          Short Rest
        </Button>
        <Button variant="secondary" onClick={longRest}>
          Long Rest
        </Button>
      </div>

      <section className="mb-6 rounded-lg border border-stone-200 dark:border-stone-700 p-3">
        <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">Experience Points</div>
        <div className="flex items-center gap-3">
          <input
            type="number"
            className={inputClass}
            value={character.experiencePoints}
            onChange={(e) => patch({ experiencePoints: Math.max(0, Number(e.target.value)) })}
          />
          {canLevelUp && <Button onClick={levelUp}>Level Up → {availableLevel}</Button>}
        </div>
      </section>

      {(character.spellSlots.length > 0 || stats.pactMagic) && (
        <section className="mb-6">
          <h2 className="font-heading font-bold mb-2">Spell Slots</h2>
          <div className="flex flex-wrap gap-3">
            {character.spellSlots.map((slot) => (
              <div key={slot.level} className="rounded-lg border border-stone-200 dark:border-stone-700 p-2 text-sm">
                <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">Level {slot.level}</div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="secondary"
                    className="px-2 py-0.5"
                    onClick={() => useSlot(slot.level, 1)}
                    disabled={slot.used >= slot.max}
                  >
                    −
                  </Button>
                  <span className="w-12 text-center">
                    {slot.max - slot.used} / {slot.max}
                  </span>
                  <Button variant="secondary" className="px-2 py-0.5" onClick={() => useSlot(slot.level, -1)} disabled={slot.used <= 0}>
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mb-6">
        <h2 className="font-heading font-bold mb-2">Inventory</h2>
        <textarea
          className={inputClass}
          rows={4}
          value={character.inventory}
          onChange={(e) => patch({ inventory: e.target.value })}
        />
      </section>

      <section className="mb-6">
        <h2 className="font-heading font-bold mb-2">Notes</h2>
        <textarea className={inputClass} rows={4} value={character.notes} onChange={(e) => patch({ notes: e.target.value })} />
      </section>
    </div>
  )
}
