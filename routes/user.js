const express = require('express');
const { toggleProblemCompletion } = require('../controllers/user');
const { problemIdSchema } = require('../validation/user');
const validate = require('../middlewares/validation');
const authenticate = require('../middlewares/auth');

const router = express.Router();

router.post(
  '/toggle-completion/:userId',
  authenticate,
  validate(problemIdSchema),
  toggleProblemCompletion
);

module.exports = router;
