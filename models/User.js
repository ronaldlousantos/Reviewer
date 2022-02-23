const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	username: {
        type: String,
        required: [ true, "username required"]
    },
    password: {
        type: String,
        required: [ true, "Password required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', UserSchema)