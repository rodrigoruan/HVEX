// const bcrypt = require('bcrypt');
const models = require('../models/usersModel');

const login = async (email, password) => {
  const response = await models.login(email, password);
  return response;
};

module.exports = { login };
