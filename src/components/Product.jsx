import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Products-item-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>

      <button
        className="button-add-cart"
        onClick={() => handleAddToCart(product)}
        type="button"
      >
        Comprar
      </button>
    </div>
  );
};

export default Product;
