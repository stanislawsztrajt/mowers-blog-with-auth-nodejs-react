const express = require('express')
const mowerController = require('../controllers/mower')
const mowerServices = require('../services/mower')
const userServices = require('../../user/services/user')

const router = express.Router()

router.get('/', mowerController.get)
router.post('/', userServices.verifyToken, mowerController.create)
router.get('/:id', mowerController.getAll)
router.put('/:id', userServices.verifyToken, mowerServices.isMowerOwner ,mowerController.update)
router.delete('/:id', userServices.verifyToken, mowerServices.isMowerOwner ,mowerController.remove)

module.exports = router