const express = require('express')
const app = express()
const {renderToString} = require('react-dom/server')
const React = require('react')
app.use('/', function(req, res) {
  res.send(renderToString(React.createElement('div', null, 'hello world')))
})
app.listen(3000, function(){console.log('app is running on port 3000!')})
