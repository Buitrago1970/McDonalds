import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils/index';

import '../styles/components/Payment.css';

export default function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const Total = handleSumTotal(cart);
  const history = useHistory();

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
        createOrder={(data, actions, error) => {
          return actions.order.create({
            purchase_units: [
              {
                intent: 'CAPTURE',
                amount: {
                  currency_code: 'USD',
                  value: Total,
                },
              },
            ],
          });
        }}
        onSuccess={(details, data) => {
          const newOrder = {
            buyer,
            payment: details,
            order: data,
          };
          history.push('/checkout/success');
          addNewOrder(newOrder);
        }}
        options={{
          clientId: process.env.CLIENT_ID_PP,
        }}
        catchError={(error) => console.log(error)}
        onCancel={(data) =>
          alert(
            'Uy parece que hubo un error, bueno igual vamos a enviar su pedido. '
          )
        }
      />
    </div>
  );
}
