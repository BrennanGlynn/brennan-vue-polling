'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionSchema = new Schema({
  option: { type: String, required: true },
  votes: { type: [String], default: [] }
});

var PollSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  options: { type: [OptionSchema], required: true },
  totalVotes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Poll', PollSchema);
//# sourceMappingURL=poll.model.js.map