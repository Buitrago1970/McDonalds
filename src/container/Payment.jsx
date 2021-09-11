import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils/index';
import { FaCcPaypal } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';

import '../styles/components/Payment.css';
import '../styles/components/OpcionesPago.css';
import Bill from '../components/Bill';

export default function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const Total = handleSumTotal(cart);
  const history = useHistory();

  return (
    <div className="Payment">
      <Bill />
      <div className="pagos">
        <h2>¿Cómo quieres pagar?</h2>
        <h3>{`Total a Pagar: $${handleSumTotal(cart)}`}</h3>
        <div className="menu-pagos">
          <ul>
            <li className="ui-text">
              <div className="opciones-pago">
                <span>Efectivo</span>
                <span>
                  <SiCashapp />
                </span>
              </div>
              <div className="x">
                <button
                  onClick={() =>
                    alert(
                      `Su pago está siendo redirigido a
                        ${Math.floor(Math.random() * 100)}JSBC7K06PJTIH6777`
                    )
                  }
                  className="button-pago"
                  type="button"
                >
                  Pagar en Efectvo{' '}
                </button>
              </div>
            </li>
            <li className="ui-text">
              <div className="opciones-pago">
                <span>Paypal - Crédito - Débito</span>
                <span>
                  <FaCcPaypal />
                </span>
              </div>
              <div className="x">
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
                  catchError={(error) =>
                    alert(
                      `Parece que hubo un error ${error} Vuelva a intentar.`
                    )
                  }
                  onCancel={(data) =>
                    alert('Parece que hubo un error. Vuelva a intentar.')
                  }
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
