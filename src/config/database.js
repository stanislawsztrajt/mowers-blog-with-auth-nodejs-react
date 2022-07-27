const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect(uri)
    console.log('connected to mongodb')
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  connect
}