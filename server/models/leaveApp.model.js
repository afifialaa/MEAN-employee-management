const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveAppSchema = new Schema({
	  email: {
		    type: String,
		    required: true
	  },
	  reason: {
		    type: String,
		    required: true
	  },
	  form: {
		    type: Date,
		    required: true
	  },
	  to: {
		    type: Date,
		    required: true
	  }

})

const LeaveApp = mongoose.model('LeaveApp', LeaveAppSchema);

module.exports = LeaveApp;


