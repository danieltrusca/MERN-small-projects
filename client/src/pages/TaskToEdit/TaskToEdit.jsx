import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchTask } from "../../redux/actions/tasks";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";

const TaskToEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.taskReducer.taskToEdit);
  useEffect(() => {
    dispatch(fetchTask(id));
  }, [id, dispatch]);
  return (
    <div>
      <h3>{task?.name}</h3>
      <form>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          value="Bike"
          defaultChecked={task?.completed}
        />
        <label htmlFor="completed"> Completed</label>
      </form>
    </div>
  );
};

export default TaskToEdit;
