import React from "react";

import "../styles/AddTask.scss";

interface TaskItemInterface {
  themeMode: string;
  inputPlaceholder: string;
  inputValue: string;
  buttonName: string;
  addTask: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const AddTask: React.FC<TaskItemInterface> = ({
  themeMode,
  inputPlaceholder,
  inputValue,
  buttonName,
  addTask,
  onInputChange,
  onPressEnter,
}) => (
  <div className={`add-task ${themeMode}`}>
    <input
      type="text"
      className={`task-create ${themeMode}`}
      placeholder={inputPlaceholder}
      onKeyDown={onPressEnter}
      onChange={onInputChange}
      value={inputValue}
    />
    <button className={themeMode} onClick={addTask}>
      {buttonName}
    </button>
  </div>
);

export default AddTask;
