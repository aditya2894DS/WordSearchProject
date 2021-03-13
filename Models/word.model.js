const mongoose = require('mongoose');

// creating schema for entered words
const wordSchema = new mongoose.Schema({
	enteredWord: {
		type: String,
		required: true,
		default: ''	},
	partOfSpeech: {
		type: String,
		required: true,
		default: ''	},
	partOfSpeechSubCategory: {
		type: String,
		required: true,
		default: ''	},
	connotation: {
		type: String,
		required: true,
		default: ''	},
	root: {
		type: String,
		required: true,
		default: ''	},
	languageOfOrigin: {
		type: String,
		required: true,
		default: ''	},
	definition: {
		type: String,
		required: true,
		default: ''	},
	example: [{
		type: String,
		default: ''	}],
	savedBy: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Member' }]	
	}
)

wordSchema.methods.capitalize = function(word){
	const lowerCased = word.toLowerCase()
	return word.charAt(0).toUpperCase() + lowerCased.slice(1)
}

//compiling the member schema to model and exporting
const EnteredWord = mongoose.model("Word", wordSchema)
module.exports = EnteredWord;