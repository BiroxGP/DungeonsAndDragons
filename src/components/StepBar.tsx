interface StepBarProps {
  labels: string[]
  currentStep: number
  invalidSteps: boolean[]
  onStepClick: (index: number) => void
}

export function StepBar({ labels, currentStep, invalidSteps, onStepClick }: StepBarProps) {
  return (
    <ol className="flex flex-wrap gap-2 px-6 py-3 border-b border-stone-200 dark:border-stone-700 print:hidden">
      {labels.map((label, index) => {
        const isCurrent = index === currentStep
        const isInvalid = invalidSteps[index]
        return (
          <li key={label}>
            <button
              type="button"
              onClick={() => onStepClick(index)}
              className={
                'flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium transition-colors ' +
                (isCurrent
                  ? 'bg-red-800 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700')
              }
            >
              <span
                className={
                  'inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ' +
                  (isInvalid ? 'bg-amber-500 text-white animate-pulse' : isCurrent ? 'bg-white/20' : 'bg-stone-300 dark:bg-stone-600')
                }
              >
                {index + 1}
              </span>
              {label}
            </button>
          </li>
        )
      })}
    </ol>
  )
}
