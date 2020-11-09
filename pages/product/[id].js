import React, { useContext } from 'react';

import { Context as CartContext } from '../../store/useCart';

export const getStaticPaths = async () => {
  /*   const response = await fetch('https://new-platzi-nextjs.vercel.app/api/avo');
  const { data: productList } = await response.json(); */

  const productList = [
    {
      name: 'Maluma Hass Avocado',
      id: '2zd33b8c',
      sku: 'NUR72KCM',
      price: 1.15,
      image: '/images/maluma.jpg',
      attributes: {
        description:
          'A relatively new cultivar, it was, the pretty boy baby, discovered in South Africa in the early 1990s by Mr. A.G. (Dries) Joubert. Maluma Babyy. It is a chance seedling of unknown parentage',
        shape: 'Oval',
        hardiness: '1 °C',
        taste: 'Catchy, is an avocado',
      },
    },
    {
      name: 'Fuerte Avocado',
      id: '6trfgkkj',
      sku: 'AX4M8SJV',
      price: 1.21,
      image: '/images/fuerte.jpg',
      attributes: {
        description:
          'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
        shape: 'Pear',
        hardiness: '-1 °C',
        taste: 'Magnificent, is a strong avocado',
      },
    },
  ];
  const paths = productList.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  /*   const response = await fetch(`https://new-platzi-nextjs.vercel.app/api/avo/${params.id}`);
  const data = await response.json(); */

  const data = {
    name: 'Fuerte Avocado',
    id: '6trfgkkj',
    sku: 'AX4M8SJV',
    price: 1.21,
    image: '/images/fuerte.jpg',
    attributes: {
      description:
        'The Fuerte avocado is the second largest commercial variety behind Hass. It is a long time California commercial variety valued for its winter season ripening and its B-Type blossom type which most growers plant adjacent to the Hass for a more consistent production cycle. This avocado tends to produce heavily in alternate years.',
      shape: 'Pear',
      hardiness: '-1 °C',
      taste: 'Magnificent, is a strong avocado',
    },
  };

  return {
    props: {
      productItem: data,
    },
  };
};

const ProductItem = ({ productItem }) => {
  const [state, dispatch] = useContext(CartContext);

  const { name, sku, price, image, attributes } = productItem;

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
