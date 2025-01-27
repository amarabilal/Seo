import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  // Trier les articles (allBlogs) selon les critères définis dans sortPosts
  const sortedPosts = sortPosts(allBlogs)

  // Extraire les informations principales de chaque article
  const posts = allCoreContent(sortedPosts)

  // Passer les articles triés à la page principale
  return <Main posts={posts} />
}
