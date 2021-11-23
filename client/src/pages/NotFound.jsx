import React from 'react';
import { Link } from 'react-router-dom';

import NOTFOUNDICON from '../imgs/404.svg';
import HVEXLOGO from '../imgs/logo.svg';

import '../css/NotFound.css';

function NotFound () {
  return (
    <div className="notfound">
      <img src={HVEXLOGO} alt="HVEX LOGO" />
      <img src={NOTFOUNDICON} alt="Página não encontrada" />
      <h1>Página não encontrada</h1>
      <Link to="/">Retornar</Link>
    </div>
  );
}

export default NotFound;
