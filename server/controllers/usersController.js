const services = require('../services/usersService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await services.login(email, password);

  if (response.error) {
    const { code, error } = response;
    return res.status(code).json({ error });
  }

  res.cookie('token', response, { maxAge: 10, httpOnly: true, secure: true });
  res.status(200).json({ message: 'User logged successfully' });
};

const create = async (req, res) => {
  const { email, name, password } = req.body;
  const response = await services.create(email, name, password);

  if (response.error) {
    const { code, error } = response;
    return res.status(code).json({ error });
  }

  res.status(200).json(response);
};

module.exports = { login, create };
