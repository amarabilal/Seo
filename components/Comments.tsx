'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  // Vérifie si le fournisseur de commentaires est configuré
  if (!siteMetadata.comments?.provider) {
    return null
  }

  return (
    <div className="mt-8">
      {loadComments ? (
        // Composant des commentaires
        <div className="fade-in">
          <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
        </div>
      ) : (
        // Bouton pour charger les commentaires
        <button
          onClick={() => setLoadComments(true)}
          className="rounded bg-primary-500 px-4 py-2 text-white shadow-md transition duration-300 ease-in-out hover:bg-primary-600 dark:bg-primary-400"
          aria-label="Charger les commentaires"
        >
          Charger les commentaires
        </button>
      )}
    </div>
  )
}
