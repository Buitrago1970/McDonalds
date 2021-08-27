import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';
import mclogo from '../images/mcdonalds-logo.png';
export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <Link to={'/'}>
        <img className="logo" src={`${mclogo}`} alt="" />
      </Link>
      <Link to={'/Checkout'}>
        <div className="Header-checkout">
          <i className="fas fa-shopping-basket" />
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </div>
      </Link>
    </div>
  );
}
