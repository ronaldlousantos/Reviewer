const Score = require('../models/Score');
const User = require('../models/User')

module.exports.addScore = (req,res)=>{
	console.log("inside add score")
	let newScore = new Score({
		userId: req.body.userId,
		questionId:req.body.questionId,
		tally:req.body.tally,
		totalScore:req.body.totalScore,
		isCompleted:req.body.isCompleted	
	})

	// console.log(newScore);

	newScore.save()
	.then(score=>{
		res.send({savedScore: score.userId})
	})
	.catch(err=>{
		res.send(err)
	})
}


module.exports.getScores = (req,res)=>{
	Score.find({userId:req.params.id})
	.then(score =>{
		res.send(score)
	})
	.catch(err=>{
		res.send(err)
	})
}

