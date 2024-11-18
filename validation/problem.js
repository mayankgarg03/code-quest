const Joi = require('joi');
const mongoose = require('mongoose');

const objectId = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message('Invalid MongoDB ObjectId');
  }
  return value;
});

const createProblemSchema = Joi.object({
  name: Joi.string().required(),
  level: Joi.string().valid('Easy', 'Medium', 'Tough').required(),
  description: Joi.string().optional(),
  tutorialLink: Joi.string().uri().optional(),
  leetcodeLink: Joi.string().uri().optional(),
  articleLink: Joi.string().uri().optional(),
  topicId: objectId.required(),
  subtopicId: objectId.required(),
});

const updateProblemSchema = Joi.object({
  name: Joi.string().optional(),
  level: Joi.string().valid('Easy', 'Medium', 'Tough').optional(),
  description: Joi.string().optional(),
  tutorialLink: Joi.string().uri().optional(),
  leetcodeLink: Joi.string().uri().optional(),
  articleLink: Joi.string().uri().optional(),
  topicId: objectId.optional(),
  subtopicId: objectId.optional(),
});

module.exports = { createProblemSchema, updateProblemSchema };
