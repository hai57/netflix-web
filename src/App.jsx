import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login.jsx'
import Player from './pages/Player'

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App
