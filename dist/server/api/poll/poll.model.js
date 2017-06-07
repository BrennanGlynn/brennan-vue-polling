'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionSchema = new Schema({
  option: { type: String, required: true },
  votes: { type: Number, default: 0 }
});

var PollSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  options: { type: [OptionSchema], required: true }
});

module.exports = mongoose.model('Poll', PollSchema);
//# sourceMappingURL=poll.model.js.map