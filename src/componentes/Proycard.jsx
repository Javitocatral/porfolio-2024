import git from '../assets/git.png'
function Proycard({
  name,
  img,
  description,
  technologies = [],
  features = [],
  link,
  repo,
}) {
  console.log(link)
  return (
    <div className="proyecto">
      <div className="img">
        <img src={img} alt="" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '20px',
            zIndex: '100',
          }}
        >
          <a
            href={link}
            className="ver-boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver
          </a>
          <a
            href={repo}
            className="git-boton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ width: '25px' }} src={git} alt="gitHub" />
          </a>
        </div>
      </div>
      <div className="content">
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
            <ul>
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
