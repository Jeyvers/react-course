import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react';

function reducer({ state }) {
  switch (state) {
    case 'PRESSED_ONCE':
      return { state: 'PRESSED_TWO' };
    case 'PRESSED_TWO':
      return { state: 'PRESSED_THREE' };
    case 'PRESSED_THREE':
      return { state: 'PRESSED_ONCE' };
    default:
      return { state: 'PRESSED_ONCE' };
  }
}

const Button = (props) => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    state: 'PRESSED_ONCE',
  });
  return (
    <div style={{ margin: '2rem auto' }}>
      <div onClick={() => dispatch()}>
        {' '}
        I am a button.
        <div>{state.state}</div>
      </div>
    </div>
  );
};

function App() {
  const props = {
    increment: 2,
    underline: true,
  };

  return (
    <div className='App'>
      <Button {...props} color='black' />
      <Button {...props} color='blue' />
      <Button {...props} color='green' />
    </div>
  );
}

export default App;
