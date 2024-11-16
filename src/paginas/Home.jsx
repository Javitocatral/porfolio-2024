import Nav from '../componentes/Nav'

function Home() {
  return (
    <>
      <div className="container-porfolio">
        <div className="yo"></div>
        {/*
        
       <div className="about">
          <FlipCard></FlipCard>
        </div>
        */}
        <div className="name-container">
          <Nav></Nav>
          <div className="name">
            <p> Hola, soy</p>
            <h1> Javier Gascón !!</h1>
            <h2>Desarrollador web</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
