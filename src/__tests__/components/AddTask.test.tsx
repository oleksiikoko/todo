import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskComponent from "../../components/AddTask";

describe("AddTaskComponent", () => {
  const mockFn = jest.fn();
  const props = {
    themeMode: "light-mode",
    inputPlaceholder: "inputPlaceholder",
    inputValue: "inputValue",
    buttonName: "buttonName",
    addTask: mockFn,
    onInputChange: mockFn,
    onPressEnter: mockFn,
  };

  describe("render", () => {
    beforeEach(() => {
      render(<AddTaskComponent {...props} />);
    });

    it("container render", () => {
      expect(screen.queryByTestId("add-task")).toBeTruthy();
      expect(screen.queryByTestId("add-task")).toHaveClass(
        `add-task ${props.themeMode}`
      );
    });

    it("input render", () => {
      expect(screen.queryByPlaceholderText("inputPlaceholder")).toBeTruthy();
      expect(screen.queryByPlaceholderText("inputPlaceholder")).toHaveAttribute(
        "type",
        "text"
      );
      expect(screen.queryByPlaceholderText("inputPlaceholder")).toHaveClass(
        `task-create ${props.themeMode}`
      );
      expect(screen.queryByPlaceholderText("inputPlaceholder")).toHaveAttribute(
        "value",
        props.inputValue
      );
    });

    it("button render", () => {
      expect(screen.queryByRole("button")).toHaveClass(props.themeMode);
      expect(screen.queryByRole("button")).toHaveTextContent(props.buttonName);
    });
  });

  describe("function calls", () => {
    beforeEach(() => {
      render(<AddTaskComponent {...props} />);
      mockFn.mockClear();
    });

    it("input onKeyDown", () => {
      fireEvent.keyDown(screen.queryByPlaceholderText("inputPlaceholder")!, {
        key: 13,
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("input onChange", () => {
      fireEvent.change(screen.queryByPlaceholderText("inputPlaceholder")!, {
        target: { value: "change" },
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("button onClick", () => {
      fireEvent.click(screen.queryByRole("button")!);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
