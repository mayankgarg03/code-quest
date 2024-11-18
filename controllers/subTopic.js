const subtopicService = require('../services/subTopic');

exports.createSubtopic = async (req, res) => {
  try {
    const newSubtopic = await subtopicService.createSubtopic(req.body);
    res.status(201).json({
      message: 'Subtopic created successfully',
      subtopic: newSubtopic,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error creating subtopic', error: err.message });
  }
};

exports.getAllSubtopics = async (req, res) => {
  try {
    const subtopics = await subtopicService.getAllSubtopics();
    res.status(200).json(subtopics);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching subtopics', error: err.message });
  }
};

exports.getSubtopicsByTopicId = async (req, res) => {
  const { topicId } = req.params;

  try {
    const subtopics = await subtopicService.getSubtopicsByTopicId(topicId);
    if (!subtopics || subtopics.length === 0) {
      return res
        .status(404)
        .json({ message: 'No subtopics found for this topic' });
    }
    res.status(200).json(subtopics);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching subtopics', error: err.message });
  }
};
