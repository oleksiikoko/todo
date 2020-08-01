import React from "react";

import "styles/SearchTask.scss";

interface SearchTaskIterface {
  onSearchTasks: Function;
  themeMode: string;
}

const SearchTask: React.FC<SearchTaskIterface> = ({
  onSearchTasks,
  themeMode,
}) => {
  const placeholderValue = "Enter task name for search...";
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSearchTasks(event.target.value);

  return (
    <input
      type="text"
      className={`task-search ${themeMode}`}
      placeholder={placeholderValue}
      onChange={onInputChange}
    />
  );
};

export default SearchTask;
