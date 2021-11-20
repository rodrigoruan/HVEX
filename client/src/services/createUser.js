import axios from 'axios'

import errorMessages from '../validations/errorMessages'
import {
  isValidEmail,
  isValidName,
  isValidPassword
} from '../validations/validations'

const createUser = (name, email, password, setError, setRedirect) => {
  if (!isValidName(name)) return setError(errorMessages.name)

  if (!isValidEmail(email)) return setError(errorMessages.email)

  if (!isValidPassword(password)) return setError(errorMessages.password)

  axios
    .post('http://localhost:5000/create', {
      email,
      name,
      password
    })
    .then(() => {
      setRedirect(true)
    })
    .catch(() => setError('Email em uso.'))
}

export default createUser
