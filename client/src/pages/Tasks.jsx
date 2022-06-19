import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/actions/tasks";

import TaskHeader from "../components/TaskHeader/TaskHeader";

import "./styles.css";

const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="task_container">
      <TaskHeader />
    </div>
  );
};

export default Tasks;
