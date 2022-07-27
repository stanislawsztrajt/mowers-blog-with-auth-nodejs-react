const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    minLength: 6,
    maxLength: 30,
    required: true
  },
  email: {
    type: String,
    unique: true,
    minLength: 6,
    maxLength: 30,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30,
    private: true
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User