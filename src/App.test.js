import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App with Tests/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the TodoList", () => {
  render(<App />);
  const component = screen.getByTestId("TodoList");
  expect(component).toBeInTheDocument();
});
