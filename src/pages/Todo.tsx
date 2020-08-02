import React, { useState } from "react";

import { ThemeChanger, SearchTask, TaskList } from "components";
import { AddTaskContainer } from "containers";
import {
  ToDoLocalStorageObserver,
  ThemeModeLocalStorageObserver,
  createUuid,
} from "utils";
import TaskInterface from "interfaces/Task";

import "../styles/Todo.scss";

interface ToDoIterface {
  toDoObserver: ToDoLocalStorageObserver;
  themeModeObserver: ThemeModeLocalStorageObserver;
}

const Todo: React.FC<ToDoIterface> = ({
  toDoObserver: toDoObserver,
  themeModeObserver: themeModeObserver,
}) => {
  const [todo, setTodo] = useState<Array<TaskInterface>>(toDoObserver.list);
  const [themeMode, setThemeMode] = useState<string>(themeModeObserver.mode);

  toDoObserver.subscribe(setTodo);
  themeModeObserver.subscribe(setThemeMode);

  const addTask = (name: string) => {
    toDoObserver.addTask({
      id: createUuid(),
      name: name,
      done: false,
    });
  };

  const changeDoneTask = (id: string) => {
    toDoObserver.changeDone(id);
  };

  const deleteTask = (id: string) => {
    toDoObserver.deleteTask(id);
  };

  const searchTasks = (subStr: string) => {
    toDoObserver.searchTasks(subStr);
  };

  return (
    <div data-testid="todo" className={`todo ${themeMode}`}>
      <div data-testid="todo__container" className="todo__container">
        <ThemeChanger themeModeObserver={themeModeObserver} />
        <SearchTask
          placeholderValue="Enter task name for search..."
          onSearchTasks={searchTasks}
          themeMode={themeMode}
        />
        <TaskList
          list={todo}
          onClickTask={changeDoneTask}
          onDeleteTask={deleteTask}
          themeMode={themeMode}
        />
        <AddTaskContainer onAddTask={addTask} themeMode={themeMode} />
      </div>
    </div>
  );
};

export default Todo;
