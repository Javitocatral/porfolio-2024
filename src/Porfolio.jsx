import FlipCard from './componentes/FlipCard'
import Proycard from './componentes/Proycard'
import misProyectos from '../data/dataMisporyectos'
import colaboraciones from '../data/dataColavoraciones'
import cv from './assets/cv.png'
import gitblanco from './assets/gitblanco.png'
import email from './assets/email.png'

function Porfolio() {
  return (
    <div className="container-porfolio">
      <h1> Hola soy Javier Gascón !!</h1>

      <div className="about">
        <div>
          <p>
            Soy desarrollador web con un enfoque proactivo y con muy buena
            actitud y adaptabilidad. Siempre actualizando mi formación, acabo de
            finalizar mi formación en <strong>Ironhack </strong> Ironhack, donde
            profundicé en tecnologías como <strong>JavaScript</strong>,{' '}
            <strong>Node.js</strong> y <strong>MongoDB</strong>.
          </p>
          <p>
            Me encanta trabajar con <strong>React.js</strong> y{' '}
            <strong>SvelteKit</strong> para crear interfaces de usuario
            dinámicas, y tengo una sólida base en HTML y CSS para conseguir
            páginas más atractivas y fáciles de usar. También disfruto
            asegurándome de que el código esté limpio y bien organizado, usando
            herramientas como <strong> ESLint, Prettier y Playwright</strong>.
          </p>
          <p>
            Tengo muchas ganas de seguir creciendo profesionalmente y de aportar
            ideas frescas y energía a un equipo
          </p>
          <p>
            Si te interesa colaborar o conocer más sobre mis proyectos, ¡no
            dudes en contactarme!
          </p>
        </div>
        <FlipCard></FlipCard>
      </div>
      <div className="acceso-info">
        <a href="/Cv-javiergascon.pdf" download>
          <button className="button-info button-cv">
            CV
            <img style={{ width: '30px' }} src={cv} alt="cv" />
          </button>
        </a>
        <a href="https://github.com/Javitocatral">
          <button className="button-info button-github">
            Mi GitHub
            <img style={{ width: '30px' }} src={gitblanco} alt="github" />
          </button>
        </a>
        <a href="mailto:javitocatral@gmail.com">
          <button className="button-info button-contacto">
            Contacto
            <img style={{ width: '30px' }} src={email} alt="email" />
          </button>
        </a>
      </div>
      <h2>Mis Proyectos</h2>
      <div className="mis-proyectos">
        {misProyectos.proyectos.map((cadaProyecto, index) => {
          return (
            <Proycard
              key={index}
              name={cadaProyecto.name}
              img={cadaProyecto.img}
              description={cadaProyecto.description}
              technologies={cadaProyecto.technologies}
              features={cadaProyecto.features}
              link={cadaProyecto.link}
              repo={cadaProyecto.repositorio}
            />
          )
        })}
      </div>
      <h2>Colaboraciones</h2>
      <div className="mis-proyectos">
        {colaboraciones.map((cadaProyecto, index) => {
          return (
            <Proycard
              key={index}
              name={cadaProyecto.name}
              img={cadaProyecto.img}
              description={cadaProyecto.description}
              technologies={cadaProyecto.technologies}
              features={cadaProyecto.features}
              link={cadaProyecto.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Porfolio
