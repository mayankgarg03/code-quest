const Problem = require('../models/Problem');

const createProblem = async (data) => {
  const newProblem = new Problem(data);
  return await newProblem.save();
};

const getAllProblems = async () => {
  return await Problem.find()
    .populate('topicId', 'name')
    .populate('subtopicId', 'name');
};

const getProblemById = async (problemId) => {
  return await Problem.findById(problemId)
    .populate('topicId', 'name')
    .populate('subtopicId', 'name');
};

const getProblemsByTopicId = async (topicId) => {
  return await Problem.find({ topicId }).populate('subtopicId', 'name');
};

const getProblemsBySubtopicId = async (subtopicId) => {
  return await Problem.find({ subtopicId }).populate('topicId', 'name');
};

const updateProblem = async (problemId, data) => {
  return await Problem.findByIdAndUpdate(problemId, data, { new: true })
    .populate('topicId', 'name')
    .populate('subtopicId', 'name');
};

const deleteProblem = async (problemId) => {
  return await Problem.findByIdAndDelete(problemId);
};

module.exports = {
  createProblem,
  getAllProblems,
  getProblemById,
  getProblemsByTopicId,
  getProblemsBySubtopicId,
  updateProblem,
  deleteProblem,
};
