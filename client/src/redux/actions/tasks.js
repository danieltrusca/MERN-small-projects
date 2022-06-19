import * as api from "../../api";

import { FETCH_ALL_TASKS } from "./type";

export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: FETCH_ALL_TASKS,
      payload: data.tasks,
    });
  } catch (error) {
    console.log(error.message);
  }
};
