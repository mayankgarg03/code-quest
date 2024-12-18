const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLogin: { type: Date },
    completedTopics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }],
    completedSubTopics: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'SubTopic' },
    ],
    completedProblems: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
