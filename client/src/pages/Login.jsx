import React from 'react'

import HVEXLOGO from '../imgs/logo.svg'

import '../css/Login.css'

function Login () {
  return (
    <div className="login-container">
      <main className="login-container__main">
        <div>
          <img src={HVEXLOGO} />
        </div>

        <form className="login-container__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
        </form>

        <div className="login-container__register">
          <button>Registrar</button>
        </div>
      </main>
    </div>
  )
}

export default Login
