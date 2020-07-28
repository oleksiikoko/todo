import React, { useState } from "react";

import ThemeMode from "../components/ThemeChanger";
import SearchTask from "../components/SearchTask";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";

import ToDoLocalStorageObserver from "../utils/ToDoLocalStorageObserver";
import createUuid from "../utils/createUuid";

import "../styles/Todo.scss";

interface ToDoIterface {
  toDoLocalStorageObserver: ToDoLocalStorageObserver;
}

const Todo: React.FC<ToDoIterface> = ({ toDoLocalStorageObserver }) => {
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
    <div className={`todo ${localStorage.getItem("Theme")}-mode`}>
      <div className="todo__container">
        <ThemeMode />
        <SearchTask onSearchTasks={searchTasks} />
        <TaskList
          list={todo}
          onClickTask={changeDoneTask}
          onDeleteTask={deleteTask}
        />
        <AddTask onAddTask={addTask} />
      </div>
    </div>
  );
};

export default Todo;
