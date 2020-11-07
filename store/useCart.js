import React, { createContext, useReducer } from 'react';

const initialState = {
  items: [],
  quantity: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      let quantity = 0;
      const foundItem = state.items.find((item) => item.id === action.payload.id);
      if (foundItem) {
        quantity = foundItem.quantity + 1;
      }

      const newItem = { ...action.payload, quantity };
      const newItems = [...state.items.filter((item) => item.id !== newItem.id), newItem];

      return {
        ...state,
        items: [...newItems],
        quantity: calculateQuantity(newItems),
      };
    case 'remove':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

const calculateQuantity = (items) => {
  return items.reduce((total, val) => (total += val.quantity), 0);
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
