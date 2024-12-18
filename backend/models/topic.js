const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const topicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Topic', topicSchema);
