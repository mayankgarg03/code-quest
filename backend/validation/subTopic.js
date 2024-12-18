const Joi = require('joi');

const createSubtopicSchema = Joi.object({
  topicId: Joi.string().required().messages({
    'string.empty': 'Topic ID is required',
    'any.required': 'Topic ID is required',
  }),
  name: Joi.string().required().messages({
    'string.empty': 'Subtopic name is required',
    'any.required': 'Subtopic name is required',
  }),
  description: Joi.string().optional().messages({
    'string.empty': 'Description cannot be empty',
  }),
});

module.exports = { createSubtopicSchema };
