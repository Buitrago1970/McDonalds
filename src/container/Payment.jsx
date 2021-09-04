import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import { handleSumTotal } from '../utils/index';

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
        <ul className="opciones-pago">
          <li className="opcion-pago">
            <div>
              <label className="ui-label">
                <div className="ui-element">
                  <input className="ui-radio__input" type="radio" />
                </div>
                <div className="ui-text">
                  <span>💵</span>
                  <span>Efectivo</span>
                </div>
              </label>
            </div>
          </li>
          <li className="opcion-pago">
            <div>
              <label className="ui-label">
                <div className="ui-element">
                  <input className="ui-radio__input" type="radio" />
                </div>
                <div className="ui-text">
                  <span>💵</span>
                  <span>Tarjeta de Crédito - Débito (Presencial)</span>
                </div>
              </label>
            </div>
          </li>
          <li className="opcion-pago">
            <div>
              <label className="ui-label">
                <div className="ui-element">
                  <input className="ui-radio__input" type="radio" />
                </div>
                <div className="ui-text">
                  <span>💵</span>
                  <span>Paypal</span>
                </div>
              </label>
            </div>
          </li>
          <li className="opcion-pago">
            <div>
              <label className="ui-label">
                <div className="ui-element">
                  <input className="ui-radio__input" type="radio" />
                </div>
                <div className="ui-text">
                  <span>💵</span>
                  <span>Tarjeta Crédito - Débito 🟢(linea)</span>
                </div>
              </label>
            </div>
          </li>
        </ul>
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
        catchError={(error) =>
          alert(`Parece que hubo un error ${error} Vuelva a intentar.`)
        }
        onCancel={(data) =>
          alert('Parece que hubo un error. Vuelva a intentar.')
        }
      />
    </div>
  );
}
