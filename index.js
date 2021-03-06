const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Schema = mongoose.Schema;
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))





mongoose.connect('mongodb://localhost:27017/reviewerdb',{useNewUrlParser:true, useUnifiedTopology:true})
	.then(()=>{
		console.log("Connection Open")
	}).catch( err => {
		console.log("error: ")
		console.log(err)
	})

let db = mongoose.connection;

app.use('/api/user', require('./routes/userRoute'))
app.use('/api/scores', require('./routes/scoreRoute'))
app.use('/api/questions', require('./routes/questionRoute'))
app.use('/api/tester', require('./routes/testRoute'))
// const testSchema = new mongoose.Schema({
// 	name: String

// })
// const Test = mongoose.model('Test', testSchema);
// let thetester = new Test({
// 	name: "This is just for the database to persist"
// })
// thetester.save();




	
app.listen(port, ()=>{
	console.log('Server running on port '+ port)
})