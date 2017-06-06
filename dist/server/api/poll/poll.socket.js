

'use strict';

var poll = require('./poll.model');

exports.register = function (socket) {
  poll.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  poll.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('thing:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('thing:remove', doc);
}
//# sourceMappingURL=poll.socket.js.map