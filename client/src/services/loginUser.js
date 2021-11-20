import axios from 'axios'

import { isValidEmail, isValidPassword } from '../validations/validations'

const loginUser = (email, password, setError, setRedirect) => {
  if (!isValidEmail(email) || !isValidPassword(password)) {
    return setError('Email ou senha no formato incorreto')
  }

  axios
    .post('http://localhost:5000/login', {
      email,
      password
    })
    .then((response) => {
      localStorage.setItem('user_logged', response.data.name)
      setRedirect(true)
    })
    .catch(() => setError('Email ou senha incorretos'))
}

export default loginUser
