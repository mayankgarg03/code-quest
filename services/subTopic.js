const Subtopic = require('../models/Subtopic');

const createSubtopic = async (data) => {
  const newSubtopic = new Subtopic(data);
  return await newSubtopic.save();
};

const getAllSubtopics = async () => {
  return await Subtopic.find().populate('topicId', 'name');
};

const getSubtopicsByTopicId = async (topicId) => {
  return await Subtopic.find({ topicId }).populate(
    'topicId',
    'name description'
  );
};

module.exports = {
  createSubtopic,
  getAllSubtopics,
  getSubtopicsByTopicId,
};
