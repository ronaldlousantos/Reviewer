const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	text: {
		type: String,
		require: [true, "Question text required"]
	},
	difficulty: {
		type: String,
		require: [true, "Difficulty type required"]
	},
	ansA: {
		type: String,
		require: [true, "Answer A text required"]
	},
	ansB: {
		type: String,
		require: [true, "Answer B text required"]
	},
	ansC: {
		type: String,
		require: [true, "Answer C text required"]
	},
	ansD: {
		type: String,
		require: [true, "Answer D text required"]
	},
	correctAns: {
		type: String,
		require: [true, "Correct answer required"]
	},
	submittedBy: {
		type: String
	}
})

module.exports = mongoose.model('Question', QuestionSchema)