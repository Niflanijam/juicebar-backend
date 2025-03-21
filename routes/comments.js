const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.route('/').get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;

  const newComment = new Comment({ name, comment });

  newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;