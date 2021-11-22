const connection = require('./connection');

const findUserByEmail = async (email) => {
  const [user] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email],
  );

  return user[0];
};

const create = async (email, name, password) => {
  const [user] = await connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
  );

  return user;
};

module.exports = { create, findUserByEmail };
