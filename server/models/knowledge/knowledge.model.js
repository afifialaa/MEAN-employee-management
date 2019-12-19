const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const KnowledgeSchema = new Schema({
		title: {
				type:String,
				required: true,
				unique: true
		},

		tags: {
				type: [String],
				required: true
		},
		description: {
				type: String,
				required: true
		}
});

const Knowledge = mongoose.model('Knowledge', KnowledgeSchema);
module.exports = Knowledge;
