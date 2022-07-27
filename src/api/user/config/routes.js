const express = require('express')
const userController = require('../controllers/user')
const authController = require('../controllers/auth')
const verifyToken = require('../../../helpers/verify-token')

const router = express.Router()

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.get('/:id', userController.getUser)
router.put('/:id', verifyToken, userController.updateUser)
router.delete('/:id', verifyToken, userController.deleteUser)

router.post('/sign-in', authController.signIn)

module.exports = router