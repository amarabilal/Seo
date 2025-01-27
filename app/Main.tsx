import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Section Héros */}
      <div className="relative px-6 py-16 text-center text-white">
        <h1 className="relative z-10 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Bienvenue sur Zigouplex
        </h1>
        <p className="relative z-10 mt-4 text-lg md:text-xl">
          Découvrez nos innovations technologiques et articles exclusifs.
        </p>
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-gradient-200"></div>
      </div>

      {/* Articles */}
      <div className="container mx-auto divide-y divide-gray-200 bg-gray-100 px-4 py-12 dark:divide-gray-700 dark:bg-secondary">
        <h2 className="mb-8 text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Derniers Articles
        </h2>
        {!posts.length && <p className="text-gray-500 dark:text-gray-400">Aucun article trouvé.</p>}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article className="space-y-2">
                  <dl>
                    <dt className="sr-only">Publié le</dt>
                    <dd className="text-base font-medium text-gray-600 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary-700 hover:underline dark:text-primary-400"
                    >
                      {title}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <p className="prose max-w-none text-gray-600 dark:text-gray-400">{summary}</p>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-block text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                      aria-label={`Lire l'article : "${title}"`}
                    >
                      Lire la suite &rarr;
                    </Link>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Lien vers tous les articles */}
      {posts.length > MAX_DISPLAY && (
        <div className="bg-gray-100 py-8 text-center dark:bg-secondary">
          <br />
          <Link
            href="/blog"
            className="text-lg font-semibold text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-400"
            aria-label="Voir tous les articles"
          >
            Voir tous les articles &rarr;
          </Link>
        </div>
      )}

      {/* Formulaire Newsletter */}
      {siteMetadata.newsletter?.provider && (
        <div className="bg-gray-100 py-12 dark:bg-secondary">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
              Restez informé !
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Inscrivez-vous à notre newsletter pour ne manquer aucune innovation.
            </p>
            <div className="mt-6 flex justify-center">
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
