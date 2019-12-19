function createKnowledge(req, res) {
	console.log('creating knowledge at the server');
	let knowledgeObj = {
		title: req.body.title,
		tags: req.body.tags,
		description: req.body.description,
		content: req.body.editor
	}

	console.log(knowledgeObj);
	res.send();
}

module.exports = {
	createKnowledge
}
