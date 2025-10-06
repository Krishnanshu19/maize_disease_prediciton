import { } from 'react'
import { Routes, Route } from 'react-router-dom'
import HeaderFile from './HeaderFile.jsx'
import Home from './pages/Home.jsx'
import Predict from './pages/Predict.jsx'
import AboutUs from './pages/aboutUs.jsx'  

function App() {
  return (
    <div className='font-sans'>
      <HeaderFile />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App

