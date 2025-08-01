import React from 'react'
import Donezo from './companents/Donezo'
import Navbar from './companents/Navbar'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Analycs from './pages/Analycs'
import Card1 from './pages/Card1'
import Card2 from './pages/Card2'
import Static from './pages/Static'
import Card3 from './pages/Card3'

const App = () => {
  return (
    <div>
      <Navbar/>
    <div className="flex ">
      <Donezo />
<div>
<div className="flex-3  bg-gray-50">
        <Routes>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
        <Analycs/>
      </div>

      <div className='mt-[60px] flex gap-[25px] '>
      <Card1/>
      <Card2/>
      <Static/>
      <Card3/>
    </div>
</div>

    </div>

    </div>
  )
}

export default App

