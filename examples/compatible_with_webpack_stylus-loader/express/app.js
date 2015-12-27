require('babel/register')({});

require('node-stylus-require').register()

var express = require('express')
var reactEngine = require('react-engine')
var path = require('path')

var app = express()

var routePath = path.join(__dirname, '/../app/routes.jsx')
var engine = reactEngine.server.create({
  routes: require(routePath),
  routesFilePath: routePath
})

app.engine('.jsx', engine)

app.set('views', path.join(__dirname, '/../webroot/app'))

app.set('view engine', 'jsx')

app.set('view', require('react-engine/lib/expressView'))

app.get('*', function (req, res) {
  res.render(req.url);
})

var server = app.listen('8080', function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Node server is ready on Http://%s:%s/", host, port)
})
