export const reducer = (state, action) => {
  // Everything happens here
  // Always return a state
  if (action.type === 'ADD-ITEM') {
    const newPeople = [...state.people, action.payload];
    // Always remember to copy previous values from the state
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }

  if (action.type === 'NO-VALUE') {
    // action.nameContainer.current.style.outline = '2px solid red';
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please fill in the field',
    };
  }

  if (action.type === 'REMOVE-ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id === action.payload
    );
    return { ...state, people: newPeople };
  }

  if (action.type === 'CLOSE-MODAL') {
    return { ...state, isModalOpen: false };
  }

  throw new Error('No matching action type');
};
