import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import AddTask, {
  inputPlaceholder,
  buttonName,
} from "../../containers/AddTask";

describe("AddTask container", () => {
  const mockFn = jest.fn();
  const props = { onAddTask: mockFn, themeMode: "light-mode" };
  beforeEach(() => {
    render(<AddTask {...props} />);
  });

  it("render", () => {
    expect(screen.queryByTestId("add-task")).toBeTruthy();
  });

  it("onInputChange", () => {
    act(() => {
      fireEvent.change(screen.queryByPlaceholderText(inputPlaceholder)!, {
        target: { value: "change" },
      });
    });

    expect(
      (screen.queryByPlaceholderText(inputPlaceholder) as HTMLInputElement)!
        .value
    ).toEqual("change");
  });

  it("onEnter", () => {
    act(() => {
      fireEvent.click(screen.queryByText(buttonName)!);
    });

    expect(
      (screen.queryByPlaceholderText(inputPlaceholder) as HTMLInputElement)!
        .value
    ).toEqual("");
  });
});
