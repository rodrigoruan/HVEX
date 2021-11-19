import React from 'react'

import loginUser from '../services/loginUser'

import HVEXLOGO from '../imgs/logo.svg'

import '../css/Login.css'

function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState(null)

  return (
    <div className="login">
      <section className="login-container">
        <img src={HVEXLOGO} />

        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
          type="email"
        />

        <input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Senha"
          type="password"
        />

        {error && (
          <p className="login-container__error">Email ou senha incorretos</p>
        )}

        <button
          onClick={() => loginUser(email, password, setError)}
          type="button"
        >
          LOGIN
        </button>
        <button>REGISTRAR</button>
      </section>
    </div>
  )
}

export default Login
