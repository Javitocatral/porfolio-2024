import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const nav = [
    { name: 'Home', path: '/' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Porfolio', path: '/porfolio' },
  ]
  return (
    <div className="nav">
      {nav.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? 'active' : ''}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default Nav
