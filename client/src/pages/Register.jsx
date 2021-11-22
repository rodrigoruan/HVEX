import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

import HVEXLOGO from '../imgs/logo.svg';

import '../css/Register.css';

function Register () {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetchApiAndLoginUser = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/create', {
        email,
        name,
        password
      })
      .then(() => setRedirect(true))
      .catch(() => setError('Email já está sendo utilizado'));
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="register">
      <main className="register-main">
        <header>
          <Link to="/">
            <img src={HVEXLOGO} alt="HVEX LOGO" />
          </Link>
        </header>

        <form onSubmit={fetchApiAndLoginUser} className="register-form">
          <label>
            <input
              onChange={({ target }) => setName(target.value)}
              value={name}
              type="text"
              placeholder="Nome"
              required
            />
          </label>

          <label>
            <input
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
            />
          </label>

          <label>
            <input
              onChange={({ target }) => setPassword(target.value)}
              value={password}
              type="password"
              placeholder="Senha"
              required
            />
          </label>

          {error && <p className="register-error">{error}</p>}

          <button type="submit">CADASTRAR</button>
        </form>
      </main>
    </div>
  );
}

export default Register;
