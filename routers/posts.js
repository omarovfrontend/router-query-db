const express = require('express');
const router = express.Router();
const { Post } = require('../db/models');

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.findAll({raw: true});
    res.render('posts', { posts });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
