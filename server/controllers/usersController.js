const services = require('../services/usersService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await services.login(email, password);
  res.status(200).json(response);
};

module.exports = { login };
