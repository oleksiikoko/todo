import React from "react";

import Todo from "../pages/Todo";

import "../styles/index.scss";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <input
          type="text"
          className="task-search"
          placeholder="Enter task name for search..."
        />
        <div className="task-list"></div>
        <Todo />
      </>
    );
  }
}

export default App;
