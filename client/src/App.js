import React from 'react'

import {Routes, Route} from "react-router-dom";

import Tasks from './pages/Tasks'
import TaskToEdit from './pages/TaskToEdit/TaskToEdit';

import Store1 from './projects/store1';

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/tasks/:id' element={<TaskToEdit />} />
            <Route path='/store/*' element={<Store1 />} />
        </Routes>
    </div>
  )
}

export default App