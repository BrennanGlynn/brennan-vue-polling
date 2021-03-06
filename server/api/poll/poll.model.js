'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OptionSchema = new Schema({
  option: { type: String, required: true },
  votes: { type: [String], default: [] }
})

const PollSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  totalVotes: { type: Number, default: 0 }
})

module.exports = mongoose.model('Poll', PollSchema)
