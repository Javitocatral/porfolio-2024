import vermouth from '../src/assets/Vermuth.png'
import tomacafe from '../src/assets/tomacafe.png'
import elDanes from '../src/assets/eldanes.png'

const colaboraciones = [
  {
    img: vermouth,
    name: 'Vermouth.nu',
    description:
      'Página web especializada en la exportación de vermuts españoles a Dinamarca. Diseñada para mejorar la visibilidad y distribución del vermut español en el mercado danés.',
    technologies: ['SvelteKit', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Diseño moderno y atractivo',
      'Optimización para la distribución en Dinamarca',
      'Interfaz fácil de usar',
    ],
    link: 'https://www.vermouth.nu/',
  },
  {
    img: tomacafe,
    name: 'Toma Café',
    description:
      'Plataforma en línea dedicada a la venta de café de alta calidad de todo el mundo. También incluye una sección de eventos y una lista de tiendas físicas asociadas.',
    technologies: [
      'SvelteKit',
      'JavaScript',
      'HTML',
      'CSS',
      'GraphQL',
      'Shopify',
    ],
    features: [
      'Catálogo de cafés internacionales',
      'Agenda de eventos relacionados con el café',
      'Localizador de tiendas físicas',
    ],
    link: 'https://toma.cafe/es',
  },
  {
    img: elDanes,
    name: 'El Danés Solutions',
    description:
      'Sitio web de la empresa especializada en desarrollo frontend donde trabajé. El enfoque principal es el diseño de interfaces eficientes y atractivas.',
    technologies: ['SvelteKit', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Desarrollo frontend eficiente',
      'Interfaz de usuario intuitiva',
      'Optimización de rendimiento',
    ],
    link: 'https://www.xn--eldans-fva.com/es',
  },
]
export default colaboraciones
