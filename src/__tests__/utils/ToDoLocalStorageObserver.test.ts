import { ToDoLocalStorageObserver } from "utils";

describe("ToDoLocalStorageObserver", () => {
  const toDoLocalStorageObserver: ToDoLocalStorageObserver = new ToDoLocalStorageObserver();
  const mockSubscriber = jest.fn();
  toDoLocalStorageObserver.subscribe(mockSubscriber);

  it("get list()", () => {
    expect(toDoLocalStorageObserver.list).toEqual([]);
  });

  it("addTask()", () => {
    toDoLocalStorageObserver.addTask({ id: "id1", name: "name1", done: false });

    expect(mockSubscriber).toHaveBeenCalledTimes(1);
  });

  it("changeDone()", () => {
    toDoLocalStorageObserver.changeDone("id1");

    expect(mockSubscriber).toHaveBeenCalledTimes(2);
  });

  it("deleteTask()", () => {
    toDoLocalStorageObserver.deleteTask("id1");

    expect(mockSubscriber).toHaveBeenCalledTimes(3);
  });

  it("searchTasks()", () => {
    toDoLocalStorageObserver.searchTasks("name1");

    expect(mockSubscriber).toHaveBeenCalledTimes(4);
  });

  it("unsubscribe()", () => {
    toDoLocalStorageObserver.unsubscribe(mockSubscriber);
    toDoLocalStorageObserver.addTask({ id: "id1", name: "name1", done: false });

    expect(mockSubscriber).toHaveBeenCalledTimes(4);
  });
});
