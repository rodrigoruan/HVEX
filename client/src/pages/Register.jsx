import React from 'react'
import { Link } from 'react-router-dom'

import returnIcon from '../imgs/return.svg'

import '../css/Register.css'

function Register () {
  return (
    <div className="register-container">
      <Link to="/">
        <img src={returnIcon} alt="return button" />
      </Link>

      <div className="register-container__form">
        <h1>SIGN UP</h1>

        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="Password" />

        <button>Create account</button>
      </div>
    </div>
  )
}

export default Register
