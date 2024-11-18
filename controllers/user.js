const Joi = require('joi');
const { toggleProblemCompletionService } = require('../services/user');

const userIdSchema = Joi.string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .required();

const toggleProblemCompletion = async (req, res) => {
  try {
    const { error: queryError } = userIdSchema.validate(req.params.userId);
    if (queryError) {
      return res
        .status(400)
        .json({ message: 'Invalid userId', details: queryError.details });
    }

    const { userId } = req.params;
    const { problemId } = req.body;

    const result = await toggleProblemCompletionService(userId, problemId);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error toggling problem completion:', error);
    const statusCode =
      error.message === 'Problem not found' ||
      error.message === 'User not found'
        ? 404
        : 500;
    res.status(statusCode).json({ message: error.message });
  }
};

module.exports = { toggleProblemCompletion };
