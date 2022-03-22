import logo from './logo.svg';
import './App.css';
import { useState, useReducer, useEffect } from 'react';

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

// *
// *idle
// *loading
// *loaded
// *error

function App() {
  const [state, setState] = useState('idle');
  function clicked() {
    setState('loading');
    fetch('/data.json')
      .then(() => {
        setState('loaded');
      })
      .catch((err) => {
        setState('error');
      });
  }

  if (state === 'loading') {
    return <div> Loading...</div>;
  }

  if (state === 'error') {
    return <div> Error fetching your request</div>;
  }

  return (
    <div className='App' onClick={clicked}>
      Current State: {state}
    </div>
  );
}

export default App;
