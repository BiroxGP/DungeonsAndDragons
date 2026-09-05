interface SheetFieldProps {
  label: string
  value: string | number
  blank?: boolean
  className?: string
}

/**
 * Renders one labeled value on the character sheet. The screen view and the
 * printable blank template share this component instead of sprinkling
 * `isBlankSheet ? "___" : value` ternaries through the sheet's JSX.
 */
export function SheetField({ label, value, blank, className = '' }: SheetFieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-[10px] uppercase tracking-wide text-stone-500 dark:text-stone-400 print:text-black">{label}</span>
      <span className="text-sm font-medium print:text-black">{blank ? ' ' : value}</span>
    </div>
  )
}
