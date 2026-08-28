import { useState } from "react";

// Exercise 1 — Counter Component

// Build a reusable Counter component in React with TypeScript.

// Requirements:
// 1. Display the current count.
// 2. Provide three buttons:
//    - Increment
//    - Decrement
//    - Reset
// 3. The count must never go below 0.
// 4. Reset should set the count back to 0.
// 5. The component should accept an optional `initialValue` prop.
// 6. If `initialValue` is not provided, the counter should start at 0.
// 7. Disable the Decrement button when the count is 0.
// 8. Use React functional components and hooks.
// 9. Do not use any external libraries.

// Example usage:

// <Counter initialValue={5} />

// Expected initial UI:

// Count: 5

// [Decrement] [Increment] [Reset]

type CounterProps = {
  initialValue?: number;
};

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initialValue);
  const increment = () => setCounter((cnt) => cnt + 1);
  const decrement = () => setCounter((cnt) => Math.max(0, cnt - 1));
  const reset = () => setCounter(0);
  return (
    <>
      <div>Count: {counter}</div>
      <div>Ininial: {initialValue}</div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={counter <= 0}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
