import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (ite = 100) => {
  for (let i = 0; i < ite; i++) {
    console.log("ahi vamoss ...");
  }
  return `${ite} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incremento } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <div className="container">
        <h1>
          Counter : <small>{counter}</small>
        </h1>
        <hr />
        <h4>{memorizedValue}</h4>
        <button onClick={() => incremento()} className="btn btn-primary">
          Aumentar
        </button>
        <button
          onClick={() => setShow(!show)}
          className="btn btn-outline-success"
        >
          show/hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};
