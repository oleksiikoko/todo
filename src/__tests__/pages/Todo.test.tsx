import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Todo from "../../pages/Todo";
import ToDoLocalStorageObserver from "../../utils/ToDoLocalStorageObserver";
import ThemeModeLocalStorageObserver from "../../utils/ThemeModeLocalStorageObserver";

afterEach(cleanup);

describe("Todo page", () => {
  const props = {
    toDoObserver: new ToDoLocalStorageObserver(),
    themeModeObserver: new ThemeModeLocalStorageObserver(),
  };

  beforeEach(() => {
    render(<Todo {...props} />);
  });

  it("render", () => {
    expect(screen.queryByTestId("todo")).toHaveClass("todo light-mode");
    expect(screen.queryByTestId("todo__container")).toHaveClass(
      "todo__container"
    );
    expect(screen.queryByTestId("theme-changer")).toBeTruthy();
    expect(
      screen.queryByPlaceholderText("Enter task name for search...")
    ).toBeTruthy();
    expect(screen.queryByTestId("task-list")).toBeTruthy();
    expect(screen.queryByTestId("add-task")).toBeTruthy();
  });

  //   describe("change theme", () => {
  it("change theme", () => {
    act(() => {
      fireEvent.click(screen.queryByText("Dark")!);
    });
    expect(screen.queryByTestId("todo")).toHaveClass("todo dark-mode");
  });
  //   });
});
