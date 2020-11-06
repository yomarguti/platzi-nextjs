import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <Card.Group itemsPerRow={2} stackable>
      {products.map(({ id, name, image, price }) => {
        return (
          <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
            <Card
              as="a"
              image={image}
              meta="Avocado"
              header={name}
              extra={
                <div>
                  <Icon name="dollar" />
                  {price}
                </div>
              }
            />
          </Link>
        );
      })}
    </Card.Group>
  );
};

export default ProductList;
