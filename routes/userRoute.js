const router = require('express').Router()
const { registerUser, loginUser} = require('../controllers/userController')

router.post('/register', registerUser )

router.post('/login', loginUser )

// router.get('.', )



module.exports = router
