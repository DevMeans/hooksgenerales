import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 1,
    counter2: 2,
    counter3: 3,
  });
  const { counter1, counter2, counter3 } = counter;
  const setCounter1 = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1,
    });
  };
  return (
    <>
      <div className="container">
        <h1>Counter:{counter1}</h1>
        <h2>Counter:{counter2}</h2>
        <h2>Counter:{counter3}</h2>
        <hr />
        <button className="btn btn-primary" onClick={setCounter1}>
          +1
        </button>
      </div>
    </>
  );
};
