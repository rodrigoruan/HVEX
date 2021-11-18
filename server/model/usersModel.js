const connection = require('./connection');

const login = async (email, password) => {
  const [user] = await connection.execute(
    'SELECT name FROM users WHERE email = ? AND password = ?',
    [email, password],
  );

  return user;
};

module.exports = { login };
