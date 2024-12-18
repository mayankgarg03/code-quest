const express = require('express');
const subtopicController = require('../controllers/subTopic');
const validate = require('../middlewares/validation');
const { createSubtopicSchema } = require('../validation/subTopic');
const router = express.Router();

router.post(
  '/',
  validate(createSubtopicSchema),
  subtopicController.createSubtopic
);

router.get('/', subtopicController.getAllSubtopics);

router.get('/topic/:topicId', subtopicController.getSubtopicsByTopicId);

module.exports = router;
