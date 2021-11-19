import axios from 'axios'

const loginUser = (email, password, setError, setRedirect) => {
  axios
    .post('http://localhost:5000/login', {
      email,
      password
    })
    .then((response) => {
      setError(false)
      setRedirect(true)
      localStorage.setItem('user_logged', response.data.name)
    })
    .catch(() => {
      setError(true)
    })
}

export default loginUser
