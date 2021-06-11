import React from 'react';

import Product from './Product.jsx';
import '../styles/components/Products.css';

export default function Products({ products }) {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
