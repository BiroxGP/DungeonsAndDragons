import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Button } from './components/Button'
import { useCharacterStore } from './store/characterStore'
import { CreationWizard } from './features/creation/CreationWizard'
import { getRace } from './data/races'
import { getClass } from './data/classes'

type View = 'home' | 'create'

function App() {
  const { t } = useTranslation()
  const characters = useCharacterStore((state) => state.characters)
  const removeCharacter = useCharacterStore((state) => state.removeCharacter)
  const [view, setView] = useState<View>('home')

  return (
    <div className="min-h-svh flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-100">
      <header className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-700">
        <div>
          <h1 className="font-heading text-2xl font-bold">{t('app.title')}</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">{t('app.subtitle')}</p>
        </div>
        <LanguageSwitcher />
      </header>

      {view === 'create' ? (
        <CreationWizard onFinished={() => setView('home')} />
      ) : (
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
                    <div>
                      <div className="font-medium">{c.name}</div>
                      {race && cls && (
                        <div className="text-xs text-stone-500 dark:text-stone-400">
                          {race.name.en} {cls.name.en} · {t('common.level')} {c.level}
                        </div>
                      )}
                    </div>
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

      <footer className="px-6 py-4 text-xs text-stone-400 border-t border-stone-200 dark:border-stone-700">
        {t('footer.notice')}
      </footer>
    </div>
  )
}

export default App
