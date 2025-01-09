import { useEffect, useRef } from 'react'
import git from '../assets/git.png'
import ver from '../assets/ver.png'
function Proycard({
  name,
  img,
  description,
  technologies = [],
  features = [],
  link,
  repo,
}) {
  const ulRef = useRef(null)

  useEffect(() => {
    if (ulRef.current && ulRef.current.children.length > 3) {
      ulRef.current.classList.add('two-columns')
    } else if (ulRef.current) {
      ulRef.current.classList.remove('two-columns')
    }
  }, [technologies])
  const handleClick = (event) => {
    if (repo === undefined) {
      alert(
        '¡Alerta!\n\nRepositorio privado:\nEl repositorio no está disponible públicamente.'
      )
      event.preventDefault()
    }
  }

  return (
    <div className="proyecto">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div className="button-container">
          <a
            href={link}
            className="ver-boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ width: '25px' }}
              src={ver}
              alt="icono de un ojo para ver los proyectos"
            />
          </a>
          {repo === undefined ? (
            <button className="ver-boton" onClick={handleClick}>
              <img style={{ width: '25px' }} src={git} alt="gitHub" />
            </button>
          ) : (
            <a
              href={repo}
              className="ver-boton"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              <img style={{ width: '25px' }} src={git} alt="gitHub" />
            </a>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>{name}</h2>
        </div>
        <p>{description}</p>
        <div className="columns-otros">
          <div className="column-caract">
            <h4>Tecnologías</h4>
            <ul ref={ulRef}>
              {technologies.map((tech, index) => {
                return <li key={index}>{tech}</li>
              })}
            </ul>
          </div>
          <div className="column-caract">
            <h4>Características</h4>
            <ul>
              {features.map((feature, index) => {
                return <li key={index}>{feature}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proycard
