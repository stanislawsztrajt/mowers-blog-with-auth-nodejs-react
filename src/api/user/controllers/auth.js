const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  console.log('login')
}

const signUp = async (req, res) => {
  console.log('sign up')
}

const logout = async (req, res) => {
  console.log('logout')
}

module.exports = {
  login,
  signUp,
  logout
}