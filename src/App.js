import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [data, setData] = useState([
    { id: 1, content: "First Todo" },
    { id: 2, content: "Second Todo" },
    { id: 3, content: "Third Todo" },
  ]);

  const onNewInput = (input) => {
    console.log(input);
    setData(...data, { id: 4, content: input });
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Todo App with Tests</h1>
      <CreateTodo onNewInput={onNewInput} />
      <TodoList data={data} />
    </div>
  );
}

export default App;
