import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

// Forcer la génération statique
export const dynamic = 'force-static'

// Fonction pour générer les directives du fichier robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // S'applique à tous les robots
      allow: '/', // Autorise l'accès à tout le site
    },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`, // URL du sitemap
    host: siteMetadata.siteUrl, // Nom d'hôte principal
  }
}
