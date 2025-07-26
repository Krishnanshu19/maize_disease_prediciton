import {  } from 'react'
import {Routes ,Route} from 'react-router-dom'
import HeaderFile from './HeaderFile.jsx'
import Home from './pages/Home.jsx'
import Predict from './pages/Predict.jsx'
function App() {

  return (
    <div className='font-sans'>
      <HeaderFile/>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/predict" element={<Predict/>}/>
      </Routes>
    </div>
  )
}

export default App
