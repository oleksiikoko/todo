import React, { useState } from "react";

import { TaskItemComponent, DeletePopup } from "components";
import TaskInterface from "interfaces/Task";

import "styles/TaskItem.scss";

interface TaskItemInterface extends TaskInterface {
  onClick: (id: string) => void;
  onDelete: (id: string) => void;
  themeMode: string;
}

const TaskItem: React.FC<TaskItemInterface> = ({
  id,
  name,
  done,
  onClick,
  onDelete,
  themeMode,
}) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const onClickItem = () => {
    onClick(id);
  };
  const onClickDeleteButton = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowPopup(true);
  };

  return (
    <>
      <TaskItemComponent
        name={name}
        done={done}
        onClick={onClickItem}
        showDeletePopup={onClickDeleteButton}
        themeMode={themeMode}
      />
      {showPopup && (
        <DeletePopup
          name={name}
          onConfirm={() => onDelete(id)}
          onCancel={() => setShowPopup(false)}
          themeMode={themeMode}
        />
      )}
    </>
  );
};

export default TaskItem;
