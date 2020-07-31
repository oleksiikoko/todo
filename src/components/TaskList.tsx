import React from "react";

import TaskItem from "../containers/TaskItem";

import TaskInterface from "../interfaces/Task";

import "../styles/TaskList.scss";

interface TaskListInterface {
  list: Array<TaskInterface>;
  onClickTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  themeMode: string;
}

const TaskList: React.FC<TaskListInterface> = ({
  list,
  onClickTask,
  onDeleteTask,
  themeMode,
}) => {
  return (
    <ul className={`todo-list ${themeMode}`} id="todo-list">
      {list.reverse().map((item: TaskInterface) => {
        return (
          <TaskItem
            key={item.id}
            {...item}
            onClick={onClickTask}
            onDelete={onDeleteTask}
            themeMode={themeMode}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
