import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  const handleStart = () => {
    if (intervalRef.current !== null) return;
    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    intervalRef.current = id;
  };
  const handleStop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const handleReset = () => {
    handleStop();
    setTime(0);
  };
  useEffect(() => {
    return () => {
      handleStop();
    };
  }, []);
  return (
    <>
      <div>StopWatch</div>
      <p>{time}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button style={{ width: "80px" }} onClick={handleStart}>
          Start
        </button>
        <button style={{ width: "80px" }} onClick={handleStop}>
          Stop
        </button>
        <button style={{ width: "80px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default StopWatch;

// Exercise 9 — Stopwatch

// Create a React + TypeScript component called `Stopwatch`.

// Requirements:

// 1. Display elapsed time in seconds.

// 2. Add three buttons:
//    - Start
//    - Stop
//    - Reset

// 3. Start:
//    - Starts the stopwatch.
//    - The displayed time should increase once per second.

// 4. Stop:
//    - Stops the stopwatch.
//    - The current elapsed time should remain displayed.

// 5. If Start is clicked again after Stop:
//    - Continue from the existing elapsed time.
//    - Do not reset back to 0.

// 6. Reset:
//    - Stop the stopwatch.
//    - Reset the displayed time to 0.

// 7. Prevent multiple timers from running at the same time if Start is clicked repeatedly.

// 8. Clean up the timer when the component unmounts.

// 9. Use React + TypeScript.

// You may use:
// - `useState`
// - `useEffect`
// - `useRef`
// - `setInterval`
// - `clearInterval`

// Do not use:
// - external timer libraries

// Goal:
// Practice interval timers, cleanup, state updates, `useRef`, and preventing duplicate timers.
