function Proycard({
  name,
  img,
  description,
  technologies = [],
  features = [],
}) {
  return (
    <div className="proyecto">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h2>{name}</h2>
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
