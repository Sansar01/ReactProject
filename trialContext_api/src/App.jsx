import { useContext, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { CounterContext, CounterProvider } from "./context/Counter";

function App() {
  const value = useContext(CounterContext);

  return (
    <>
      <h1>Count is :{value.count}</h1>

      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
