'use strict';

var express = require('express');
require('path');
var serveStatic = require('serve-static');
var app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
//# sourceMappingURL=server.js.map