import {
  FETCH_ALL_TASKS,
  ADD_TASK,
  DELETE_TASK,
  FETCH_TASK,
} from "../actions/type";

const taskReducers = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case FETCH_TASK:
      return {
        ...state,
        taskToEdit: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducers;
