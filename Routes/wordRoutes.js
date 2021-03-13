var express = require('express');
var router = express.Router();

var authenticateUser = require('../config/middlewares').authenticateJWT
var isSavedBy = require('../config/middlewares').isSavedBy
var Words = require('../Models/word.model');


router.post('/new', authenticateUser, function (req, res, next) {
	var {
		enteredWord,
		partOfSpeech,
		partOfSpeechSubCategory,
		connotation,
		root,
		languageOfOrigin,
		definition,
		example
	} = req.body;

	Words.findOne({
		enteredWord: enteredWord
	}, (err, word) => {
		if(err) {
			return res.send({
				err_msg: err })
		} else if(word){
				let savedByResult = isSavedBy(word.savedBy, req.currentUser.user)
				if(!savedByResult){
					word.savedBy.push(req.currentUser.user)
					word.save((err, result) => {
						if(err){
							return res.send({
								success: false,
								err_msg: err
							})
						}	return res.send({ success: result })
					})
				} else return res.send({
					success: false,
					err_msg: 'Word already saved'	})
		} else if (!err) {
			//creating new word document in the database
			const currentUser = req.currentUser.user
			const newWord = new Words();
			newWord.enteredWord = newWord.capitalize(enteredWord);
			newWord.partOfSpeech = partOfSpeech;
			newWord.partOfSpeechSubCategory = partOfSpeechSubCategory;
			newWord.connotation = connotation;
			newWord.root = root;
			newWord.languageOfOrigin = languageOfOrigin;
			newWord.definition = definition;
			newWord.example.push(example);
			newWord.savedBy.push(currentUser)
			newWord.save((err, result) => {
				if (err) {
					return res.send({
						success: false,
						err_msg: err });
				}
				return res.send({
					success: true,
					word: result,
					user: currentUser })})}})})

router.get('/allwords', authenticateUser, function(req, res, next){
	Words.find({ savedBy: req.currentUser.user })
	.populate('savedBy')
	.exec((err, words) => {
		if(err){
			return res.send({
				success: false,
				err_msg: err
			})}
		else if(words){
			return res.send({
				success: true,
				words: words
			}) }})})


router.post('/viewwordsbyletter', authenticateUser, function(req, res, next){

	var { letter } = req.body
	letter = letter.trim()
	var toMatch = `^${letter}`

	Words.find({ savedBy: req.currentUser.user }, (err, docs) => {
		if(err){
			return res.send({
				success: false,
				err_msg: err }) 
		}else {
			var enteredWordArray = []
			docs.forEach(word => {
				if(word.enteredWord.match(toMatch)){
					enteredWordArray.push(word)}
				else return null })
			res.send({
				success: true,
				obj: enteredWordArray.sort() })}})
			})			

module.exports = router;
