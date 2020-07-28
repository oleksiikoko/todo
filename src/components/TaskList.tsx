import React from "react";

import TaskItem from "./TaskItem";

import TaskInterface from "../interfaces/Task";

import "../styles/TaskList.scss";

interface TaskListInterface {
  list: Array<TaskInterface>;
  onClickTask: Function;
  onDeleteTask: Function;
}

const TaskList: React.FC<TaskListInterface> = ({
  list,
  onClickTask,
  onDeleteTask,
}) => {
  return (
    <div className={`todo-list ${localStorage.getItem("Theme")}-mode`}>
      {list.map((item: TaskInterface) => {
        return (
          <TaskItem
            key={item.id}
            id={item.id}
            name={item.name}
            done={item.done}
            onClick={onClickTask}
            onDelete={onDeleteTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
