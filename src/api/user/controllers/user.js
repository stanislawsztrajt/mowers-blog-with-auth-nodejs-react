const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const constants = require('../../../constants')


const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const createUser = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, constants.saltRounds);

    req.body.password = hashedPassword
    console.log(hashedPassword)
    
    const user = new User(req.body);
    const newUser = await user.save()
    res.status(200).json(newUser)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const updateUser = async (req, res) => {
  console.log(req.token);
  const id = jwt.verify(req.token, process.env.JWT_SECRET)
  console.log(id);
  
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndUpdate(_id, req.body)
    const updatedUser = Object.assign(user, req.body)
    
    res.status(200).json(updatedUser)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findByIdAndDelete(_id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
}