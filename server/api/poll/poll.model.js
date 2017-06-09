'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OptionSchema = new Schema({
  option: { type: String, required: true },
  votes: { type: Number, default: 0 }
})

const PollSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  totalVotes: Number
})

module.exports = mongoose.model('Poll', PollSchema)
