import React from "react";

import { TaskItemContainer } from "containers";
import TaskInterface from "interfaces/Task";

import "styles/TaskList.scss";

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
      {list
        .map((item: TaskInterface) => {
          return (
            <TaskItemContainer
              key={item.id}
              {...item}
              onClick={onClickTask}
              onDelete={onDeleteTask}
              themeMode={themeMode}
            />
          );
        })
        .reverse()}
    </ul>
  );
};

export default TaskList;
