import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateTodo from "./CreateTodo";

test("renders an input field", () => {
  render(<CreateTodo />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("renders a submit button", () => {
  render(<CreateTodo />);
  const button = screen.getByRole("button", { text: /add item/i });
  expect(button).toBeInTheDocument();
});

test("disable button if no text is present", () => {
  render(<CreateTodo />);
  const button = screen.getByRole("button", { text: /add item/i });
  expect(button).toBeDisabled();
});

test("enable button when text is present", () => {
  render(<CreateTodo />);
  const button = screen.getByRole("button", { text: /add item/i });
  const input = screen.getByRole("textbox");

  act(() => {
    userEvent.type(input, "Mow my lawn");
  });

  expect(button).toBeEnabled();
});

test("it should execute a callback function with the input value as argument when the submit button is pressed", () => {
  const buttonCallback = jest.fn();

  render(<CreateTodo onNewInput={buttonCallback} />);
  const button = screen.getByRole("button", { text: /add item/i });
  const input = screen.getByRole("textbox");

  act(() => {
    userEvent.type(input, "Mow my lawn");
    userEvent.click(button);
  });

  expect(buttonCallback).toBeCalledTimes(1);
});
