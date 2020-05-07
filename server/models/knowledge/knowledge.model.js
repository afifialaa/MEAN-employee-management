const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const KnowledgeSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true
	}
},{
	collection: 'knowledge'
});

const Knowledge = mongoose.model('Knowledge', KnowledgeSchema);
module.exports = Knowledge;
