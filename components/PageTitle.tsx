import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  subtitle?: string
}

export default function PageTitle({ children, subtitle }: Props) {
  return (
    <div className="py-6 text-center">
      {/* Titre principal */}
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {children}
      </h1>

      {/* Sous-titre (optionnel) */}
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 sm:text-xl">{subtitle}</p>
      )}
    </div>
  )
}
