import React, { useState } from "react";

import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

import ToDoLocalStorageObserver from "../utils/ToDoLocalStorageObserver";

import TaskInterface from "../interfaces/Task";

import createUuid from "../utils/createUuid";

interface ToDoIterface {
  toDoArray: Array<TaskInterface>;
}

const Todo: React.FC<ToDoIterface> = () => {
  const toDoLocalStorageObserver = new ToDoLocalStorageObserver();
  const [todo, setTodo] = useState(toDoLocalStorageObserver.list);
  toDoLocalStorageObserver.subscribe(setTodo);

  const addTask = (name: string) => {
    toDoLocalStorageObserver.addTask({
      id: createUuid(),
      name: name,
      done: false,
    });
  };

  const changeDoneTask = (id: string) => {
    toDoLocalStorageObserver.changeDone(id);
  };

  const deleteTask = (id: string) => {
    toDoLocalStorageObserver.deleteTask(id);
  };

  const searchTasks = (subStr: string) => {
    toDoLocalStorageObserver.searchTasks(subStr);
  };

  return (
    <>
      {/* <SearchLine /> */}
      <TaskList
        list={todo}
        onClickTask={changeDoneTask}
        onDeleteTask={deleteTask}
      />
      <AddTask onAddTask={addTask} />
    </>
  );
};

export default Todo;
