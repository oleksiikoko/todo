import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { TaskItemContainer } from "containers";

describe("TaskItem", () => {
  const mockFn = jest.fn();

  describe("render without button", () => {
    const props = {
      id: "testId",
      name: "testName",
      done: true,
      onClick: mockFn,
      onDelete: mockFn,
      themeMode: "light-mode",
    };
    beforeEach(() => {
      render(<TaskItemContainer {...props} />);
    });

    it("component render", () => {
      expect(screen.queryByTestId("task-item")).toBeTruthy();
    });

    it("show popup on delete button click", () => {
      act(() => {
        fireEvent.click(screen.queryByRole("button")!);
      });

      expect(screen.queryByTestId("delete-popup")).toBeTruthy();
    });

    it("hide popup on cancel button click", () => {
      act(() => {
        fireEvent.click(screen.queryAllByRole("button")[0]!);
      });
      act(() => {
        fireEvent.click(screen.queryByText("Cancel")!);
      });

      expect(screen.queryByTestId("delete-popup")).not.toBeTruthy();
    });
  });
});
