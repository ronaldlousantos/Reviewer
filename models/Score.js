const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
	
	userId: {
		type: mongoose.Schema.Types.ObjectId, ref: "User"
		},
	dateScored:{
		type:Date,
		default:Date.now
		},
	questionId:[{
		type: mongoose.Schema.Types.ObjectId, ref: "Question"
		}],
	tally:[{type:Boolean}],
	totalScore:[{type:Number}],
	isCompleted:{
		type:Boolean,
		require:[true,""],
		default:false
		}



})

module.exports = mongoose.model('Score', scoreSchema);