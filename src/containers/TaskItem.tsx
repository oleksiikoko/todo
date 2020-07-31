import React from "react";
import ReactDOM from "react-dom";

import TaskItemComponent from "../components/TaskItem";
import Popup from "../components/DeletePopup";

import TaskInterface from "../interfaces/Task";

import "../styles/TaskItem.scss";

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
  const onClickItem = () => {
    onClick(id);
  };

  //=====popup
  const deletePupup = () => {
    document.getElementById("popup")!.remove();
  };

  const showPopup = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    ReactDOM.render(
      <Popup
        name={name}
        onConfirm={() => onDelete(id)}
        onCancel={() => deletePupup()}
        themeMode={themeMode}
      />,
      document.getElementById("root")
    );
  };
  //=====

  return (
    <TaskItemComponent
      name={name}
      done={done}
      onClick={onClickItem}
      showDeletePopup={showPopup}
      themeMode={themeMode}
    />
  );
};

export default TaskItem;
