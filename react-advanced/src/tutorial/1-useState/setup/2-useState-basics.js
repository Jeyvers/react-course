import React, { useState } from 'react';
// useState - default react function 
const UseStateBasics = () => {
  // when useState is invoked, you pass in default values
  // console.log(useState('hello world'))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // useState handles a value and a function handler which works with the value 

  // common naming convention is to add set and the variable name as your function name
  const [text, setText] = useState('random title');
  const handleClick = (e) => {
    if(text === 'random title') {
      setText('hello world');
    } else {
      setText('random title')
    }
  }
  return  ( 
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>

  )
};

export default UseStateBasics;
