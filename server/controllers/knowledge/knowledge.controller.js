const Knowledge = require('../../models/knowledge/knowledge.model');

function createKnowledge(req, res) {
	let knowledgeObj = {
		// Fetch email from token i.e (knowledge creator creator)
		email: req.body.email,
		title: req.body.title,
		content: req.body.content
	}

	let knowledge = new Knowledge(knowledgeObj);
	knowledge.save(function (err, knowledge) {
		let msg = "";
		if (err) {
			console.log(err);
			msg = 'failed to save id db';
		}
		msg = 'knowledge was created';
		res.json({msg});
	})
}

function seekKnowledge(req, res){
}

function displayKnowledge(req, res){
	Knowledge.find({}, function(err, result){
		if(err){
			console.log(err);
		}else{
			res.json(result);
		}
	})

}

// Validate knowledge input
function validateKnowledge(knowledgeObj) {

	if (knowledge.title == "") {
		return false;
	}
	if (knowledgeObj.tags.length == 0) {
		return false;
	}

	if (knowledgeObj.content == "") {
		return false;
	}
	return true;
}

module.exports = {
	createKnowledge
}
