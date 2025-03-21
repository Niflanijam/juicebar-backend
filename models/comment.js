
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
}, {
  timestamps: true,
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;






