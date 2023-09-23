import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  /*const increment =()=>{
    setCounter(counter+1)
  }*/
  /*useEffect(() => {
    increment()
  
  }, [increment])*/
  
  return (
    <>
      <div className="container">
        <h1>Use callBackHook : {counter} </h1>
        <hr />
        <ShowIncrement increment={increment} />
      </div>
    </>
  );
};
