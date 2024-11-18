const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": `"email" should be a type of 'text'`,
    "string.email": `"email" should be a valid email address`,
    "any.required": `"email" is a required field`
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"password" should be a type of 'text'`,
    "string.min": `"password" should have at least 6 characters`,
    "any.required": `"password" is a required field`
  }),
});

module.exports = { authSchema };
