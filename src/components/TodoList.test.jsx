/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  test("it should mount", () => {
    render(<TodoList />);
    const todoList = screen.getByTestId("TodoList");
    expect(todoList).toBeInTheDocument();
  });

  test("it should render a helpful message when no items are passed to it", () => {
    render(<TodoList />);
    const message = screen.getByText("There are no items in your list.");
    expect(message).toBeInTheDocument();
  });

  test("it should render a set of TodoItems when items are passed to it", () => {
    const todoItems = [
      "Mow my lawn",
      "Take out the trash",
      "Clean the bathrooms",
    ];

    render(<TodoList items={todoItems} />);

    const renderedItem1 = screen.getByText(todoItems[0]);
    const renderedItem2 = screen.getByText(todoItems[1]);
    const renderedItem3 = screen.getByText(todoItems[2]);

    expect(renderedItem1.innerHTML).toBe("Mow my lawn");
    expect(renderedItem2.innerHTML).toBe("Take out the trash");
    expect(renderedItem3.innerHTML).toBe("Clean the bathrooms");

    // const todoItems = [
    //   { id: 1, content: "Go" },
    //   { id: 2, content: "Sure" },
    // ];

    // const renderedItem1 = screen.getByText(todoItems[0].content);
    // const renderedItem2 = screen.getByText(todoItems[1].content);
    // expect(renderedItem1.innerHTML).toBe("Go");
    // expect(renderedItem2.innerHTML).toBe("Sure");
  });
});
