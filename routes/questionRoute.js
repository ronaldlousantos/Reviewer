const router = require('express').Router()
const { getQuestion,
	 	addQuestion,
  		deleteQuestion 
	} = require('../controllers/questionController');

router.get('/', getQuestion);

router.post('/', addQuestion);

// router.delete('/:id', deleteQuestion);

module.exports = router