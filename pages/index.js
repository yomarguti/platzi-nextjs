import React from 'react';
import ProductList from '@components/ProductList';
import AvoHeader from '@components/AvoHeader';

//Server Site Rendering SSR => Se ejecuta cada vez que el cliente hace una peticion
//Static Site Generated SSG =>  Se consulta la api al momento "npm run build" y crea la pagina
//Dynamic Static Generation DSG => Se generan varias paginas estaticas de manera dimanica tambien npm run build
export const getServerSideProps = async () => {
  /*   const response = await fetch('https://platzi-nextjs-57tsoo02g.vercel.app/api/avo');
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

  return {
    props: {
      productList,
    },
  };
};

const Home = ({ productList }) => {
  return (
    <>
      <AvoHeader />
      <ProductList products={productList} />;
    </>
  );
};

export default Home;
