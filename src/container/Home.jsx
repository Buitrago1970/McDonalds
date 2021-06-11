import React from 'react';

import Products from '../components/Products.jsx';
import InitialState from '../InitialState.js';
export default function Home() {
  return (
    <>
      <Products products={InitialState.products} />
    </>
  );
}
