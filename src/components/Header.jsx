import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

export default function Header() {
  return (
    <div className="Header">
      <Link to={'/'}>
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <Link to={'/Checkout'}>
        <div className="Header-checkout">
          <i className="fas fa-shopping-basket" />
        </div>
      </Link>
    </div>
  );
}
