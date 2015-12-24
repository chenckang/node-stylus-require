require('node-require-jsx').install()
require('node-stylus-require').register()

var express = require('express')
var reactEngine = require('react-engine')

var app = express()
var engine = reactEngine.server.create({
})

app.engine('.jsx', engine)

app.set('views', __dirname + '/view')

app.set('view engine', 'jsx')

app.set('view', require('react-engine/lib/expressView'))

app.get('/', function (req, res) {
  res.render('Sample.jsx');
})

var server = app.listen('8080', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Node server is ready on Http://%s:%s/", host, port)
})
