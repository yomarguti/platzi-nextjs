import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { Context as CartContext } from '../../store/useCart';

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [state, dispatch] = useContext(CartContext);

  const [productItem, setProductItem] = useState({});

  const { name, sku, price, image, attributes } = productItem;
  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(setProductItem)
        .catch((err) => console.error(err.message));
  }, [id]);
  return (
    <>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <img src={image} alt={name} width="300px" className="p-1" />
        <div className="flex flex-col justify-center items-start">
          <h3 className="font-bold text-2xl pb-4">{name}</h3>
          <span className="text-xl pb-4">{price}</span>
          <div className="bg-gray-300 rounded text-gray-800 py-1 px-2 text-sm font-bold mb-4">
            {sku}
          </div>
          <button
            className="bg-green-crazy-green text-white font-bold rounded p-3 focus:outline-none"
            onClick={() => dispatch({ type: 'add', payload: productItem })}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h4 className="text-xl font-bold py-6">About this Avocado</h4>
      <p className="text-lg pb-6">{attributes?.description}</p>
      <hr className="pb-5" />
      <div className="text-lg divide-y divide-gray-400 border border-gray-300 rounded-t-lg rounded-b-lg">
        <div className="bg-gray-100 px-3 py-5 text-xl font-bold">Attributes</div>
        <div className="flex flex-col sm:flex-row px-3 py-5">
          <div className="font-bold sm:font-normal sm:w-1/3">Shape</div>
          <div>{attributes?.shape}</div>
        </div>
        <div className="flex flex-col sm:flex-row px-3 py-5">
          <div className="font-bold sm:font-normal sm:w-1/3">Hardiness</div>
          <div>{attributes?.hardiness}</div>
        </div>
        <div className="flex flex-col sm:flex-row px-3 py-5 ">
          <div className="font-bold sm:font-normal sm:w-1/3">Taste</div>
          <div>{attributes?.taste}</div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
