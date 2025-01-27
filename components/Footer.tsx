import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-secondary">
      <div className="container mx-auto flex flex-col items-center">
        {/* Réseaux sociaux */}
        <div className="mb-4 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>

        {/* Texte principal */}
        <div className="mb-2 flex flex-wrap justify-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
          <span>{siteMetadata.author}</span>
          <span>{`•`}</span>
          <span>{`© ${new Date().getFullYear()}`}</span>
          <span>{`•`}</span>
          <Link href="/" className="hover:text-primary-500">
            {siteMetadata.title}
          </Link>
        </div>

        {/* Lien vers les mentions légales */}
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-200">
          <Link href="/privacy-policy" className="hover:text-primary-500">
            Politique de confidentialité
          </Link>
          <span>{` • `}</span>
          <Link href="/terms" className="hover:text-primary-500">
            Conditions d'utilisation
          </Link>
        </div>
      </div>
    </footer>
  )
}
