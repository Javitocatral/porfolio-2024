import roller from '../src/assets/roller.png'
import collective from '../src/assets/collective.png'
import estuhuella from '../src/assets/estuhuella.png'

const misProyectos = {
  proyectos: [
    {
      img: roller,
      name: 'Urban Roller',
      description:
        'Juego arcade donde el jugador debe esquivar obstáculos y recolectar refrescos para aumentar los niveles y la dificultad. Diseñado para ofrecer una experiencia desafiante y adictiva.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      features: [
        'Niveles progresivos de dificultad',
        'Gráficos arcade',
        'Controles intuitivos',
      ],
    },
    {
      img: collective,
      name: 'Collective Pulse',
      description:
        'Revista digital colaborativa orientada a un público moderno y urbano, con noticias y artículos de interés general.',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
        'React',
        'MongoDB',
        'APIs externas',
        'Bootstrap',
      ],
      features: [
        'Contenido colaborativo',
        'Artículos de actualidad',
        'Diseño moderno y adaptable para todo tipo de dispositivos',
      ],
    },
    {
      img: estuhuella,
      name: 'Es Tu Huella',
      description:
        'Plataforma web para calcular y monitorear la huella de carbono. Incluye un foro para discusiones relacionadas y un área privada para el seguimiento diario de la huella personal.',
      technologies: [
        'JavaScript',
        'CSS',
        'HTML',
        'React',
        'MongoDB',
        'Node.js',
        'Express',
        'Librerías de animación',
      ],
      features: [
        'Cálculo personalizado de huella de carbono',
        'Foro de usuarios para temas ambientales',
        'Área privada para seguimiento diario',
      ],
    },
  ],
}

export default misProyectos
