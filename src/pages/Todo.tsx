import React, { useState } from "react";

import ThemeMode from "../components/ThemeChanger";
import SearchTask from "../components/SearchTask";
import TaskList from "../components/TaskList";
import AddTask from "../containers/AddTask";

import ToDoLocalStorageObserver from "../utils/ToDoLocalStorageObserver";
import ThemeModeLocalStorageObserver from "../utils/ThemeModeLocalStorageObserver";
import createUuid from "../utils/createUuid";

import TaskInterface from "interfaces/Task";

import "../styles/Todo.scss";

interface ToDoIterface {
  toDoLocalStorageObserver: ToDoLocalStorageObserver;
  themeModeLocalStorageObserver: ThemeModeLocalStorageObserver;
}

const Todo: React.FC<ToDoIterface> = ({
  toDoLocalStorageObserver,
  themeModeLocalStorageObserver,
}) => {
  const [todo, setTodo] = useState<Array<TaskInterface>>(
    toDoLocalStorageObserver.list
  );
  const [themeMode, setThemeMode] = useState<string>(
    themeModeLocalStorageObserver.mode
  );

  toDoLocalStorageObserver.subscribe(setTodo);
  themeModeLocalStorageObserver.subscribe(setThemeMode);

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
    <div className={`todo ${themeMode}`}>
      <div className="todo__container">
        <ThemeMode
          themeModeLocalStorageObserver={themeModeLocalStorageObserver}
        />
        <SearchTask onSearchTasks={searchTasks} themeMode={themeMode} />
        <TaskList
          list={todo}
          onClickTask={changeDoneTask}
          onDeleteTask={deleteTask}
          themeMode={themeMode}
        />
        <AddTask onAddTask={addTask} themeMode={themeMode} />
      </div>
    </div>
  );
};

export default Todo;
