import React, { useState, useReducer, useRef } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function (state before action, action of what you're trying to do)

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'Hello world',
};

const Index = () => {
  const [name, setName] = useState('');
  // Use reducer, state value and dispatch function.
  // You must use reducer function
  const [state, dispatch] = useReducer(reducer, defaultState);
  const nameContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      // Everything in the dispatch in an  action?
      // WHY?????
      dispatch({ type: 'ADD-ITEM', payload: newPerson });
      setName('');
    } else {
      dispatch({ type: 'NO-VALUE', nameContainer: nameContainer });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE-MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameContainer}
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE-ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
// .map represents a list
