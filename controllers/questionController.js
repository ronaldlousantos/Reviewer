const Question = require('../models/Question');

module.exports.addQuestion = (req,res)=>{
	console.log("add question")
	let newQuestion = new Question({
		text: req.body.text,
		difficulty: req.body.difficulty,
		ansA: req.body.ansA,
		ansB: req.body.ansB,
		ansC: req.body.ansC,
		ansD: req.body.ansD,
		correctAns: req.body.correctAns,
		submittedBy: req.body.submittedBy
	})
	newQuestion.save()
	.then(question=> {
		res.send({message:"{" +question+"} confirmed added"})
	})
}

module.exports.getQuestion = (req,res)=>{
	Question.find({})
	.then(questions =>{
		res.send(questions)
	})
	.catch(err=>{
		res.send(err)
	})
}

module.exports.deleteQuestion = (req,res)=>{


}

module.exports.updateQuestion = (req,res)=>{


}

// module.exports=router