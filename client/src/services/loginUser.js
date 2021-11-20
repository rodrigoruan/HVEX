import axios from 'axios'

import errorMessages from '../validations/errorMessages'
import { isValidEmail, isValidPassword } from '../validations/validations'

const loginUser = (email, password, setError, setRedirect) => {
  if (!isValidEmail(email) || !isValidPassword(password)) {
    return setError(errorMessages.loginDefault)
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
