import React from 'react'

import {Routes, Route} from "react-router-dom";

import Tasks from './pages/Tasks'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Tasks />} />
        </Routes>
    </div>
  )
}

export default App