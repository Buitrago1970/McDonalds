import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>
          {product.title} <span>$ {product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>

      <button onClick={() => handleAddToCart(product)} type="button">
        Comprar
      </button>
    </div>
  );
};

export default Product;
