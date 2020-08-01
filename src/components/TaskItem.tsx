import React from "react";
import classNames from "classnames";

import "styles/TaskItem.scss";

interface TaskItemInterface {
  name: string;
  done: boolean;
  onClick: () => void;
  showDeletePopup: (event: React.MouseEvent<HTMLButtonElement>) => void;
  themeMode: string;
}

const TaskItem: React.FC<TaskItemInterface> = ({
  name,
  done,
  onClick,
  showDeletePopup,
  themeMode,
}) => {
  return (
    <li
      className={classNames("task-item", `${themeMode}`, { done: done })}
      onClick={onClick}
    >
      <p>{name}</p>
      {done && (
        <button className={themeMode} onClick={showDeletePopup}>
          Delete
        </button>
      )}
    </li>
  );
};

export default TaskItem;
