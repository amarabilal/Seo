import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Méta tags SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Découvrez les innovations et articles technologiques de Zigouplex." />

        {/* Open Graph pour le SEO social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zigouplex - Blog Tech et Innovations" />
        <meta property="og:description" content="Explorez nos articles et innovations technologiques." />
        <meta property="og:image" content="https://www.zigou-plex.fr/og-image.jpg" />
        <meta property="og:url" content="https://www.zigou-plex.fr" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zigouplex - Blog Tech et Innovations" />
        <meta name="twitter:description" content="Découvrez les dernières tendances technologiques." />
        <meta name="twitter:image" content="https://www.zigou-plex.fr/twitter-card.jpg" />

        {/* Favicons */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Fonts ou autres ressources globales */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
