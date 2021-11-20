import axios from 'axios'

import {
  isValidEmail,
  isValidName,
  isValidPassword
} from '../validations/validations'

const createUser = (name, email, password, setError, setRedirect) => {
  if (!isValidName(name)) {
    return setError('Por favor, digite um nome válido')
  }

  if (!isValidEmail(email)) {
    return setError('Email inválido')
  }

  if (!isValidPassword(password)) {
    return setError('A senha precisa conter entre 6 e 20 caracteres')
  }

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
