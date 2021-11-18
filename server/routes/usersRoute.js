const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/usersController');
const middlewares = require('../middlewares/validateUser');

router.post('/login', middlewares.validateLoginData, userControllers.login);
router.post('/create', middlewares.validateNewUserData, userControllers.create);

module.exports = router;
