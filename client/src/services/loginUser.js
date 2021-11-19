import axios from 'axios'

const loginUser = (email, password, setError) => {
  axios
    .post('http://localhost:5000/login', {
      email,
      password
    })
    .then((response) => {
      setError(false)
      console.log(response)
    })
    .catch(() => {
      setError(true)
    })
}

export default loginUser
