const Mower = require('../models/mower')

const get = async (req, res) => {
  try {
    const mowers = await Mower.find()
    res.status(200).json(mowers)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const create = async (req, res) => {
  try {
    const mower = new Mower(req.body);
    const newMower = await mower.save()
    res.status(200).json(newMower)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const getAll = async (req, res) => {
  try {
    const id = req.params.id;
    const mower = await Mower.findById(id)
    res.status(200).json(mower)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const update = async (req, res) => {
  try {
    const _id = req.params.id;
    const mower = await Mower.findByIdAndUpdate(_id, req.body)
    const updatedMower = Object.assign(mower, req.body)
    
    res.status(200).json(updatedMower)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

const remove = async (req, res) => {
  try {
    const _id = req.params.id;
    const mower = await Mower.findByIdAndDelete(_id)
    res.status(200).json(mower)
  } catch (err) {
    res.status(404).json({
      message: err.message
    })
  }
}

module.exports = {
  get,
  create,
  getAll,
  update,
  remove
}