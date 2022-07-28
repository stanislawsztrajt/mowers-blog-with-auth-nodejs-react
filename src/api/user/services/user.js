const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const Mower = require('../api/mower/models/mower.js')
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
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
    if (err || authData.user._id !== id) return res.sendStatus(401)
    next()
  })
}

const hashPassword = (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, constants.saltRounds);
  req.body.password = hashedPassword
  next()
}

// const isMowerOwner = (req, res, next) => {
//   const bearerHeader = req.headers.authorization;

//   if (typeof bearerHeader !== "undefined") {
//     const bearerToken = bearerHeader.split(" ")[1];
    
//     const user = jwt.verify(bearerToken, process.env.JWT_SECRET)
//     const { id } = req.params;
//     const isOwner = Mower.find({ _id: id, user_id: user._id })

//     if(!isOwner) res.sendStatus(401)

//     req.token = bearerToken;
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// }

module.exports = {
  verifyToken,
  isCorrectUser,
  hashPassword
  // isMowerOwner
}