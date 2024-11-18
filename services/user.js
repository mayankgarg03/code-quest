const User = require('../models/user');
const Problem = require('../models/Problem');

const toggleProblemCompletionService = async (userId, problemId) => {
  const problemExists = await Problem.findById(problemId);
  if (!problemExists) {
    throw new Error('Problem not found');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  const isCompleted = user.completedProblems.includes(problemId);

  if (isCompleted) {
    user.completedProblems = user.completedProblems.filter(
      (id) => id.toString() !== problemId
    );
  } else {
    user.completedProblems.push(problemId);
  }

  await user.save();

  return {
    message: isCompleted
      ? 'Problem marked as incomplete'
      : 'Problem marked as completed',
    completedProblems: user.completedProblems,
  };
};

module.exports = { toggleProblemCompletionService };
