import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Button } from './components/Button'
import { useCharacterStore } from './store/characterStore'
import { CreationWizard } from './features/creation/CreationWizard'
import { CharacterSheet } from './features/sheet/CharacterSheet'
import { PlayMode } from './features/play/PlayMode'
import { getRace } from './data/races'
import { getClass } from './data/classes'

type View = 'home' | 'create' | 'sheet' | 'play'

function App() {
  const { t } = useTranslation()
  const characters = useCharacterStore((state) => state.characters)
  const removeCharacter = useCharacterStore((state) => state.removeCharacter)
  const startPlayCopy = useCharacterStore((state) => state.startPlayCopy)
  const [view, setView] = useState<View>('home')
  const [openCharacterId, setOpenCharacterId] = useState<string | null>(null)

  const openCharacter = characters.find((c) => c.id === openCharacterId)

  const openPlay = (templateId: string) => {
    const copy = startPlayCopy(templateId)
    if (copy) {
      setOpenCharacterId(copy.id)
      setView('play')
    }
  }

  return (
    <div className="min-h-svh flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-100 print:bg-white print:text-black">
      <header className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-700 print:hidden">
        <div>
          <h1 className="font-heading text-2xl font-bold">{t('app.title')}</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">{t('app.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          {view !== 'home' && (
            <Button
              variant="ghost"
              onClick={() => {
                setView('home')
                setOpenCharacterId(null)
              }}
            >
              {t('nav.characters')}
            </Button>
          )}
          {view === 'sheet' && openCharacter?.kind === 'template' && (
            <Button variant="secondary" onClick={() => openPlay(openCharacter.id)}>
              {t('nav.play')}
            </Button>
          )}
          <LanguageSwitcher />
        </div>
      </header>

      {view === 'create' && <CreationWizard onFinished={() => setView('home')} />}

      {view === 'sheet' && openCharacter && <CharacterSheet character={openCharacter} />}

      {view === 'play' && openCharacter && <PlayMode character={openCharacter} />}

      {view === 'home' && (
        <main className="flex-1 px-6 py-8 max-w-3xl mx-auto w-full">
          {characters.length === 0 ? (
            <p className="text-stone-500 dark:text-stone-400 mb-4">{t('home.noCharacters')}</p>
          ) : (
            <ul className="mb-4 space-y-2">
              {characters.map((c) => {
                const race = getRace(c.raceId)
                const cls = getClass(c.classId)
                return (
                  <li
                    key={c.id}
                    className="rounded-lg border border-stone-200 dark:border-stone-700 px-4 py-3 flex items-center justify-between"
                  >
                    <button
                      type="button"
                      className="text-left flex-1"
                      onClick={() => {
                        setOpenCharacterId(c.id)
                        setView(c.kind === 'playCopy' ? 'play' : 'sheet')
                      }}
                    >
                      <div className="font-medium">
                        {c.name}
                        {c.kind === 'playCopy' && <span className="text-stone-400"> ({t('nav.play')})</span>}
                      </div>
                      {race && cls && (
                        <div className="text-xs text-stone-500 dark:text-stone-400">
                          {race.name.en} {cls.name.en} · {t('common.level')} {c.level}
                        </div>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeCharacter(c.id)}
                      className="text-sm text-stone-400 hover:text-red-700"
                    >
                      {t('home.delete')}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
          <Button onClick={() => setView('create')}>{t('home.newCharacter')}</Button>
        </main>
      )}

      <footer className="px-6 py-4 text-xs text-stone-400 border-t border-stone-200 dark:border-stone-700 print:hidden">
        {t('footer.notice')}
      </footer>
    </div>
  )
}

export default App
