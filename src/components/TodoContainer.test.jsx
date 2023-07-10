/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen, act } from "@testing-library/react";
import TodoContainer from "./TodoContainer";
import userEvent from "@testing-library/user-event";

describe("<TodoContainer />", () => {
  test("it should mount", () => {
    render(<TodoContainer />);
    const todoContainer = screen.getByTestId("TodoContainer");
    expect(todoContainer).toBeInTheDocument();
  });

  test("it should have a title", () => {
    render(<TodoContainer />);
    const title = screen.getByText("TodoContainer");
    expect(title).toBeInTheDocument();
  });

  test("it should contain the CreateTodo Component", () => {
    render(<TodoContainer />);
    const component = screen.getByTestId("CreateTodo");
    expect(component).toBeInTheDocument();
  });

  test("it should contain the TodoList Component", () => {
    render(<TodoContainer />);
    const component = screen.getByTestId("TodoList");
    expect(component).toBeInTheDocument();
  });

  test("it should update state when a new item is received from the CreateTodo component", () => {
    render(<TodoContainer />);
    const button = screen.getByRole("button", { text: /add item/i });
    const input = screen.getByRole("textbox");

    act(() => {
      userEvent.type(input, "Mow the lawn");
      userEvent.click(button);
    });

    const todoItem = screen.getByText("Mow the lawn");

    expect(todoItem).toBeInTheDocument();
  });
});
