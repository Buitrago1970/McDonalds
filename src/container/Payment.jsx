import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils/index';

import '../styles/components/Payment.css';

export default function Payment() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const Total = handleSumTotal(cart);

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
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
        <h3>{`Precio Total: $${Total}`}</h3>
      </div>
      <PayPalButton
        // amount={Total}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        createOrder={(data, actions, error) => {
          return actions.order.create({
            purchase_units: [
              {
                intent: 'CAPTURE',
                amount: {
                  currency_code: 'COP',
                  value: Total,
                },
              },
            ],
          });
        }}
        onSuccess={(details, data) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
        }}
        // catchError
        // onCancel
      />
      <div></div>
    </div>
  );
}
