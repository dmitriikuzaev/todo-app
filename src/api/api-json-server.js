import axios from "axios";
export default {
  addTask(todo) {},
  deleteTask(id) {},
  updateTask(id, todo) {},
  getAllTasks() {
    return axios
      .get("http://localhost:3001/tasks")
      .then((response) => response)
      .catch((error) => error);
  },
  getTasksByCategory(id) {},
  addCategory() {},
  deleteCategory() {},
  updateCategory() {},
  getAllCategories() {
    axios
      .get("http://localhost:3001/categories")
      .then((response) => response)
      .catch(console.log);
  },
};
