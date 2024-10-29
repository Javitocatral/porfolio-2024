import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import yodepie from '../assets/yodepie.jpg' // Imagen frontal
import yosentado from '../assets/yosentado.jpg' // Imagen posterior
import '../css/flipCard.css' // Asegúrate de que la ruta sea correcta

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleMouseEnter = () => {
    setIsFlipped(true)
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        style={{ width: '300px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={yodepie} alt="Frontal" className="front-image" />
      </div>

      <div
        style={{ width: '300px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={yosentado} alt="Posterior" className="back-image" />
      </div>
    </ReactCardFlip>
  )
}

export default FlipCard
