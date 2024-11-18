const Joi = require('joi');

const problemIdSchema = Joi.object({
  problemId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'string.base': `"problemId" should be a type of 'text'`,
      'string.pattern.base': `"problemId" should be a valid MongoDB ObjectId`,
      'any.required': `"problemId" is a required field`,
    }),
});

module.exports = { problemIdSchema };
