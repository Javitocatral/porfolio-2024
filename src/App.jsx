import { Route, Routes } from 'react-router-dom'
import './App.css'
import Porfolio from './paginas/Porfolio'
import Home from './paginas/Home'
import About from './paginas/About'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/porfolio" element={<Porfolio></Porfolio>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
