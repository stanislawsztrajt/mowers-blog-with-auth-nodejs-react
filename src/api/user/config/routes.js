const express = require('express')
const userController = require('../controllers/user')
const authController = require('../controllers/auth')
const userServices = require('../services/user')

const router = express.Router()

router.get('/users', userController.get)
router.post('/users', userServices.hashPassword ,userController.create)
router.get('/users/:id', userController.getAll)
router.put('/users/:id', userServices.verifyToken, userServices.isCorrectUser, userServices.hashPassword, userController.update)
router.delete('/users/:id', userServices.verifyToken, userServices.isCorrectUser ,userController.remove)

router.post('/auth/sign-in', authController.signIn)

module.exports = router