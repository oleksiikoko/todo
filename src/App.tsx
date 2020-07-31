import React from "react";

import Todo from "./pages/Todo";

import ToDoLocalStorageObserver from "./utils/ToDoLocalStorageObserver";
import ThemeModeLocalStorageObserver from "./utils/ThemeModeLocalStorageObserver";

import "./styles/index.scss";

class App extends React.PureComponent {
  toDoLocalStorageObserver: ToDoLocalStorageObserver;
  themeModeLocalStorageObserver: ThemeModeLocalStorageObserver;

  constructor(props: any) {
    super(props);
    this.toDoLocalStorageObserver = new ToDoLocalStorageObserver();
    this.themeModeLocalStorageObserver = new ThemeModeLocalStorageObserver();
  }

  render() {
    return (
      <Todo
        toDoLocalStorageObserver={this.toDoLocalStorageObserver}
        themeModeLocalStorageObserver={this.themeModeLocalStorageObserver}
      />
    );
  }
}

export default App;
