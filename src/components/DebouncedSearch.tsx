import React, { useState, useEffect } from "react";

const DebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const items = ["apple", "banana", "orange", "grape", "watermelon"];
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
  );

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim());
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);
  return (
    <>
      <div>DebouncedSearch</div>
      <label
        htmlFor="search-item"
        style={{
          display: "block",
          width: "300px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        Search Item
      </label>
      <input
        id="search-item"
        value={searchTerm}
        onChange={handleInput}
        style={{ display: "block", width: "300px", margin: "0 auto" }}
      />
      <p>{searchTerm}</p>
      <p>{debouncedSearchTerm}</p>
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default DebouncedSearch;

// Exercise 5 — Debounced Search

// Create a React + TypeScript component called `DebouncedSearch`.

// Requirements:

// 1. Add a text input for the user to type a search term.

// 2. Keep the input value in state.

// 3. Create a second state value for the debounced search term.

// 4. When the user types:
//    - Do NOT update the debounced search term immediately.
//    - Wait 500ms after the user stops typing.
//    - Then update the debounced search term.

// 5. If the user types again before the 500ms finishes:
//    - Cancel the previous timer.
//    - Start a new 500ms timer.

// 6. Use `useEffect` to implement the debounce behavior.

// 7. Display both:
//    - Current input value
//    - Debounced search value

// Example:

// Typing:
// hello

// The current input value should update immediately.

// The debounced value should only become:
// hello

// after the user stops typing for 500ms.

// 8. Add a small static list of strings, for example:

// [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "watermelon"
// ]

// 9. Filter the list using the debounced search term, not the immediate input value.

// 10. Display the matching results.

// Goal:
// Practice controlled inputs, `useState`, `useEffect`, `setTimeout`, effect cleanup, dependency arrays, and debounce behavior.

// Do not use lodash debounce or any external debounce library.
// Do not create a custom hook yet.
