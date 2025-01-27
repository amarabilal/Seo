import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

// Génère les métadonnées pour la page "À propos"
export const metadata = genPageMetadata({
  title: 'À propos',
  description: 'En savoir plus sur Zigouplex et les esprits qui façonnent nos innovations.',
})

export default function Page() {
  // Récupère l'auteur par défaut depuis Contentlayer
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <div className="flex-col items-center justify-center space-y-8 md:space-y-12">
      {/* Section Héros */}
      <div className="relative px-6 py-16 text-center text-white">
        <h1 className="relative z-10 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          À propos de Zigouplex
        </h1>
        <p className="relative z-10 mt-4 text-lg md:text-xl">
          Découvrez notre mission, nos valeurs et les personnes derrière nos innovations.
        </p>
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 bg-gradient-200"></div>
      </div>

      {/* Contenu principal de la page */}
      <div className="container mx-auto mt-10 px-4">
        <AuthorLayout content={mainContent}>
          {/* Rendu du contenu MDX de l'auteur */}
          <MDXLayoutRenderer code={author.body.code} />
        </AuthorLayout>
      </div>
    </div>
  )
}
