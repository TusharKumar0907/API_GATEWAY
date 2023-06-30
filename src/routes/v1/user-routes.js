const express = require('express');
const { UserController } = require('../../controllers');
const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.post('/role', UserController.addRoleToUser);

module.exports = router;