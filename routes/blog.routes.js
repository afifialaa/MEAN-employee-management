const articleController = require('../controllers/articles.controller');

const express = require('express');
const router = express.Router();

router.post('/article', articleController.createArticle);
router.delete('/article', articleController.deleteArticle);
router.put('/article', articleController.updateArticle);
router.get('/article', articleController.fetchArticles);

module.exports = router;