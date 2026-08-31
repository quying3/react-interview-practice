import React from "react";
import { useToggle } from "../hooks/useToggle";

const ToggleExample = () => {
  const [value, toggleValue] = useToggle();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>ToggleExample</div>
        <p>{value ? "ON" : "OFF"}</p>
        <button type="button" onClick={toggleValue} style={{ width: "100px" }}>
          Toggle
        </button>
      </div>
    </>
  );
};

export default ToggleExample;
// Exercise 11 — Custom Hook: useToggle

// Create a reusable custom hook called useToggle.

// Requirements:

// 1. The hook accepts an optional initial boolean value.
//    - Default: false

// 2. The hook stores a boolean state.

// 3. The hook returns:
//    - the current boolean value
//    - a function that toggles the value

// 4. The toggle function should use the previous state:
//    setValue((prev) => !prev)

// 5. Create a ToggleExample component that:
//    - uses useToggle
//    - displays ON or OFF
//    - has a Toggle button

// 6. Use React + TypeScript.

// 7. Do not use external libraries.

// Goal:
// Practice custom hooks, reusable stateful logic, functional state updates, and tuple typing/inference.
