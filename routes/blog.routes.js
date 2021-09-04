const articlesController = require('../controllers/blog/articles.controller');
const commentsController = require('../controllers/blog/comments.controller');

const express = require('express');
const router = express.Router();

const rateLimit = require('express-rate-limit');
const blogLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})


router.post('/article', blogLimiter, articlesController.createArticle);
router.delete('/article', blogLimiter, articlesController.deleteArticle);
router.put('/article', blogLimiter, articlesController.updateArticle);
router.get('/articles', articlesController.fetchAllArticles);

router.get('/comment', commentsController.fetchComments);
router.post('/comment', blogLimiter, commentsController.createComment);
router.delete('/comment', blogLimiter, commentsController.deleteComment);

module.exports = router;