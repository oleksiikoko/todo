import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Todo } from "pages";
import { ToDoLocalStorageObserver } from "utils";
import ThemeModeLocalStorageObserver from "../../utils/ThemeModeLocalStorageObserver";

afterEach(cleanup);

describe("Todo page", () => {
  const props = {
    toDoObserver: new ToDoLocalStorageObserver(),
    themeModeObserver: new ThemeModeLocalStorageObserver(),
  };

  describe("render", () => {
    beforeEach(() => {
      render(<Todo {...props} />);
    });

    it("container", () => {
      expect(screen.queryByTestId("todo")).toHaveClass("todo light-mode");
      expect(screen.queryByTestId("todo__container")).toHaveClass(
        "todo__container"
      );
    });

    it("components", () => {
      expect(screen.queryByTestId("theme-changer")).toBeTruthy();
      expect(
        screen.queryByPlaceholderText("Enter task name for search...")
      ).toBeTruthy();
      expect(screen.queryByTestId("task-list")).toBeTruthy();
      expect(screen.queryByTestId("add-task")).toBeTruthy();
    });
  });

  describe("actions", () => {
    beforeEach(() => {
      render(<Todo {...props} />);
    });
    it("change theme", () => {
      act(() => {
        fireEvent.click(screen.queryByText("Dark")!);
      });
      expect(screen.queryByTestId("todo")).toHaveClass("todo dark-mode");
    });

    it("add task", () => {
      [...Array(5).keys()].map((item) => {
        act(() => {
          fireEvent.change(
            screen.queryByPlaceholderText(
              'Enter task and press "Add task" button'
            )!,
            { target: { value: item.toString() } }
          );
        });
        act(() => {
          fireEvent.click(screen.queryByTestId("add-task__button")!);
        });
      });

      expect(props.toDoObserver.list).toHaveLength(5);
      expect(screen.queryAllByTestId("task-item")).toHaveLength(5);
    });

    it("search task", () => {
      act(() => {
        fireEvent.change(
          screen.queryByPlaceholderText("Enter task name for search...")!,
          {
            target: { value: "1" },
          }
        );
      });

      expect(props.toDoObserver.list).toHaveLength(1);
      expect(screen.queryAllByTestId("task-item")).toHaveLength(1);
      //restore searchline=====================================================
      act(() => {
        fireEvent.change(
          screen.queryByPlaceholderText("Enter task name for search...")!,
          {
            target: { value: "" },
          }
        );
      });
      //=========================================================================
    });
    it("done task", () => {
      act(() => {
        fireEvent.click(screen.getAllByTestId("task-item")[0]!);
      });

      expect(screen.queryAllByText("Delete")).toHaveLength(1);
    });

    it("decline delete task", () => {
      act(() => {
        fireEvent.click(screen.queryAllByText("Delete")[0]!);
      });
      act(() => {
        fireEvent.click(screen.queryByText("Cancel")!);
      });

      expect(props.toDoObserver.list).toHaveLength(5);
      expect(screen.queryAllByTestId("task-item")).toHaveLength(5);
    });

    it("allow delete task", () => {
      act(() => {
        fireEvent.click(screen.queryAllByText("Delete")[0]!);
      });
      act(() => {
        fireEvent.click(screen.queryByText("Confirm")!);
      });

      expect(props.toDoObserver.list).toHaveLength(4);
      expect(screen.queryAllByTestId("task-item")).toHaveLength(4);
    });
  });
});
