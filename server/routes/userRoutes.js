const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const isAuthenticated = require('../middleware/isAuthenticated.js');

router.route('/register').post(userController.register);
router.route("/login").post(userController.login);
router.route("/profile/:id").get(isAuthenticated, userController.profile);

module.exports = router;