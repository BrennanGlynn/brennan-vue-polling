

'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('../config').backend;

mongoose.connect(config.mongo.uri, config.mongo.options);

require('./config/seed');

var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server);
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

exports = module.exports = app;
//# sourceMappingURL=app.js.map