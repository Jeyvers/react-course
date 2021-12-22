import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
      <h1>{text || "Hello world"} </h1>
      {/* Example of a toggle state */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <h1>There is an error...</h1> : <h1>No error</h1>}
      {/* {!text && <h1>hello world </h1>} */}
    </>
  );
};

export default ShortCircuit;
