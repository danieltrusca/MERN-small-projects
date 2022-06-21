import * as api from "../../api";

import {
  FETCH_ALL_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_TASK,
  START_LOADING,
  END_LOADING,
} from "./type";

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const { data } = await api.fetchTasks();

    dispatch({
      type: FETCH_ALL_TASKS,
      payload: data.tasks,
    });
    dispatch({
      type: END_LOADING,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    });
    const { data } = await api.fetchTask(id);

    dispatch({
      type: FETCH_TASK,
      payload: data.task,
    });
    dispatch({
      type: END_LOADING,
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

export const editTask = (editTask, taskId) => async (dispatch) => {
  try {
    const { data } = await api.editTask(editTask, taskId);

    dispatch({
      type: EDIT_TASK,
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
