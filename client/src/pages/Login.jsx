import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

import HVEXLOGO from '../imgs/logo.svg'

import '../css/Login.css'

function Login () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [redirect, setRedirect] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const username = localStorage.getItem('user_logged')
    if (username) setRedirect(true)
  }, [])

  const fetchApiAndLoginUser = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/login', {
        email,
        password
      })
      .then(({ data }) => {
        setRedirect(true)
        localStorage.setItem('user_logged', data.name)
      })
      .catch(() => setError('Usuário ou senha incorretos'))
  }

  if (redirect) return <Redirect to="/home" />

  return (
    <div className="login">
      <main className="login-main">
        <div>
          <img src={HVEXLOGO} alt="HVEX logo" />
        </div>

        <form onSubmit={fetchApiAndLoginUser} className="login-form">
          <label>
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </label>

          <label>
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="Senha"
              required
            />
          </label>

          {error && <p className="login-error">{error}</p>}

          <button>LOGIN</button>
        </form>

        <Link className="login-register" to="/register">
          REGISTRAR
        </Link>
      </main>
    </div>
  )
}

export default Login
