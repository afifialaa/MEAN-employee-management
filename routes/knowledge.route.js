const knowledgeController = require('../controllers/knowledge.controller');

const express = require('express');
const router = express.Router();

router.post('/createKnowledge', knowledgeController.createKnowledge);
router.get('/fetchKnowledge', knowledgeController.fetchKnowledge);

module.exports = router;
