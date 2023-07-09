import { useState } from "react";

export default function CreateTodo({ onNewInput }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>Create Todo Form</h2>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onNewInput(input)} disabled={!input} type="submit">
        add item
      </button>
    </div>
  );
}
