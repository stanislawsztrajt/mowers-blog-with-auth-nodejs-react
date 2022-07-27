const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const constants = require('../../../constants')

const signIn = async (req, res) => {
  console.log(req.token)
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  const unhashedPassword = bcrypt.compareSync(password, user.password)

  if(!email || !password || !user || !unhashedPassword) {
    return res.status(401).json({ message: "email or password uncorrect" })
  }

  jwt.sign({ user }, 'secretkey', (err, token) => {
    res.status(200).json({ jwt: token, user })
  })
}

const signUp = async (req, res) => {
  console.log('sign up')
}

const logout = async (req, res) => {
  console.log('logout')
}

module.exports = {
  signIn,
  signUp,
  logout
}