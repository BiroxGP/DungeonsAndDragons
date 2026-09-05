import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { Button } from './components/Button'
import { useCharacterStore } from './store/characterStore'

function App() {
  const { t } = useTranslation()
  const characters = useCharacterStore((state) => state.characters)
  const addCharacter = useCharacterStore((state) => state.addCharacter)

  return (
    <div className="min-h-svh flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-900 dark:text-stone-100">
      <header className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-700">
        <div>
          <h1 className="font-heading text-2xl font-bold">{t('app.title')}</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">{t('app.subtitle')}</p>
        </div>
        <LanguageSwitcher />
      </header>

      <main className="flex-1 px-6 py-8 max-w-3xl mx-auto w-full">
        {characters.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400 mb-4">{t('home.noCharacters')}</p>
        ) : (
          <ul className="mb-4 space-y-2">
            {characters.map((c) => (
              <li key={c.id} className="rounded-lg border border-stone-200 dark:border-stone-700 px-4 py-3">
                {c.name}
              </li>
            ))}
          </ul>
        )}
        <Button onClick={() => addCharacter()}>{t('home.newCharacter')}</Button>
      </main>

      <footer className="px-6 py-4 text-xs text-stone-400 border-t border-stone-200 dark:border-stone-700">
        {t('footer.notice')}
      </footer>
    </div>
  )
}

export default App
