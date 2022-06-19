import {FETCH_ALL_TASKS} from "../actions/type";

const taskReducers=(state = {  tasks: [] }, action) => {
    switch (action.type) {
      
      case FETCH_ALL_TASKS:
        return {
          ...state,
          tasks: action.payload,
        };
      default:
        return state;
    }
  };
  
export default taskReducers;