'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  options: { type: [{
      option: String,
      votes: { type: Number, default: 0 }
    }], required: true }
});

module.exports = mongoose.model('Poll', PollSchema);
//# sourceMappingURL=poll.model.js.map