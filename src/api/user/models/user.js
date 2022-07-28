const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    minLength: 3,
    maxLength: 30,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minLength: 3,
    maxLength: 30,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
    private: true
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User