const { schemaCreateUser, schemaLoginUser } = require('./schemas');

const errorMessage = (error) => ({ error });

const validateLoginData = (req, res, next) => {
  const { error } = schemaLoginUser.validate(req.body);
  if (error) {
    return res.status(400).json(errorMessage(error.details[0].context.label));
  }
  next();
};

const validateNewUserData = (req, res, next) => {
  const { error } = schemaCreateUser.validate(req.body);
  if (error) {
    return res.status(400).json(errorMessage(error.details[0].context.label));
  }
  next();
};

module.exports = {
  validateNewUserData,
  validateLoginData,
};
