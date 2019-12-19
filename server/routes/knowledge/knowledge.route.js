const knowledgeController = require('../../controllers/knowledge/knowledge.controller');

const express = require('express');
const router = express.Router();

router.post('/createKnowledge', knowledgeController.createKnowledge);

module.exports = router;
