const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
	dateScored:{},
	questionId:[{
		type: mongoose.Schema.Types.ObjectId, ref: "Question"

	}],

	userId: {
		type: mongoose.Schema.Types.ObjectId, ref: "User"
	}



})