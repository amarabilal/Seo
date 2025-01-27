import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

// Génère les métadonnées SEO pour la page "Projets"
export const metadata = genPageMetadata({
  title: 'Projets',
  description: 'Explorez nos projets innovants et découvrez comment nous façonnons l’avenir.',
})

export default function Projects() {
  return (
    <div className="flex-col items-center justify-center space-y-8 md:space-y-12">
      {/* Section Héros */}
      <div className="relative px-6 py-16 text-center text-white">
        <h1 className="relative z-10 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Découvrez nos Projets
        </h1>
        <p className="relative z-10 mt-4 text-lg md:text-xl">
          Plongez dans nos innovations et explorez les solutions technologiques qui transforment le
          monde.
        </p>
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-gradient-200"></div>
      </div>

      {/* Liste des Projets */}
      <div className="container mx-auto mt-10 px-4">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              href={project.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
