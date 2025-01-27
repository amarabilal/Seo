import { Inter } from 'next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

// Intégration de la police Inter avec gestion des sous-ensembles
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Améliore les performances en utilisant une police de secours avant le chargement
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className={`${inter.className} flex h-screen flex-col`}>
      {/* Conteneur principal avec styles globaux */}
      <Header />
      <SectionContainer>
        <main className="flex-grow bg-gray-50 dark:bg-gray-900">{children}</main>
      </SectionContainer>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
