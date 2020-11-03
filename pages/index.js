import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hola mundo!!!</h1>
      {productList.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </div>
  );
};

export default Home;
