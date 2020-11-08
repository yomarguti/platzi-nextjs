import React, { createContext, useReducer } from 'react';

const initialState = {
  items: [],
  quantity: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const newItem = action.payload;

      const foundItem = state.items.find((item) => item.id === newItem.id);

      if (foundItem) {
        foundItem.quantity = foundItem.quantity + 1;
        const newItems = [...state.items.filter((item) => item.id !== newItem.id), foundItem];
        return {
          ...state,
          items: newItems,
          quantity: state.quantity + 1,
        };
      }

      newItem.quantity = 1;

      return {
        ...state,
        items: [...state.items, newItem],
        quantity: state.quantity + 1,
      };
    case 'remove':
      const items = [...state.items.filter((item) => item.id !== action.payload.id)];

      return {
        ...state,
        items: [...items],
        quantity: calculateQuantity(items),
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
