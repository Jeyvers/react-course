import React, { useState, useReducer, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// * DOM elements, classes, functions, null
const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(true);

  const allChildren = React.Children.map(children, (child) => {
    const clone = React.cloneElement(child, {
      checked,
      setChecked,
    });
    if (typeof child.type !== 'function') {
      // this is not our element to be messed around
      return child;

      // Or throw new Error(`${child.type} DOM element is not allowed inside <Checkbox /> component`)

      // Or return null
    }
    return clone;
  });

  return allChildren;
};

const CheckboxInput = ({ checked, setChecked }) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
      }}
    />
  );
};
const Label = ({ setChecked, children }) => {
  return (
    <label onClick={() => setChecked((state) => !state)}>{children}</label>
  );
};

function App() {
  return (
    <>
      <h1>Compound Components in React</h1>
      <Checkbox>
        <CheckboxInput />
        <br />
        <Label>Check box label</Label>
      </Checkbox>
    </>
  );
}

export default App;
