import "./App.css";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <div className="App">
      <h1>Todo App with Tests</h1>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
