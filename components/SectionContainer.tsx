import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string // Permet de personnaliser les styles
  ariaLabel?: string // Améliore l'accessibilité
}

export default function SectionContainer({ children, className, ariaLabel }: Props) {
  return (
    <section
      className={`mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 ${className || ''}`}
      aria-label={ariaLabel || 'Section'}
    >
      {children}
    </section>
  )
}
