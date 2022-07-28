const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const constants = require('../../../constants')

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

const isCorrectUser = (req, res, next) => {
  const { id } = req.params
  try {
    const { user } = jwt.verify(req.token, process.env.JWT_SECRET)
    if (user._id !== id) return res.sendStatus(401)
    next()
  } catch {
    res.sendStatus(401)
  }
  
}

const hashPassword = (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, constants.saltRounds);
  req.body.password = hashedPassword
  next()
}

module.exports = {
  verifyToken,
  isCorrectUser,
  hashPassword,
}