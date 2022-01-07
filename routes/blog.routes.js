const blog = require('../controllers/blog.controller');

const express = require('express');
const router = express.Router();

const rateLimit = require('express-rate-limit');
const blogLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 4, // Limit each IP to 4 requests
})


router.post('/article',  blog.createArticle);
router.get('/article',  blog.readArticle);
router.delete('/article', blogLimiter, blog.deleteArticle);
router.put('/article/{article_id}', blogLimiter, blog.updateArticle);
router.get('/articles', blog.readAll);
router.get('/user/articles', blog.readUserArticles);

router.post('/comment', blog.createComment)


module.exports = router;
