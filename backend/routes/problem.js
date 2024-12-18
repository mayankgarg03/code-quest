const express = require('express');
const problemController = require('../controllers/problem');
const validate = require('../middlewares/validation');
const {
  createProblemSchema,
  updateProblemSchema,
} = require('../validation/problem');

const router = express.Router();

router.post(
  '/',
  validate(createProblemSchema),
  problemController.createProblem
);

router.get('/', problemController.getAllProblems);

router.get('/:problemId', problemController.getProblemById);

router.get('/topic/:topicId', problemController.getProblemsByTopicId);

router.get('/subtopic/:subtopicId', problemController.getProblemsBySubtopicId);

router.put(
  '/:problemId',
  validate(updateProblemSchema),
  problemController.updateProblem
);

router.delete('/:problemId', problemController.deleteProblem);

module.exports = router;
