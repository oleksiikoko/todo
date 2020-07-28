import React, { useState } from "react";

import "../styles/AddTask.scss";

interface TaskItemInterface {
  onAddTask: Function;
}

const AddTask: React.FC<TaskItemInterface> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <div className={`add-task ${localStorage.getItem("Theme")}-mode`}>
      <input
        type="text"
        className={`task-create ${localStorage.getItem("Theme")}-mode`}
        placeholder='Enter task and press "Add task" button'
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        className={`${localStorage.getItem("Theme")}-mode`}
        onClick={addTask}
      >
        Add Task!
      </button>
    </div>
  );
};

export default AddTask;
