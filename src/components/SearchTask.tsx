import React from "react";

import "styles/SearchTask.scss";

interface SearchTaskIterface {
  placeholderValue: string;
  onSearchTasks: (str: string) => void;
  themeMode: string;
}

const SearchTask: React.FC<SearchTaskIterface> = ({
  placeholderValue,
  onSearchTasks,
  themeMode,
}) => {
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
