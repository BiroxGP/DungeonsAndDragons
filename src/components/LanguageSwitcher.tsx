import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="inline-flex rounded-full border border-stone-300 dark:border-stone-600 overflow-hidden text-sm">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={i18n.language === code}
          className={
            'px-3 py-1 font-medium transition-colors ' +
            (i18n.language === code
              ? 'bg-red-800 text-white'
              : 'bg-transparent text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800')
          }
        >
          {label}
        </button>
      ))}
    </div>
  )
}
