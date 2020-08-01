import ToDoLocalStorageController, {
  todoList,
} from "../../utils/ToDoLocalStorageController";
import TaskInterface from "interfaces/Task";

describe("ToDoLocalStorageController", () => {
  let testList: Array<TaskInterface> = [
    { id: "id1", name: "name1", done: false },
    { id: "id2", name: "name2", done: false },
    { id: "id3", name: "name2", done: false },
    { id: "id4", name: "name3", done: false },
    { id: "id5", name: "name3", done: false },
    { id: "id6", name: "name3", done: false },
    { id: "id7", name: "name4", done: false },
    { id: "id8", name: "name5", done: false },
  ];

  describe("Constructor", () => {
    it("empty localStorage", () => {
      localStorage.removeItem(todoList);
      new ToDoLocalStorageController();

      expect(localStorage.getItem(todoList)).toBe(JSON.stringify([]));
    });
  });

  describe("Interfaces", () => {
    localStorage.removeItem(todoList);
    let toDoLocalStorageController = new ToDoLocalStorageController();

    it("get list()", () => {
      expect(localStorage.getItem(todoList)).toBe("[]");
      expect(toDoLocalStorageController.list).toEqual([]);
    });

    it("set list()", () => {
      toDoLocalStorageController.list = testList;

      expect(localStorage.getItem(todoList)).toBe(JSON.stringify(testList));
      expect(toDoLocalStorageController.list).toEqual(testList);
    });

    it("get searchList()", () => {
      expect(toDoLocalStorageController.searchList).toEqual(testList);
    });

    it("addTask()", () => {
      const newTask: TaskInterface = { id: "id8", name: "name5", done: false };
      testList = toDoLocalStorageController.addTask(newTask);

      expect(localStorage.getItem(todoList)).toBe(JSON.stringify(testList));
      expect(toDoLocalStorageController.list).toEqual(testList);
      expect(testList).toEqual(testList);
    });

    it("changeDone()", () => {
      const newTaskList: Array<TaskInterface> = toDoLocalStorageController.changeDone(
        "id1"
      );
      testList[0].done = true;

      expect(localStorage.getItem(todoList)).toBe(JSON.stringify(testList));
      expect(toDoLocalStorageController.list).toEqual(testList);
      expect(newTaskList).toEqual(testList);
    });

    it("deleteTask()", () => {
      const newTaskList: Array<TaskInterface> = toDoLocalStorageController.deleteTask(
        "id1"
      );
      testList = testList.filter((item) => item.id !== "id1");

      expect(localStorage.getItem(todoList)).toBe(JSON.stringify(testList));
      expect(toDoLocalStorageController.list).toEqual(testList);
      expect(newTaskList).toEqual(testList);
    });

    it("searchTask()", () => {
      const newTaskList: Array<TaskInterface> = toDoLocalStorageController.searchTasks(
        "name3"
      );

      expect(localStorage.getItem(todoList)).toBe(JSON.stringify(testList));
      expect(toDoLocalStorageController.list).toEqual(testList);
      expect(toDoLocalStorageController.searchList).toEqual(newTaskList);
    });
  });
});
