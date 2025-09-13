import React from "react";
import type{ Todo } from "../types";

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
            padding: "4px 0"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* ✅ チェックボックス追加 */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>
          </div>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
