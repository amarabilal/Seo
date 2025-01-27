import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({
  title: 'Blog',
  description:
    'Découvrez tous nos articles et explorez les sujets technologiques les plus passionnants.',
})

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <div className="flex-col items-center justify-center space-y-8 md:space-y-12">
      {/* Section Héros */}
      <div className="relative px-6 py-16 text-center text-white">
        <h1 className="relative z-10 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Explorez nos Articles
        </h1>
        <p className="relative z-10 mt-4 text-lg md:text-xl">
          Découvrez les tendances technologiques et les innovations qui façonnent le monde de
          demain.
        </p>
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-gradient-200"></div>
      </div>

      {/* Liste des articles */}
      <div className="container mx-auto mt-10 px-4">
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title="Tous les Articles"
        />
      </div>
    </div>
  )
}
