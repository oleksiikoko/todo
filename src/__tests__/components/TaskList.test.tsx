// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import TaskItem from "../../components/TaskItem";

// describe("TaskItem", () => {
//   const mockFn = jest.fn();

//   describe("render without button", () => {
//     const props = {
//       name: "testName",
//       done: false,
//       onClick: mockFn,
//       showDeletePopup: mockFn,
//       themeMode: "light-mode",
//     };
//     beforeEach(() => {
//       render(<TaskItem {...props} />);
//     });

//     it("container render", () => {
//       expect(screen.queryByTestId("task-item")).toBeTruthy();
//       expect(screen.queryByTestId("task-item")).toHaveClass(
//         `task-item ${props.themeMode}`
//       );
//     });

//     it("name render", () => {
//       expect(screen.queryByText(props.name)).toBeTruthy();
//     });

//     it("button not render", () => {
//       expect(screen.queryByRole("button")).not.toBeTruthy();
//     });
//   });

//   describe("render with button", () => {
//     const props = {
//       name: "testName",
//       done: true,
//       onClick: mockFn,
//       showDeletePopup: mockFn,
//       themeMode: "light-mode",
//     };
//     beforeEach(() => {
//       render(<TaskItem {...props} />);
//     });

//     it("container render", () => {
//       expect(screen.queryByTestId("task-item")).toBeTruthy();
//       expect(screen.queryByTestId("task-item")).toHaveClass(
//         `task-item ${props.themeMode} done`
//       );
//     });

//     it("name render", () => {
//       expect(screen.queryByText(props.name)).toBeTruthy();
//     });

//     it("button render", () => {
//       expect(screen.queryByRole("button")).toBeTruthy();
//       expect(screen.queryByRole("button")).toHaveClass(props.themeMode);
//     });

//     describe("function calls", () => {
//       beforeEach(() => {
//         mockFn.mockClear();
//       });

//       it("item click", () => {
//         fireEvent.click(screen.queryByTestId("task-item")!);
//         expect(mockFn).toHaveBeenCalledTimes(1);
//       });

//       it("deleteButton click", () => {
//         fireEvent.click(screen.queryByRole("button")!);
//         expect(mockFn).toHaveBeenCalledTimes(1);
//       });
//     });
//   });
// });
