const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// creating schema for the member
const memberSchema = new mongoose.Schema({
	username: {
		type: String,
		reqiured: true,
		default: ''	},
	email: {
		type: String,
		required: true,
		default: ''	},
	password: {
		type: String,
		required: true,
		default: ''	},
	isDeleted: {
		type: Boolean	},
	signUpDate: {
		type: Date }}
)

//Document middleware for hashing
memberSchema.methods.generateHash = async function(password) {
	const hashedPassword = await new Promise((resolve, reject) => {
		bcrypt.hash(password, 8)
		.then((hashp) => {
			resolve (hashp)})
		.catch(err => reject(err))	
	})
	return hashedPassword
}


//Schema method for comparing password
memberSchema.methods.validPassword = async function(password) {
	const matchPassword = await new Promise((resolve, reject) => {
		bcrypt.compare(password, this.password)
		.then((hashp) => {
			resolve (hashp)})
		.catch(err => reject(err))	
	})
	return matchPassword
}

//compiling the member schema to model and exporting
const SiteMember = mongoose.model("Member", memberSchema);
module.exports = SiteMember;

