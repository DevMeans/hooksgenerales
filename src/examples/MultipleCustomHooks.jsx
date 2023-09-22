import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError, getFetch } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );
  console.log(data, isLoading, hasError);
  const { quote, author } = !!data && data[0];
  const sere = () => {
    getFetch();
  };

  return (
    <>
      <div className="container">
        <h1>BRB quote</h1>
        <hr />
        {isLoading ? (
          <LoadingQuote />
        ) : (
          <Quote author={author} quote={quote} />
        )}
        <button 
        disabled={isLoading}
        className="btn btn-outline-primary" onClick={sere}>
          Next quote
        </button>
      </div>
    </>
  );
};
