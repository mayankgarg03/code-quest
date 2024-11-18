const express = require('express');
const topicController = require('../controllers/topic');
const validate = require('../middlewares/validation');
const { createTopicSchema } = require('../validation/topic');

const router = express.Router();

router.post('/', validate(createTopicSchema), topicController.createTopic);

router.get('/', topicController.getAllTopics);

router.get('/:topicId', topicController.getTopicById);

module.exports = router;
