const Knowledge = require('../models/knowledge.model');

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

function createKnowledge(req, res) {
	let knowledgeObj = {
		// Fetch email from token i.e (knowledge creator)
		email: req.body.email,
		title: req.body.title,
		content: req.body.content
	}

	console.log(knowledgeObj);
	let knowledge = new Knowledge(knowledgeObj);

	knowledge.save((err, knowledge) => {
		if (err) {
			console.log(err);
			return res.json({err: 'Failed to save post.'});
		}
		return res.json({msg: 'Post was created.'});
	})
}

function seekKnowledge(req, res){
}

function fetchKnowledge(req, res){
	Knowledge.find({}, function(err, result){
		if(err){
			console.log(err);
			return res.json({err: 'Failed to fetch knowledge'});
		}else{
			result[1].content = entities.decode(result[1].content);
			return res.json({knowledge:result});
		}
	})
}

module.exports = {
	createKnowledge,
	fetchKnowledge
}
