import React from "react";
import { render, screen } from "@testing-library/react";
import AddTaskComponent from "../../components/AddTask";

describe("f", () => {
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
  it("f", () => {
    render(<AddTaskComponent {...props} />);

    expect(screen.queryByTestId("add-task")).toBeTruthy();
  });
});

// themeMode={props.themeMode}
// inputPlaceholder="inputPlaceholder"
// inputValue="inputValue"
// buttonName="buttonName"
// addTask={mockFn}
// onInputChange={mockFn}
// onPressEnter={mockFn}
