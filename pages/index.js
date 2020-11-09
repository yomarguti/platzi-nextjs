import React from 'react';
import ProductList from '@components/ProductList';
import AvoHeader from '@components/AvoHeader';

//Server Site Rendering SSR => Se ejecuta cada vez que el cliente hace una peticion
//Static Site Generated SSG =>  Se consulta la api al momento "npm run build" y crea la pagina
//Dynamic Static Generation DSG => Se generan varias paginas estaticas de manera dimanica tambien npm run build
export const getServerSideProps = async () => {
  const response = await fetch('https://platzi-nextjs-beryl.vercel.app/api/avo');
  const { data: productList } = await response.json();
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
