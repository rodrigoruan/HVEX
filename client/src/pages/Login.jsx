import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import loginUser from '../services/loginUser'

import HVEXLOGO from '../imgs/logo.svg'

import '../css/Login.css'

function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [redirect, setRedirect] = React.useState(false)

  const userLogged = localStorage.getItem('is_logged')
  if (userLogged || redirect) return <Redirect to="/home" />

  return (
    <div className="login-container">
      <main className="login-container__main">
        <div>
          <img src={HVEXLOGO} />
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="login-container__form"
        >
          <input
            value={email}
            type="email"
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Email"
            required
          />

          <input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Senha"
            required
          />

          {error && <p>{error}</p>}

          <button
            onClick={() => loginUser(email, password, setError, setRedirect)}
          >
            Entrar
          </button>
        </form>

        <div className="login-container__register">
          <Link to="/register">Registrar</Link>
        </div>
      </main>
    </div>
  )
}

export default Login
