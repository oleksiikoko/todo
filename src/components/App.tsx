import React from "react";

import Todo from "../pages/Todo";

import ToDoLocalStorageObserver from "../utils/ToDoLocalStorageObserver";

import "../styles/index.scss";

class App extends React.PureComponent {
  toDoLocalStorageObserver: ToDoLocalStorageObserver;

  constructor(props: any) {
    super(props);
    this.toDoLocalStorageObserver = new ToDoLocalStorageObserver();
  }

  render() {
    return <Todo toDoLocalStorageObserver={this.toDoLocalStorageObserver} />;
  }
}

export default App;
