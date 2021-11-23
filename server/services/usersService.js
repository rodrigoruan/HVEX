const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersModel = require('../models/usersModel');

const { SECRET } = process.env;

const login = async (email, password) => {
  const error = { code: 400, error: 'Email ou senha incorretos' };

  const user = await usersModel.findByEmail(email);

  if (!user) {
    return error;
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return error;
  }

  const { name } = user;

  const token = jwt.sign({ user: { name, email } }, SECRET);

  return { token, name };
};

const create = async (email, name, password) => {
  const error = { code: 409, error: 'Email já utilizado' };

  const emailAlreadyRegistered = await usersModel.findByEmail(email);

  if (emailAlreadyRegistered) {
    return error;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const response = await usersModel.create(email, name, hashedPassword);
  return response;
};

module.exports = { login, create };
