import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/index';
import mclogo from '../images/mc logo9.png';

export default function Bill() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart, assets } = state;
  const subTotal = handleSumTotal(cart);
  const totalIVA = 0.19 * handleSumTotal(cart);

  const handleDeleteItem = (item, i) => {
    removeFromCart(item, i);
  };
  return (
    <div className="Checkout-bill">
      <div className="Checkout-content">
        <div className="Container-img">
          <img src={mclogo} alt="" />
        </div>
        <div className="text-header-bill text-bill">
          <span>McDonald's Development Colombia LLC.</span>
          <span>Via 165 S.A 31/33 - Bogotá</span>
          <span>tel: 310-570-6238</span>
          <span>P.I.: 01-03-2002-19</span>
        </div>
        {cart.length > 0 ? (
          <div className="text-description-bill  text-bill ">
            <p>Item</p>
            <p>TOTAL</p>
          </div>
        ) : (
          <div className="Checkout-sidebar container-button-home">
            <h3>No has agregado ningun pedido</h3>
            <Link to={'/'}>
              <button type="button">Ir al HOME</button>
            </Link>
          </div>
        )}
        {cart.map((item, i) => (
          <div className="Checkout-item" key={i}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span className="price">{`$${item.price}`}</span>
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
        {cart.length > 0 ? (
          <>
            <span>
              -----------------------------------------------------------------------------
            </span>
            <div className="text-description-bill text-bill">
              <p>Sub-Total</p>
              <p>${subTotal}</p>
            </div>
            <div className="text-description-bill text-bill">
              <p>IVA: 19%</p>
              <p>${totalIVA}</p>
            </div>
            <div className="text-description-bill text-bill">
              <p>TOTAL</p>
              <p className="price">${totalIVA + subTotal}</p>
            </div>
            <div className="text-description-bill text-bill position">
              <p>Tran:</p>
              <p>{Math.floor(Math.random() * 100)}</p>
              <p>Dper:</p>
              <p>{Math.floor(Math.random() * 50)}</p>
              <p>Cas:</p>
              <p>{Math.floor(Math.random() * 50)}</p>
            </div>
            <span>
              -----------------------------------------------------------------------------
            </span>
            <div className="text-description-bill text-bill">
              <p>código personalizado</p>
              <p>KMN78BHYU</p>
            </div>
            <span>
              -----------------------------------------------------------------------------
            </span>
            <br />
            <span>
              -----------------------------------------------------------------------------
            </span>
            <div className="text-header-bill text-bill thanks">
              <span>GSTIN - 10001858341k2</span>
              <span>GST Classificación - Servicio</span>
              <span>Restaurante SAC 310570623-</span>
              <span>!Me encanta!</span>
              <span>Nosotros valoramos tu opinión. Visítanos en:</span>
              <a
                href="https://www.juanbuui.com/"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <span>www.juanbuui.com</span>
              </a>
            </div>
          </>
        ) : (
          <div className="text-header-bill text-bill thanks">
            <span>GSTIN - 10001858341k2</span>
            <span>GST Classificación - Servicio</span>
            <span>Restaurante SAC 310570623-</span>
            <span>!Me encanta!</span>
            <span>Nosotros valoramos tu opinión. Visítanos en:</span>
            <a
              href="https://www.juanbuui.com/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <span>www.juanbuui.com</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
