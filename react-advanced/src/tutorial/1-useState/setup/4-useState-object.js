import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
     age: 24, 
     message: 'random message'
    });

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  // Using objects, use spread operators to preserve values 
  const changeMessage = () => {
      setMessage('Hello World');
    }
  return (
    <React.Fragment>
      <h2>useState object example</h2>;
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}> Change Message</button>
    </React.Fragment>

  )
};

export default UseStateObject;
