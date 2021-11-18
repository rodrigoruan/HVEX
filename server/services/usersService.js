const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const models = require('../models/usersModel');

const { SECRET } = process.env;

const login = async (email, password) => {
  const error = { code: 400, error: 'Email ou senha incorretos' };

  const user = await models.findUserByEmail(email);

  if (!user) {
    return error;
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return error;
  }

  const { name } = await models.login(email, password);

  const token = jwt.sign({ data: { name, email } }, SECRET);

  return { token, name };
};

const create = async (email, name, password) => {
  const error = { code: 409, error: 'Email em uso' };

  const emailAlreadyRegistered = await models.findUserByEmail(email);

  if (emailAlreadyRegistered) {
    return error;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const response = await models.create(email, name, hashedPassword);
  return response;
};

module.exports = { login, create };
