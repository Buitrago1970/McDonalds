import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { handleSumTotal } from '../utils/index';

import AppContext from '../context/AppContext';
import Bill from '../components/Bill';

import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Checkout">
      <Bill />

      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
          <Link to={'/checkout/payment'}>
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
