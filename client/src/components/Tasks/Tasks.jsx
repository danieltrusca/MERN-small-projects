import React from 'react'

import Task from '../Task/Task';
import "./styles.css";

const TasksBody = ({tasks}) => {
    console.log(tasks);
  return (
    <div className='tasks_container'>
        {tasks?.map((task)=>(
            <Task task={task} key={task._id} />
        ))}
    </div>
  )
}

export default TasksBody