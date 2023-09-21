import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incremento,decrement,reset} = useCounter();
  return (
    <div className="container">
      <h1>CounterWithCustomHook : {counter}</h1>
      <hr />
      <button className="btn btn-outline-primary" onClick={()=>incremento(2)}>+1</button>
      <button className="btn btn-outline-primary" onClick={reset}>reset</button>
      <button className="btn btn-outline-primary" onClick={()=>decrement(2)}>-1</button>
    </div>
  );
};
