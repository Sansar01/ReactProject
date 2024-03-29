import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

function Counter() {
  const value = useContext(CounterContext);

  return (
    <>
      <button onClick={() => value.setCount(value.count + 1)}>Increase</button>
      <button onClick={() => value.setCount(value.count - 1)}>Decrease</button>
    </>
  );
}

export default Counter;
