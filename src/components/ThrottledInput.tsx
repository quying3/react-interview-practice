import React, { useState, useEffect, useRef } from "react";

const ThrottledInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [throttledValue, setThrottledValue] = useState<string>("");
  const lastRunRef = useRef<number>(0);
  useEffect(() => {
    const current = Date.now();
    if (current - lastRunRef.current >= 500) {
      setThrottledValue(inputValue);
      lastRunRef.current = current;
    }
  }, [inputValue]);
  return (
    <>
      <div>ThrottledInput</div>
      <p>{inputValue}</p>
      <p>{throttledValue}</p>
      <input
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      ></input>
    </>
  );
};

export default ThrottledInput;

// Exercise 6 — Throttle

// Create a React + TypeScript component called `ThrottledInput`.

// Requirements:

// 1. Add a text input.

// 2. Keep the current input value in state.

// 3. Create a second state value called `throttledValue`.

// 4. The current input value should update immediately whenever the user types.

// 5. The throttled value should update at most once every 500ms while the user continues typing.

// 6. Unlike debounce:
//    - Do not wait until the user stops typing.
//    - Allow throttled updates to happen during continuous typing.
//    - Limit how frequently the throttled value can update.

// 7. Display both:
//    - Current input value
//    - Throttled value

// 8. Implement the throttle behavior yourself.

// 9. You may use:
//    - `useState`
//    - `useEffect`
//    - `useRef`
//    - `setTimeout`
//    - `clearTimeout`
//    - timestamps such as `Date.now()`

// 10. Do not use lodash throttle or any external throttle library.

// 11. Keep the implementation simple and interview-sized.

// Goal:
// Practice throttle behavior, `useRef`, timing logic, and the difference between debounce and throttle.
