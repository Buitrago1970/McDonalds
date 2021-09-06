import React, { useContext } from 'react';
import Products from '../components/Products.jsx';
import AppContext from '../context/AppContext.js';
import mcHero from '../images/leyarrow.png';

import '../styles/Home.css';
export default function Home() {
  const { state } = useContext(AppContext);
  const { assets } = state;
  return (
    <>
      <div className="hero">
        <div className="container-arrow">{<img src={mcHero} alt="" />}</div>
        <div className="container-img-hero">
          {<img src={assets[0].image} alt="" />}
        </div>
      </div>
      <Products />
    </>
  );
}
