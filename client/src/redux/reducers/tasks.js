import {
  FETCH_ALL_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FETCH_TASK,
  START_LOADING,
  END_LOADING,
  FETCH_ERROR,
  REMOVE_ERROR,
} from "../actions/type";

const taskReducers = (
  state = { tasks: [], isLoading: true, errors: "" },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case REMOVE_ERROR:
      return {
        ...state,
        errors: "",
      };
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
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
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
