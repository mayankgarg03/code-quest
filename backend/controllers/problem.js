const problemService = require('../services/problem');

exports.createProblem = async (req, res) => {
  try {
    const newProblem = await problemService.createProblem(req.body);
    res.status(201).json({
      message: 'Problem created successfully',
      problem: newProblem,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Error creating problem', error: err.message });
  }
};

exports.getAllProblems = async (req, res) => {
  try {
    const problems = await problemService.getAllProblems();
    res.status(200).json(problems);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching problems', error: err.message });
  }
};

exports.getProblemById = async (req, res) => {
  const { problemId } = req.params;

  try {
    const problem = await problemService.getProblemById(problemId);
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    res.status(200).json(problem);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching problem', error: err.message });
  }
};

exports.getProblemsByTopicId = async (req, res) => {
  const { topicId } = req.params;

  try {
    const problems = await problemService.getProblemsByTopicId(topicId);
    if (!problems || problems.length === 0) {
      return res
        .status(404)
        .json({ message: 'No problems found for this topic' });
    }
    res.status(200).json(problems);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching problems by topic',
      error: err.message,
    });
  }
};

exports.getProblemsBySubtopicId = async (req, res) => {
  const { subtopicId } = req.params;

  try {
    const problems = await problemService.getProblemsBySubtopicId(subtopicId);
    if (!problems || problems.length === 0) {
      return res
        .status(404)
        .json({ message: 'No problems found for this subtopic' });
    }
    res.status(200).json(problems);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching problems by subtopic',
      error: err.message,
    });
  }
};

exports.updateProblem = async (req, res) => {
  const { problemId } = req.params;

  try {
    const updatedProblem = await problemService.updateProblem(
      problemId,
      req.body
    );
    if (!updatedProblem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    res.status(200).json({
      message: 'Problem updated successfully',
      problem: updatedProblem,
    });
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Error updating problem', error: err.message });
  }
};

exports.deleteProblem = async (req, res) => {
  const { problemId } = req.params;

  try {
    const deletedProblem = await problemService.deleteProblem(problemId);
    if (!deletedProblem) {
      return res.status(404).json({ message: 'Problem not found' });
    }
    res.status(200).json({ message: 'Problem deleted successfully' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error deleting problem', error: err.message });
  }
};
