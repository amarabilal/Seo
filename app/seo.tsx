import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// Fonction pour générer les métadonnées SEO pour une page
export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    description: description || siteMetadata.description, // Utilise la description par défaut si aucune n'est fournie
    openGraph: {
      title: `${title} | ${siteMetadata.title}`, // Format pour OpenGraph
      description: description || siteMetadata.description,
      url: './', // Par défaut, l'URL est relative
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner], // Image spécifique ou bannière par défaut
      locale: 'fr_FR', // Changement pour correspondre à un site en français
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`, // Format pour Twitter Card
      card: 'summary_large_image', // Type de carte
      images: image ? [image] : [siteMetadata.socialBanner], // Image spécifique ou par défaut
    },
    ...rest, // Ajout d'autres propriétés personnalisées si nécessaires
  }
}
