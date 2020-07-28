import React, { useState } from "react";
import classNames from "classnames";

import DeletePopup from "./DeletePopup";

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
  const [showDeletePopup, setShowDeletePupup] = useState(false);
  return (
    <>
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
            onClick={(event) => {
              event.stopPropagation();
              setShowDeletePupup(true);
            }}
          >
            Delete
          </button>
        )}
      </li>
      {showDeletePopup && (
        <DeletePopup
          name={name}
          onConfirm={() => onDelete(id)}
          onCancel={() => setShowDeletePupup(false)}
        />
      )}
    </>
  );
};

export default TaskItem;
