import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  return (
    <div className="max-w-[544px] p-4 md:w-1/2">
      <div
        className={`group h-full overflow-hidden rounded-lg border-2 border-gray-200 shadow-md transition duration-300 ease-in-out hover:shadow-lg dark:border-gray-700`}
      >
        {imgSrc && (
          <div className="relative overflow-hidden">
            {href ? (
              <Link href={href} aria-label={`Lien vers ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            )}
          </div>
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
            {href ? (
              <Link
                href={href}
                aria-label={`Lien vers ${title}`}
                className="hover:text-primary-500"
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-4 max-w-none text-gray-600 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="inline-block rounded bg-primary-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-primary-400 dark:hover:bg-primary-200"
              aria-label={`En savoir plus sur ${title}`}
            >
              En savoir plus &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
