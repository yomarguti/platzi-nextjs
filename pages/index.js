import React, { useState, useEffect } from 'react';
import ProductList from '@components/ProductList';
import AvoHeader from '@components/AvoHeader';

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <>
      <AvoHeader />
      <ProductList products={productList} />;
    </>
  );
};

export default Home;
