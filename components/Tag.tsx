import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  className?: string // Permet de personnaliser les styles
  color?: string // Permet de définir une couleur spécifique pour le tag
}

const Tag = ({ text, className = '', color }: Props) => {
  const tagSlug = slug(text)
  const backgroundColor = color || 'bg-primary-100'
  const textColor = color ? 'text-white' : 'text-primary-500'

  return (
    <Link
      href={`/tags/${tagSlug}`}
      className={`inline-block rounded px-2 py-1 text-sm font-medium uppercase ${backgroundColor} ${textColor} hover:bg-primary-200 dark:hover:bg-primary-400 ${className}`}
      aria-label={`Voir les articles liés au tag ${text}`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
