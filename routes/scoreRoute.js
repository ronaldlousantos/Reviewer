const router = require('express').Router()
 const { addScore, getScores } = require('../controllers/scoreController')

router.post('/', addScore);
router.get('/:id', getScores);

module.exports = router