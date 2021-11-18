const Joi = require('joi');

const emailPattern = /^\w+@\w+\.\w+$/;

const errorMessages = {
  name: 'O nome deve conter mais de 2 caracteres',
  email: {
    create: 'Email inválido',
    login: 'Dados inválidos',
  },
  password: {
    create: 'A senha deve conter entre 6 e 20 caracteres',
    login: 'Dados inválidos',
  },
};

const schemaCreateUser = Joi.object({
  name: Joi.string()
    .min(2)
    .required()
    .label(errorMessages.name),
  email: Joi.string()
    .regex(emailPattern)
    .required()
    .label(errorMessages.email.create),
  password: Joi
    .string()
    .min(6)
    .max(20)
    .required()
    .label(errorMessages.password.create),
});

const schemaLoginUser = Joi.object({
  email: Joi
    .string()
    .regex(emailPattern)
    .required()
    .label(errorMessages.email.login),
  password: Joi
    .string()
    .min(6)
    .required()
    .label(errorMessages.password.login),
});

module.exports = {
  schemaCreateUser,
  schemaLoginUser,
};
