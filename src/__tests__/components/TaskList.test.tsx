import React from "react";
import { render, screen } from "@testing-library/react";

import { TaskList } from "components";

describe("TaskList", () => {
  const mockFn = jest.fn();

  describe("render", () => {
    const props = {
      list: [
        { id: "testId1", name: "testName1", done: false },
        { id: "testId2", name: "testName2", done: false },
        { id: "testId3", name: "testName2", done: false },
      ],
      onClickTask: mockFn,
      onDeleteTask: mockFn,
      themeMode: "light-mode",
    };
    beforeEach(() => {
      render(<TaskList {...props} />);
    });

    it("container", () => {
      expect(screen.queryByTestId("task-list")).toBeTruthy();
      expect(screen.queryByTestId("task-list")).toHaveClass(
        `todo-list ${props.themeMode}`
      );
    });

    it("ul length", () => {
      expect(screen.queryAllByTestId("task-item")).toHaveLength(
        props.list.length
      );
    });
  });
});
