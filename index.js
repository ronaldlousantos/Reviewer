const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.listen(port, ()=>{
	console.log('Server running on port '+ port)
})