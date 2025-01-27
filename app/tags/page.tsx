import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Tags',
  description: 'Explore topics I write about',
})

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <div className="flex-col items-center justify-center space-y-8 md:space-y-12">
      {/* Section Héros */}
      <div className="relative px-6 py-16 text-center text-white">
        <h1 className="relative z-10 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Explorez nos Tags
        </h1>
        <p className="relative z-10 mt-4 text-lg md:text-xl">
          Découvrez les sujets qui inspirent nos articles.
        </p>
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-gradient-200"></div>
      </div>

      {/* Tag Cloud Section */}
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tagKeys.length === 0 && <p className="text-gray-500">Aucun tag trouvé.</p>}
        {sortedTags.map((t) => (
          <div
            key={t}
            className="group relative flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md transition duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800"
          >
            <Tag text={t} />
            <p
              className="mt-2 text-sm font-semibold uppercase text-blue-500 dark:text-blue-300"
              aria-label={`View posts tagged ${t}`}
            >
              {`(${tagCounts[t]}) articles`}
            </p>

            {/* Effet de hover : div cliquable */}
            <Link
              href={`/tags/${slug(t)}`}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-label={`View posts tagged ${t}`}
            >
              <p className="text-lg font-bold text-white">Voir les articles</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
