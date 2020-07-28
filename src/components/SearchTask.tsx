import React from "react";

import "../styles/SearchTask.scss";

const SearchTask: React.FC<{ onSearchTasks: Function }> = ({
  onSearchTasks,
}) => {
  return (
    <input
      type="text"
      className={`task-search ${localStorage.getItem("Theme")}-mode`}
      placeholder="Enter task name for search..."
      onChange={(e) => {
        onSearchTasks(e.target.value);
      }}
    />
  );
};

export default SearchTask;
