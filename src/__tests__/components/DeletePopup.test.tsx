import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DeletePopup from "../../components/DeletePopup";

describe("DeletePopup", () => {
  const mockFn = jest.fn();
  const props = {
    name: "testName",
    onConfirm: mockFn,
    onCancel: mockFn,
    themeMode: "light-mode",
  };

  describe("render", () => {
    beforeEach(() => {
      render(<DeletePopup {...props} />);
    });

    it("container render", () => {
      expect(screen.queryByTestId("delete-popup")).toBeTruthy();
      expect(screen.queryByTestId("delete-popup")).toHaveClass(
        "popup__container"
      );
    });

    it("popup div render", () => {
      expect(screen.queryByTestId("popup")).toBeTruthy();
      expect(screen.queryByTestId("popup")).toHaveClass(
        `popup ${props.themeMode}`
      );
    });

    it("paragraph's render", () => {
      expect(screen.queryByText("Delete task:")).toBeTruthy();
      expect(screen.queryByText("Delete task:")).toHaveClass("popup__title");
    });

    it("button's render", () => {
      expect(screen.queryByText("Confirm")).toBeTruthy();
      expect(screen.queryByText("Confirm")).toHaveClass(props.themeMode);
      expect(screen.queryByText("Cancel")).toBeTruthy();
      expect(screen.queryByText("Cancel")).toHaveClass(props.themeMode);
    });
  });

  describe("function calls", () => {
    beforeEach(() => {
      render(<DeletePopup {...props} />);
      mockFn.mockClear();
    });

    it("click popup__container ", () => {
      fireEvent.click(screen.queryByTestId("delete-popup")!);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("click confirm", () => {
      fireEvent.click(screen.queryByText("Confirm")!);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it("click cancel ", () => {
      fireEvent.click(screen.queryByText("Cancel")!);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
