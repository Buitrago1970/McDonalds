import React from 'react';
import Products from '../components/Products.jsx';
import mcHero from '../images/header-home-v2--br.jpg';
import '../styles/Home.css';
export default function Home() {
  return (
    <>
      <div className="container-hero">
        <img src={mcHero} alt="" className="img-hero" />
      </div>
      <Products />
    </>
  );
}
