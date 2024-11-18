const express = require('express');
const authController = require('../controllers/auth');
const validate = require('../middlewares/validation');
const { authSchema } = require('../validation/auth');

const router = express.Router();

router.post('/signup', validate(authSchema), authController.signup);

router.post('/login', validate(authSchema), authController.login);

router.post('/logout', authController.logout);

module.exports = router;
