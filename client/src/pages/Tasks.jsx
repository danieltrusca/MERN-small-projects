import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/tasks";

import TaskHeader from "../components/TaskHeader/TaskHeader";
import TasksBody from "../components/Tasks/Tasks";

import "./styles.css";

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks, isLoading } = useSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="task_container">
      <TaskHeader />
      {isLoading ? <h1>Loading ...</h1> : <TasksBody tasks={tasks} />}
    </div>
  );
};

export default Tasks;
