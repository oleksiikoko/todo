import TaskInterface from "interfaces/Task";

export const todoList: string = "todoList";

class ToDoLocalStorageController {
  searchStr: string;
  constructor() {
    this.searchStr = "";
    !localStorage.getItem(todoList) &&
      localStorage.setItem(todoList, JSON.stringify([]));
  }

  get list(): Array<TaskInterface> {
    return JSON.parse(localStorage.getItem(todoList) || "[]");
  }

  set list(todo: Array<TaskInterface>) {
    localStorage.setItem(todoList, JSON.stringify(todo));
  }

  get searchList(): Array<TaskInterface> {
    return JSON.parse(
      localStorage.getItem(todoList) || "[]"
    ).filter((item: TaskInterface) => item.name.includes(this.searchStr));
  }

  addTask(task: TaskInterface): Array<TaskInterface> {
    this.list = this.list.concat(task);
    return this.searchList;
  }

  changeDone(id: string): Array<TaskInterface> {
    this.list = this.list.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    return this.searchList;
  }

  deleteTask(id: string): Array<TaskInterface> {
    this.list = this.list.filter((item) => item.id !== id);
    return this.searchList;
  }

  searchTasks(subStr: string): Array<TaskInterface> {
    this.searchStr = subStr;
    return this.searchList;
  }
}

export default ToDoLocalStorageController;
