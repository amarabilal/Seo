import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

// Forcer la génération statique pour ce fichier
export const dynamic = 'force-static'

// Fonction pour générer le sitemap
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  // Génération des routes pour les articles de blog
  const blogRoutes = allBlogs
    .filter((post) => !post.draft) // Exclure les brouillons
    .map((post) => ({
      url: `${siteUrl}/${post.path}`, // URL complète pour chaque article
      lastModified: post.lastmod || post.date, // Dernière modification ou date de publication
    }))

  // Génération des routes principales du site
  const routes = ['', 'blog', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`, // URL complète pour chaque route
    lastModified: new Date().toISOString().split('T')[0], // Date actuelle comme date de dernière modification
  }))

  return [...routes, ...blogRoutes]
}
