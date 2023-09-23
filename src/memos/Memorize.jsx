import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, incremento } = useCounter(10);
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="container">
        <h1>
          Counter : <Small value={counter} />
        </h1>
        <hr />
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
