import React, { useState } from "react";

type Props = {
  addTodo: (text: string) => void;
};

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力"
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>追加</button>
    </form>
  );
};

export default TodoInput;
