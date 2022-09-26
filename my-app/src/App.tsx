import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import Bai2_5 from './page/2.5'
import Bai2_7 from './page/2.7'
import Home from './page/home'

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bai2_5' element={<Bai2_5 />} />
          <Route path='/bai2_7' element={<Bai2_7 />} />

      </Routes>
    </div>
  )
}

export default App
