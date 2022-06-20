import React from "react";

import { deleteTask } from "../../redux/actions/tasks";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { AiOutlineCheckCircle, AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import "./styles.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (taskId) => {
    if (taskId) {
      dispatch(deleteTask(taskId));
    }
  };

  const handleEdit = (task) => {
    navigate(`/tasks/${task._id}`);
  };
  return (
    <div className="task_single_container">
      <div className="name_container">
        {task?.completed && <AiOutlineCheckCircle color="green" />}

        <p
          className="name_task"
          style={{ textDecoration: task?.completed ? "line-through" : "none" }}
        >
          {task.name}
        </p>
      </div>

      <div>
        <FaEdit className="task_edit" onClick={() => handleEdit(task)} />
        <AiFillDelete
          className="task_delete"
          onClick={() => handleDelete(task._id)}
        />
      </div>
    </div>
  );
};

export default Task;
