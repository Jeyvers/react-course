import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
      let newPeople = people.filter(person => person.id !== id);
      setPeople(newPeople);
  }
  return (
  <>
  <h2>useState array example</h2>;
  {people.map((person) => {
    const {id, name} = person;
    return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    );
  })}
  {/* funtion will run immediately on render without the arrow function bypass */}
  <button className="btn" onClick={() => setPeople([])}>
    clear items
  </button>
  </>
  )
};

export default UseStateArray;
