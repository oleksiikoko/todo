import React from "react";

import TaskItem from "./TaskItem";

import TaskInterface from "../interfaces/Task";

import "../styles/TaskItem.scss";

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
    <>
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
    </>
  );
};

export default TaskList;
