import React, { useState } from "react";

export default function CreateTodo({ onNewInput }) {
  const [input, setInput] = useState("");

  return (
    <div data-testid="CreateTodo">
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onNewInput(input)} disabled={!input} type="submit">
        add item
      </button>
    </div>
  );
}
