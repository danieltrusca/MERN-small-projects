import * as api from "../../api";

import { FETCH_ALL_TASKS, ADD_TASK, DELETE_TASK, FETCH_TASK } from "./type";

export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTasks();

    dispatch({
      type: FETCH_ALL_TASKS,
      payload: data.tasks,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTask = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchTask(id);

    console.log(data.task);

    dispatch({
      type: FETCH_TASK,
      payload: data.task,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addTask = (newTask) => async (dispatch) => {
  try {
    const { data } = await api.createTask(newTask);
    dispatch({
      type: ADD_TASK,
      payload: data.task,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await api.deleteTask(taskId);
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  } catch (error) {
    console.log(error.message);
  }
};
