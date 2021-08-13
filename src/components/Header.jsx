import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <Link to={'/'}>
        <h1 className="Header-title">PlatziConf Merch</h1>
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
