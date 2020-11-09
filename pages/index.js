import React from 'react';
import ProductList from '@components/ProductList';
import AvoHeader from '@components/AvoHeader';

export const getServerSideProps = async () => {
  const response = await fetch('https://platzi-nextjs-beryl.vercel.app/api/avo');
  const { data } = await response.json();
  return {
    props: {
      productList: JSON.parse(JSON.stringify(data)),
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
