import React from "react";

import Todo from "./pages/Todo";

import ToDoLocalStorageObserver from "./utils/ToDoLocalStorageObserver";
import ThemeModeLocalStorageObserver from "./utils/ThemeModeLocalStorageObserver";

import "./styles/index.scss";

class App extends React.PureComponent {
  toDoObserver: ToDoLocalStorageObserver;
  themeModeObserver: ThemeModeLocalStorageObserver;

  constructor(props: any) {
    super(props);
    this.toDoObserver = new ToDoLocalStorageObserver();
    this.themeModeObserver = new ThemeModeLocalStorageObserver();
  }

  render() {
    return (
      <Todo
        toDoObserver={this.toDoObserver}
        themeModeObserver={this.themeModeObserver}
      />
    );
  }
}

export default App;
