import React from 'react'
import PropTypes from 'prop-types'

import HVEXLOGO from '../imgs/logo.svg'

import '../css/Header.css'

function Header ({ changeRedirect }) {
  const logoutUser = () => {
    localStorage.removeItem('user_logged')
    changeRedirect(true)
  }

  return (
    <header className="header">
      <img src={HVEXLOGO} alt="HVEX LOGO" />

      <div className="header-logout">
        <button onClick={logoutUser}>Sair</button>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  'changeRedirect': PropTypes.func.isRequired
}
