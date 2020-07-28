import React from "react";

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
    <ul className="task-item" onClick={() => onClick(id)}>
      <p>{name}</p>
      {done && (
        <button className="task-item__delete-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      )}
    </ul>
  );
};

export default TaskItem;
