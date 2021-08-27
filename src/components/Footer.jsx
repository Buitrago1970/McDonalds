import React from 'react';
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai';

import '../styles/components/Footer.css';
import jb from '../images/neonjuanbui.svg';

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Footer-title">MC Donalds FA</p>
      <p className="Footer-copy">
        Todos los Derecho del Medio Ambiente Reservados
      </p>
      <div className="social-media">
        <a
          className="footer-button instagram"
          href="https://www.instagram.com/el_guaso0n_bebe/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <AiOutlineInstagram />
        </a>
        <a
          className="footer-button instagram"
          href="https://www.juanbuui.com/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <img className="icon-media" src={jb} alt="colmbian Heart" />
        </a>
        <a
          className="footer-button github"
          href="https://github.com/Buitrago1970"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
}
