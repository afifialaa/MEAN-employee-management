const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entities = require('html-entities').XmlEntities;
const entities = new Entities();

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
}, {
	collection: 'knowledge'
});

KnowledgeSchema.pre('save', function (next) {
	let knowledge = this;

	// Encode html string
	knowledge.content = entities.encode(knowledge.content);
	next();
})

const Knowledge = mongoose.model('Knowledge', KnowledgeSchema);
module.exports = Knowledge;
