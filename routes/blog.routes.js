const articlesController = require('../controllers/blog/articles.controller');
const commentsController = require('../controllers/blog/comments.controller');

const express = require('express');
const router = express.Router();

router.post('/article', articlesController.createArticle);
router.delete('/article', articlesController.deleteArticle);
router.put('/article', articlesController.updateArticle);
router.get('/articles', articlesController.fetchAllArticles);

router.get('/comment', commentsController.fetchComments);
router.post('/comment', commentsController.createComment);
router.delete('/comment', commentsController.deleteComment);

module.exports = router;