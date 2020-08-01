import React, { useState } from "react";

import { AddTaskComponent } from "components";

import "styles/AddTask.scss";

const inputPlaceholder = 'Enter task and press "Add task" button';
const buttonName = "Add Task!";

interface TaskItemInterface {
  onAddTask: (name: string) => void;
  themeMode: string;
}

const AddTask: React.FC<TaskItemInterface> = ({ onAddTask, themeMode }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      onAddTask(inputValue);
      setInputValue("");
      document.getElementById("todo-list")!.scrollTo(0, 0);
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target!.value);

  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === "Enter" && addTask();

  return (
    <AddTaskComponent
      themeMode={themeMode}
      inputPlaceholder={inputPlaceholder}
      inputValue={inputValue}
      buttonName={buttonName}
      addTask={addTask}
      onInputChange={onInputChange}
      onPressEnter={onPressEnter}
    />
  );
};

export default AddTask;
