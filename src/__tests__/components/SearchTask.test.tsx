import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchTask from "../../components/SearchTask";

describe("SearchTask", () => {
  const mockFn = jest.fn();

  const placeholderText = "Enter task name for search...";
  const props = {
    placeholderValue: placeholderText,
    onSearchTasks: mockFn,
    themeMode: "light-mode",
  };

  describe("render", () => {
    beforeEach(() => {
      render(<SearchTask {...props} />);
    });

    it("container render", () => {
      expect(screen.queryByPlaceholderText(placeholderText)).toBeTruthy();
      expect(screen.queryByPlaceholderText(placeholderText)).toHaveClass(
        `task-search ${props.themeMode}`
      );
      expect(screen.queryByPlaceholderText(placeholderText)).toHaveAttribute(
        "type",
        "text"
      );
    });
  });

  describe("function calls", () => {
    beforeEach(() => {
      render(<SearchTask {...props} />);
      mockFn.mockClear();
    });

    it("click popup__container ", () => {
      fireEvent.change(screen.queryByPlaceholderText(placeholderText)!, {
        target: { value: "change" },
      });
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
