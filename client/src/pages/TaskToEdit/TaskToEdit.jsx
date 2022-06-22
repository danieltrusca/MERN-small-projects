import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { fetchTask, editTask } from "../../redux/actions/tasks";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineClose } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";

import "./styles.css";

const TaskToEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.taskReducer.taskToEdit);
  const isLoading = useSelector((state) => state.taskReducer.isLoading);
  const errors = useSelector((state) => state.taskReducer.errors);

  const [taskEditName, setTaskEditName] = useState(task?.name);
  const [taskEditCompleted, setTaskEditCompleted] = useState(task?.completed);
  useEffect(() => {
    dispatch(fetchTask(id));
    setTaskEditName(task?.name);
    setTaskEditCompleted(task?.completed);
  }, [id, dispatch, task?.name, task?.completed]);

  const handleEscape = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: taskEditName,
      completed: taskEditCompleted,
    };
    dispatch(editTask(body, task?._id));

    navigate("/");
  };

  return (
    <div className="task__toEdit-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="task__toEdit-paper">
          <AiOutlineClose
            onClick={handleEscape}
            className="task__toEdit-closeIcon"
          />

          <h3 className="taskToEdit__title">Edit Task</h3>
          <div className="taskToEdit__taskId">
            <h4>Task ID</h4>
            <h6>{task?._id}</h6>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="taskToEdit__taskId">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name_task"
                value={taskEditName}
                onChange={(e) => setTaskEditName(e.target.value)}
              />
            </div>
            <div className="taskToEdit__taskId">
              <label htmlFor="completed"> Completed</label>
              <input
                type="checkbox"
                id="completed"
                name="completed"
                value={task?.completed}
                defaultChecked={task?.completed}
                onChange={(e) => setTaskEditCompleted(e.target.checked)}
              />
            </div>

            <button type="submit" className="taskToEdit__submitButton">
              Edit
            </button>

            {errors && <h6 className="task-to-edit-errors">{errors}</h6>}

            <div onClick={handleEscape} className="taskToEdit__backTasks">
              Back To Tasks
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskToEdit;
