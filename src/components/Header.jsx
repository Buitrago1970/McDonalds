import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import { GiBasketballBasket } from 'react-icons/gi';

import '../styles/components/Header.css';
import mclogo from '../images/mc logo9.png';
export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <div className="logo-container">

      <Link className="logo" to={'/'}>
        <img src={`${mclogo}`} alt="" />
      </Link>

      </div>
      <Link to={'/Checkout'}>
        <div className="Header-checkout">
          {/* <i className="fas fa-shopping-basket" /> */}
          <GiBasketballBasket className="icon-basket" />
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </div>
      </Link>
    </div>
  );
}
