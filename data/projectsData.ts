interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData = [
  {
    title: 'Zigouplex Cloud',
    description: 'Une plateforme cloud éco-responsable pour des performances inégalées.',
    imgSrc: '/static/images/projects/cloud.webp',
    href: 'https://zigouplex.com/cloud',
  },
  {
    title: 'API Zigouplex',
    description: 'L’API intuitive et puissante pour vos projets technologiques.',
    imgSrc: '/static/images/projects/api.webp',
    href: 'https://zigouplex.com/api',
  },
  {
    title: 'IoT Zigouplex',
    description: 'Connectez vos appareils avec notre infrastructure IoT avancée.',
    imgSrc: '/static/images/projects/iot.webp',
    href: 'https://zigouplex.com/iot',
  },
]

export default projectsData
