const Joi = require('joi');

const createTopicSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Topic name is required',
    'any.required': 'Topic name is required',
  }),
  description: Joi.string().optional().messages({
    'string.empty': 'Description cannot be empty',
  }),
});

module.exports = { createTopicSchema };
