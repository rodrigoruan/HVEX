import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import HVEXLOGO from '../imgs/logo.svg'
import returnArrow from '../imgs/return.svg'

import createUser from '../services/createUser'

import '../css/Register.css'

function Register () {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [redirect, setRedirect] = React.useState('')

  if (redirect) return <Redirect to="/" />

  return (
    <div className="register-container">
      <header className="register-container__header">
        <Link to="/">
          <img src={returnArrow} alt="retornar para paǵina de login" />
        </Link>
      </header>

      <main className="register-container__main">
        <div>
          <img src={HVEXLOGO} alt="HVEX logo" />
        </div>

        <form
          className="register-container__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            onChange={({ target }) => setName(target.value)}
            value={name}
            type="text"
            placeholder="Nome"
            required
          />

          <input
            onChange={({ target }) => setEmail(target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
          />

          <input
            onChange={({ target }) => setPassword(target.value)}
            value={password}
            type="password"
            placeholder="Senha"
            required
          />

          {error && <p>{error}</p>}

          <button
            onClick={() =>
              createUser(name, email, password, setError, setRedirect)
            }
          >
            CADASTRAR
          </button>
        </form>
      </main>
    </div>
  )
}
export default Register
