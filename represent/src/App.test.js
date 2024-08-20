import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import TaskInput from "./TaskInput";
import userEvent from "@testing-library/user-event";

const mockedSetTasks = jest.fn();

test("renders the to-do list header", () => {
  render(<App />);
  const headerElement = screen.getByText(/my to-do list/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders the task input", () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/add a task/i);
  expect(inputElement).toBeInTheDocument();
});

test("renders the add task button", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /add task/i });
  expect(buttonElement).toBeInTheDocument();
});
