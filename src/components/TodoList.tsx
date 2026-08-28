// Exercise 2 — Todo List

// Build a simple Todo List component in React with TypeScript.

// Requirements:
// 1. Display an input field and an "Add" button.
// 2. Allow the user to type a todo item into the input.
// 3. Clicking "Add" should add the todo to the list.
// 4. Pressing Enter while the input is focused should also add the todo.
// 5. Do not add empty or whitespace-only todos.
// 6. Clear the input after successfully adding a todo.
// 7. Display all todos in a list.
// 8. Each todo should have a "Delete" button.
// 9. Clicking "Delete" should remove only that todo.
// 10. Each todo should have a checkbox.
// 11. Clicking the checkbox should toggle the todo between completed and incomplete.
// 12. Completed todos should visually appear crossed out.
// 13. Use React functional components and hooks.
// 14. Use TypeScript types for the todo data.
// 15. Do not use external libraries.
import React, { useState } from "react";

type Todo = {
  text: string;
  id: number;
  completed: boolean;
};

const TodoList = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleAdd = () => {
    const trimmedText = inputText.trim();
    if (trimmedText === "") return;
    setTodos((prev) => [
      ...prev,
      { text: trimmedText, id: Date.now(), completed: false },
    ]);
    setInputText("");
  };
  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAdd();
  };
  return (
    <>
      <div>
        <div>TodoList</div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ display: "flex", justifyContent: "center", gap: "12px" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
