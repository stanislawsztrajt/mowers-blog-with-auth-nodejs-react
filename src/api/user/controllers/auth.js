const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  const unhashedPassword = user ? bcrypt.compareSync(password, user.password) : null

  if(!email || !password || !user || !unhashedPassword) {
    return res.status(401).json({ message: "email or/and password is/are incorrect" })
  }

  const token = generateAccessToken(user)
  res.status(200).json({ jwt: token, user })
}


module.exports = {
  signIn,
}