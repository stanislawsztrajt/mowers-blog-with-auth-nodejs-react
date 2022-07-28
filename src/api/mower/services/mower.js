const jwt = require('jsonwebtoken')
const Mower = require('../models/mower.js')

const isMowerOwner = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    
    const { id } = req.params;
    const { user } = jwt.verify(bearerToken, process.env.JWT_SECRET)
    const isOwner = Mower.find({ _id: id, user_id: user._id })

    if(!isOwner) res.sendStatus(401)

    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = {
  isMowerOwner
}