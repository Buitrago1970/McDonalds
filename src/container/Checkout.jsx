import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/index';

import '../styles/components/Checkout.css';
const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleDeleteItem = (item, i) => {
    removeFromCart(item, i);
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <>
            <h3>No has agregado ningun pedido</h3>
            <Link to={'/'}>
              <button type="button">Ir al HOME</button>
            </Link>
          </>
        )}

        {cart.map((item, i) => (
          <div className="Checkout-item" key={i}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </div>
            <button
              onClick={() => handleDeleteItem(item, i)}
              type="button"
              title="Eliminar"
            >
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
          <Link to={'/checkout/info'}>
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
