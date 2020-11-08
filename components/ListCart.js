import React, { useContext } from 'react';

import CartItem from './CartItem';

import { Context as CartContext } from '../store/useCart';

const ListCart = () => {
  const [state, dispatch] = useContext(CartContext);

  const removeItem = (id) => {
    dispatch({ type: 'remove', payload: { id } });
  };

  return (
    <div>
      {state.quantity === 0 ? (
        <div className="p-6 bg-yellow-100 text-yellow-900 my-4 border border-yellow-900 rounded-lg">
          <div className="font-bold pb-2 text-xl">Your car is empty</div>
          <div className="text-lg">
            You will need to add some items to the cart before you can checkout.
          </div>
        </div>
      ) : (
        state.items.map((item) => {
          return <CartItem product={item} key={item.id} onRemove={removeItem} />;
        })
      )}
    </div>
  );
};

export default ListCart;
