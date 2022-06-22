import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000/api/v1" });
const API = axios.create({
  baseURL: "https://small-projects-mern.herokuapp.com//api/v1",
});

export const fetchTasks = () => API.get("/tasks");
export const createTask = (newTask) => API.post("/tasks", newTask);
export const deleteTask = (taskId) => API.delete(`/tasks/${taskId}`);
export const fetchTask = (taskId) => API.get(`/tasks/${taskId}`);
export const editTask = (editTask, taskId) =>
  API.patch(`/tasks/${taskId}`, editTask);
