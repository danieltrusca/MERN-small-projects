import { combineReducers } from "redux";

import tasks from "./tasks";

export default combineReducers({
  taskReducer: tasks,
});
