import TaskInterface from "../interfaces/Task";
import ToDoLocalStorageController from "./ToDoLocalStorageController";

class ToDoLocalStorageObserver {
  private observers: Array<Function>;
  private toDoLocalStorageController: ToDoLocalStorageController;
  constructor() {
    this.observers = [];
    this.toDoLocalStorageController = new ToDoLocalStorageController();
  }

  subscribe(fn: Function) {
    this.observers.push(fn);
  }

  unsubscribe(fn: Function) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data: Array<TaskInterface>) {
    this.observers.forEach((subscriber) => subscriber(data));
  }

  get list() {
    return this.toDoLocalStorageController.list;
  }

  addTask(task: TaskInterface) {
    this.broadcast(this.toDoLocalStorageController.addTask(task));
  }

  changeDone(id: string) {
    this.broadcast(this.toDoLocalStorageController.changeDone(id));
  }

  deleteTask(id: string) {
    this.broadcast(this.toDoLocalStorageController.deleteTask(id));
  }

  searchTasks(subStr: string) {
    this.broadcast(this.toDoLocalStorageController.searchTasks(subStr));
  }
}

export default ToDoLocalStorageObserver;
