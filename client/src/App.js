import React from 'react'

import {Routes, Route} from "react-router-dom";

import Tasks from './pages/Tasks'
import TaskToEdit from './pages/TaskToEdit/TaskToEdit';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/tasks/:id' element={<TaskToEdit />} />
        </Routes>
    </div>
  )
}

export default App