import React, { useContext } from 'react';
import Products from '../components/Products.jsx';
import AppContext from '../context/AppContext.js';

import '../styles/Home.css';
export default function Home() {
  const { state } = useContext(AppContext);
  const { hero } = state;
  return (
    <>
      <div className="hero">
        <div className="container-arrow">
          <h1>{'--------------->'}</h1>
          {
            // <img src={mcHero} alt="" />
          }
        </div>
        <div className="container-img-hero">
          {<img src={hero[0].image} alt="" />}
        </div>
      </div>
      <Products />
    </>
  );
}
