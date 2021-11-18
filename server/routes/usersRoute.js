const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/usersController');

router.post('/login', userControllers.login);

module.exports = router;
