const Topic = require('../models/Topic');

const createTopic = async (data) => {
  const newTopic = new Topic(data);
  return await newTopic.save();
};

const getAllTopics = async () => {
  return await Topic.find();
};

const getTopicById = async (topicId) => {
  return await Topic.findById(topicId);
};

module.exports = {
  createTopic,
  getAllTopics,
  getTopicById,
};
