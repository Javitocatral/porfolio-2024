import React from 'react'
import Nav from '../componentes/Nav'
import carta from '../assets/carta.png'
import telefono from '../assets/telefono.png'
import descargas from '../assets/descargas.png'
import linkedin from '../assets/linkedin.png'
import git from '../assets/git.png'
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
            finalizar mi formación en <strong>Ironhack </strong>, donde
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
            Antes de mi formación en Ironhack, trabajé en{' '}
            <strong>El Danés Solution</strong>, lo que me brindó experiencia
            práctica en el sector y reforzó mi compromiso con el trabajo en
            equipo y la entrega de resultados de calidad.
          </p>
          <p>
            Estoy entusiasmado por seguir creciendo profesionalmente y aportar
            ideas frescas, creatividad y energía a un equipo de desarrollo. Si
            te interesa colaborar o conocer más sobre mis proyectos, ¡estaré
            encantado de conectar contigo!
          </p>
          <div className="color-mobile"></div>
        </div>
        <div className="info">
          <a
            style={{ display: 'flex', gap: '5px' }}
            href="mailto:javitocatral@gmail.com"
          >
            <img
              style={{
                width: '16px',
              }}
              src={carta}
              alt="icono carta de correos tradicional"
            />
            <strong>javitocatral@gmail.com</strong>
          </a>
          <a style={{ display: 'flex', gap: '5px' }} href="tel:+34690084912">
            {' '}
            <img
              style={{
                width: '16px',
              }}
              src={telefono}
              alt="icono de un telefono de casa"
            />
            <strong>690084912</strong>
          </a>
          <a href="/Cv-JavierGascon.pdf" download>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button
                className="btn-cv"
                style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
              >
                {' '}
                <img
                  style={{
                    width: '10px',
                  }}
                  src={descargas}
                  alt="icono de descargar archivos uan flecah hacia abajo"
                />
                Descargar mi CV
              </button>

              <a
                href={'https://github.com/Javitocatral'}
                className="ver-boton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img style={{ width: '25px' }} src={git} alt="gitHub" />
              </a>
              <a
                href={
                  'https://www.linkedin.com/in/javiergasconruiz-frontend-developer/'
                }
                className="ver-boton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img style={{ width: '25px' }} src={linkedin} alt="gitHub" />
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
