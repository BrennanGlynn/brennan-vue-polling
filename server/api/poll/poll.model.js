'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PollSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  options: { type: [
    {
      option: String,
      votes: { type: Number, default: 0 }
    }
  ], required: true }
})

module.exports = mongoose.model('Poll', PollSchema)
