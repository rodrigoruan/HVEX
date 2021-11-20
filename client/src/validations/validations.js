module.exports = {
  isValidEmail: (email) => /^\w+@\w+\.\w+$/.test(email),
  isValidPassword: (password) => /^.{6,20}$/.test(password),
  isValidName: (name) => /^[A-Z\s]+$/i.test(name)
}
