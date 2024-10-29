import FlipCard from './componentes/FlipCard'

function Porfolio() {
  return (
    <div className="container-porfolio">
      <h1>Javier Gascón Ruiz</h1>
      <h2>Desarrollador web</h2>
      <div className="about">
        <p>
          Soy un desarrollador web versátil y proactivo, especializado en
          JavaScript con experiencia en React.js y SvelteKit. Tengo habilidades
          en HTML y CSS para crear experiencias de usuario atractivas, y utilizo
          herramientas como ESLint, Prettier, Playwright y Git para asegurar la
          calidad del código. También integro TypeScript y GraphQL en mis
          proyectos para mejorar la legibilidad y escalabilidad. Busco una
          oportunidad para crecer profesionalmente y contribuir con energía y
          creatividad al equipo.
        </p>
        <FlipCard></FlipCard>
      </div>
    </div>
  )
}

export default Porfolio
