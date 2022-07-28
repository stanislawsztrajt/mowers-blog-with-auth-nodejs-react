const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  engineType: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  power: {
    type: String,
    minLength: 0,
    maxLength: 30,
  },
  engineCapacity: {
    type: String,
    minLength: 3,
    maxLength: 50,
  },
  name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true
  },
  model: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true
  },
  imageURL: {
    type: String,
    minLength: 3,
    maxLength: 1000,
  },
  user_id: {
    type: String,
    minLength: 3,
    maxLength: 500,
    required: true
  }
})

const Mower = mongoose.model('Mower', userSchema)
module.exports = Mower