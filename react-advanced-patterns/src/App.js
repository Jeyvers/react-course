import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Button = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{ margin: '2rem auto' }}
      onClick={() => setCounter((c) => c + props.increment)}
    >
      I am a button.
      <div>
        <button
          style={{
            margin: '1rem auto',
            background: 'none',
            color: props.color,
            padding: '0.75rem 2rem',
            borderRadius: '.5rem',
            textDecoration: props.underline ? 'underline' : undefined,
            fontSize: '1.5rem',
          }}
        >
          Count {counter}
        </button>
      </div>
    </div>
  );
};

function App() {
  const props = {
    increment: 2,
    underline: true,
  };

  // const obj = {
  //   x: 1,
  // };
  // const obj2 = {
  //   x: 2,
  //   ...obj,
  // };

  // obj2.x === 1

  return (
    <div className='App'>
      <Button {...props} color='black' />
      <Button {...props} color='blue' />
      <Button {...props} color='green' />
    </div>
  );
}

export default App;
