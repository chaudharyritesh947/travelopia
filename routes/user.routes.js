const express = require('express');
const router = express.Router();
const {API_USER_CREATE, API_LOGIN} = require('../helper/routes');

const UserController = require('../controllers/user.controller')
// Route: GET /users
router.post(API_USER_CREATE, UserController.saveUser);
router.post(API_LOGIN, UserController.login);

module.exports = router;