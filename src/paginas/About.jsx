import React from 'react'
import Nav from '../componentes/Nav'

function About() {
  return (
    <div className="about-container">
      <div className="color-aboutme"></div>
      <div>
        <Nav />
        <div className="about">
          <h2>Sobre mí...</h2>
          <p>
            Soy desarrollador web con un enfoque proactivo y con muy buena
            actitud y adaptabilidad. Siempre actualizando mi formación, acabo de
            finalizar mi formación en <strong>Ironhack </strong> Ironhack, donde
            profundicé en tecnologías como <strong>JavaScript</strong>,{' '}
            <strong>Node.js, Express</strong> y <strong>MongoDB</strong>.
          </p>
          <p>
            Me encanta trabajar con <strong>React.js</strong> y{' '}
            <strong>SvelteKit</strong> para crear interfaces de usuario
            dinámicas, y tengo una sólida base en<strong> HTML y CSS</strong>{' '}
            para conseguir páginas más atractivas y fáciles de usar. También
            disfruto asegurándome de que el código esté limpio y bien
            organizado, usando herramientas como{' '}
            <strong> ESLint, Prettier y Playwright</strong>.
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
        <div className="info">
          <a href="mailto:javitocatral@gmail.com">javitocatral@gmail.com</a>
          <a href="tel:+34690084912">690084912</a>
          <a href="/Cv-JavierGascon.pdf" download>
            <button className="btn-cv">Descargar mi cv</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
