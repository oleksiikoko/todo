import React from "react";
import classNames from "classnames";

import TaskInterface from "../interfaces/Task";

import "../styles/TaskItem.scss";

interface TaskItemInterface extends TaskInterface {
  onClick: Function;
  onDelete: Function;
}

const TaskItem: React.FC<TaskItemInterface> = ({
  id,
  name,
  done,
  onClick,
  onDelete,
}) => {
  return (
    <li
      className={classNames(
        "task-item",
        `${localStorage.getItem("Theme")}-mode`,
        { done: done }
      )}
      onClick={() => onClick(id)}
    >
      <p>{name}</p>
      {done && (
        <button
          className={`${localStorage.getItem("Theme")}-mode`}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TaskItem;
