const express = require('express')
require('path')
const serveStatic = require('serve-static')
const app = express()
app.use(serveStatic(__dirname))
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
