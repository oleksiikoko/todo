import TaskInterface from "interfaces/Task";

const todoList: string = "todoList";

class ToDoLocalStorageController {
  constructor() {
    !localStorage.getItem(todoList) &&
      localStorage.setItem(todoList, JSON.stringify([]));
  }

  get list(): Array<TaskInterface> {
    return JSON.parse(localStorage.getItem(todoList) || "[]");
  }

  set list(todo: Array<TaskInterface>) {
    localStorage.setItem(todoList, JSON.stringify(todo));
  }

  addTask(task: TaskInterface): Array<TaskInterface> {
    return (this.list = this.list.concat(task));
  }

  changeDone(id: string): Array<TaskInterface> {
    return (this.list = this.list.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    ));
  }

  deleteTask(id: string): Array<TaskInterface> {
    return (this.list = this.list.filter((item) => item.id !== id));
  }

  searchTasks(subStr: string): Array<TaskInterface> {
    return this.list.filter((item) => item.name.includes(subStr));
  }
}

export default ToDoLocalStorageController;
