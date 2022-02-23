const User = require('../models/User')

module.exports.registerUser = (req,res)=>{
	console.log("register user");
	let newUser = new User({
		username: req.body.username,
		password: req.body.password,
	})

	newUser.save()
	.then( user=>{
		res.send(user)
	})
	.catch(err=>{
		res.send(err)
	})
}

module.exports.loginUser = (req,res)=>{

	User.findOne({username:req.body.username})
	.then(foundUser =>{
		if(foundUser === null){
			res.send({err: "User not found"})
		}
		else {
			if(foundUser.password === req.body.password){
				res.send({ message:"logged in"})
			}
			else {
				res.send({err: "Password is incorrect"})
			}
		}
	})
	.catch(error=>{
		res.send(error)
	})

}

