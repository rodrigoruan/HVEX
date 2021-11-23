const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/usersController');
const userValidations = require('../middlewares/validateUser');

router.post('/login', userValidations.validateLoginData, userControllers.login);
router.post('/create', userValidations.validateNewUserData, userControllers.create);

module.exports = router;
