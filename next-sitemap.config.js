/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.zigou-plex.fr', // Remplacez par votre URL
  generateRobotsTxt: true, // Générer un fichier robots.txt
  exclude: ['/404'], // Exclure certaines pages
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.zigou-plex.fr/sitemap.xml',
    ],
  },
}
