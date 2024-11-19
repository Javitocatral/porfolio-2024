import Proycard from '../componentes/Proycard'
import misProyectos from '../../data/dataMisporyectos'
import colaboraciones from '../../data/dataColavoraciones'
import Nav from '../componentes/Nav'
function Porfolio() {
  return (
    <div className="container-porf">
      <Nav />
      <h2 className="title_proyec">Colaboraciones</h2>
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
      <h2 className="title_proyec">Mis Proyectos</h2>
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
    </div>
  )
}

export default Porfolio
