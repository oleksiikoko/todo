import React from "react";
import classNames from "classnames";

import "styles/TaskItem.scss";

interface TaskItemInterface {
  name: string;
  done: boolean;
  onClick: () => void;
  showDeletePopup: () => void;
  themeMode: string;
}

const TaskItem: React.FC<TaskItemInterface> = ({
  name,
  done,
  onClick,
  showDeletePopup,
  themeMode,
}) => {
  const showDeletePopupClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    showDeletePopup();
  };

  return (
    <li
      data-testid="task-item"
      className={classNames("task-item", `${themeMode}`, { done: done })}
      onClick={onClick}
    >
      <p>{name}</p>
      {done && (
        <button className={themeMode} onClick={showDeletePopupClick}>
          Delete
        </button>
      )}
    </li>
  );
};

export default TaskItem;
