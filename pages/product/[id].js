import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();

  const [productItem, setProductItem] = useState({});

  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(setProductItem)
        .catch((err) => console.error(err.message));
  }, [id]);
  return (
    <div>
      <h1>{productItem?.name}</h1>
      <p>{productItem?.attributes.description}</p>
    </div>
  );
};

export default ProductItem;
