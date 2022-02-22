const Test = require('../models/Test');


module.exports.addTest = (req,res)=>{
	console.log(req.body.message);
	let newTest = new Test({
		message:req.body.message
	})
	newTest.save()
	.then(test=>{
		res.send({message:`${test.message} is saved`})
	})
	.catch(err =>{
		res.send(err)
	})

}

module.exports.getTest = (req,res) =>{

	Test.find({})
	.then(test=>{
		res.send(test)
	})
	.catch(err=>{
		res.send(err)
	})


}