import Proycard from '../componentes/Proycard'
import misProyectos from '../../data/dataMisporyectos'
import colaboraciones from '../../data/dataColavoraciones'
import Nav from '../componentes/Nav'
function Porfolio() {
  return (
    <div>
      <Nav />
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
