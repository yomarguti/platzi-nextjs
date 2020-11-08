import React from 'react';
import Link from 'next/link';

const CartItem = ({ product: { id, price, image, name, quantity, attributes }, onRemove }) => {
  return (
    <div className="flex items-center">
      <Link href={`/product/${id}`}>
        <img src={image} alt={name} width="150px" className="p-1 cursor-pointer" />
      </Link>
      <div>
        <Link href={`/product/${id}`}>
          <h3 className="font-bold text-2xl pb-4 hover:text-blue-500 cursor-pointer">{name}</h3>
        </Link>
        <span className="text-xl">{`${quantity} x $${price}`}</span>
        <p className="hidden sm:block pt-4">
          {attributes ? `${attributes.description.substring(0, 160)}...` : ''}
        </p>
      </div>
      <div
        className="text-xl font-bold p-2 border border-gray-400 text-gray-600 rounded-lg cursor-pointer hover:border-gray-800 hover:text-gray-800 ml-4"
        onClick={() => onRemove(id)}
      >
        X
      </div>
    </div>
  );
};

export default CartItem;
