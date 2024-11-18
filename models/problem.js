const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: String, enum: ['Easy', 'Medium', 'Tough'], required: true },
    description: { type: String },
    tutorialLink: { type: String },
    leetcodeLink: { type: String },
    articleLink: { type: String },

    topicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Topic',
      required: true,
    },
    subtopicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subtopic',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Problem', problemSchema);
