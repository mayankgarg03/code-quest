const topicService = require('../services/topic');

exports.createTopic = async (req, res) => {
  try {
    const newTopic = await topicService.createTopic(req.body);
    res.status(201).json({
      message: 'Topic created successfully',
      topic: newTopic,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error creating topic', error: err.message });
  }
};

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await topicService.getAllTopics();
    res.status(200).json(topics);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching topics', error: err.message });
  }
};

exports.getTopicById = async (req, res) => {
  const { topicId } = req.params;
  try {
    const topic = await topicService.getTopicById(topicId);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.status(200).json(topic);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching topic', error: err.message });
  }
};
