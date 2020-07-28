import React, { useState } from "react";

// import TaskInterface from "../interfaces/Task";

import "../styles/TaskItem.scss";

interface TaskItemInterface {
  onAddTask: Function;
}

const AddTask: React.FC<TaskItemInterface> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        type="text"
        className="task-create"
        placeholder='Enter task and press "Add task" button'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => onAddTask(inputValue)}>addTask</button>
    </div>
  );
};

export default AddTask;
