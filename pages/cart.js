import React, { useContext } from 'react';

import { Context as CartContext } from '../store/useCart';

import ListCart from '@components/ListCart';

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  const calculateSubtotal = (items) => {
    if (items.length === 0) return 0;
    const total = items.reduce(
      (total, currentItem) => total + currentItem.quantity * currentItem.price,
      0
    );

    return Math.round(total * 100) / 100;
  };
  return (
    <div>
      <ListCart />
      <hr />
      <div className="flex border border-gray-400 rounded-lg mt-6 py-6 font-bold items-center shadow">
        <div className="text-lg flex-1 px-3">{`Sub total: $ ${calculateSubtotal(
          state.items
        )}`}</div>
        <button className="bg-black text-white py-4 px-5 rounded-lg mx-3 focus:outline-none">
          Check out
        </button>
      </div>
    </div>
  );
};

export default Cart;
