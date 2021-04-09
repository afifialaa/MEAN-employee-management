const articleController = require('../controllers/articles.controller');
const commentController = require('../controllers/comments.controller');

const express = require('express');
const router = express.Router();

router.post('/article', articleController.createArticle);
router.delete('/article', articleController.deleteArticle);
router.put('/article', articleController.updateArticle);
router.get('/article', articleController.fetchArticles);

router.get('/comment', commentController.fetchComments);
router.post('/comment', commentController.createComment);
router.delete('/comment', commentController.deleteComment);

module.exports = router;