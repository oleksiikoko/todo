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
    <ul
      className={`todo-list ${localStorage.getItem("Theme")}-mode`}
      id="todo-list"
    >
      {list.reverse().map((item: TaskInterface) => {
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
    </ul>
  );
};

export default TaskList;
