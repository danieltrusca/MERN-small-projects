import React from 'react'

import "./styles.css";

const TaskHeader = () => {
  return (
    <div className='header_container'>
        <h3>Task Manager</h3>
        <form>
            <input type="text" placeholder='e.g. wash dishes' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TaskHeader