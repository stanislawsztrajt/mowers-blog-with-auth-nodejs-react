const express = require('express')
const userController = require('../controllers/user')
const authController = require('../controllers/auth')
const userServices = require('../services/user')

const router = express.Router()

router.get('/users', userController.getUsers)
router.post('/users', userServices.hashPassword ,userController.createUser)
router.get('/users/:id', userController.getUser)
router.put('/users/:id', userServices.verifyToken, userServices.isCorrectUser, userServices.hashPassword, userController.updateUser)
router.delete('/users/:id', userServices.verifyToken, userServices.isCorrectUser ,userController.deleteUser)

router.post('/auth/sign-in', authController.signIn)

module.exports = router