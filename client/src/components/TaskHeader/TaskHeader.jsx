import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/actions/tasks";
import { REMOVE_ERROR } from "../../redux/actions/type";

import "./styles.css";

const TaskHeader = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.taskReducer.errors);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      dispatch(addTask({ name: newTask }));
    }
    setNewTask("");
  };
  return (
    <div className="header_container">
      <h3 className="task-header-title">Task Manager</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
            dispatch({
              type: REMOVE_ERROR,
            });
          }}
          placeholder="e.g. wash dishes"
          className="task-header-input"
          required
        />
        <button type="submit" className="task-header-button">
          Submit
        </button>
      </form>
      {errors && <h6 className="task-manager-errors">{errors}</h6>}
    </div>
  );
};

export default TaskHeader;
