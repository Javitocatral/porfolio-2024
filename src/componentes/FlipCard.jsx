/*import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import yodepie from '../assets/yodepie.jpg'
import yosentado from '../assets/yosentado.jpg'

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
        style={{ width: '80%', height: '100vh' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={yosentado} alt="Posterior" />
      </div>
      <div
        style={{ width: '80%', height: '100vh' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={yodepie} alt="Frontal" />
      </div>
    </ReactCardFlip>
  )
}

export default FlipCard*/
