import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';
import '../styles/components/Success.styl';
import '../styles/components/Success.css';

export default function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const history = useHistory();
  return (
    <div className="success">
      <div className="container-address">
        <div className="address">
          <div className="container-info-addreaa">
            <p className="cart-address-subtitle-info">
              📍Su pedido sera entregado en:
            </p>
            <p className="cart-address-info">{buyer[0].addres}</p>
            <p className="cart-address-subtitle-info">
              {`Apartamento ${buyer[0].apto} - ${buyer[0].state},${buyer[0].city}`}
            </p>
          </div>
        </div>
        <div className="modify-address">
          <Link to={'/'} className="modify">
            Modificar ubicación
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
            <div className="icon">
              <span className="glyphicon glyphicon-ok">✔</span>
            </div>
            <h1>Success!</h1>
            <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
            <span>Tu pedido llegara en 3 dias a tu dirección</span>
            <button
              type="button"
              className="redo btn"
              onClick={() => {
                history.push('/');
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
