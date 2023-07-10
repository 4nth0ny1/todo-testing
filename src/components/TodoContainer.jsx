import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todoItems, setTodoItems] = useState([]);

  const addItem = (newItem) => {
    setTodoItems([...todoItems, newItem]);
  };

  return (
    <div data-testid="TodoContainer">
      <h1>TodoContainer</h1>
      <CreateTodo onNewInput={addItem} />
      <TodoList items={todoItems} />
    </div>
  );
}
