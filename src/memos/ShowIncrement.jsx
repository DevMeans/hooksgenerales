import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a generar");
  return (
    <button
      className="btn btn-outline-info"
      onClick={() => {
        increment(5);
      }}
    >
      incrementar
    </button>
  );
});
